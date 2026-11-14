param([string]$RepositoryRoot = (Split-Path -Parent $PSScriptRoot), [switch]$UseGitCredential, [switch]$RetryErrorsOnly)
$ErrorActionPreference = 'Stop'
if ($PSVersionTable.PSVersion.Major -lt 7) { throw 'This script requires PowerShell 7+.' }
$metadataHeaders = @{'User-Agent'='Advanced-AI-Learning-Resource-Audit';Accept='application/vnd.github+json'}
if ($UseGitCredential) {
  $credentialLines = @('protocol=https','host=github.com','') | git credential fill 2>$null
  foreach($line in $credentialLines) {
    if($line.StartsWith('password=')) { $metadataHeaders['Authorization'] = 'Bearer ' + $line.Substring(9) }
  }
  $credentialLines = $null
  $line = $null
  if(-not $metadataHeaders['Authorization']) { throw 'No existing GitHub credential available.' }
}
$outputRoot = Join-Path $RepositoryRoot 'research'
$readmeRoot = Join-Path $outputRoot 'readmes'
New-Item -ItemType Directory -Force -Path $readmeRoot | Out-Null
$metadataPath = Join-Path $outputRoot 'github-metadata.json'
$previous = @()
if(Test-Path -LiteralPath $metadataPath) {$previous = @(Get-Content -LiteralPath $metadataPath -Raw | ConvertFrom-Json)}
$repositories = @(
  'openai/codex','Aider-AI/aider','continuedev/continue','block/goose',
  'github/spec-kit','Fission-AI/OpenSpec','obra/superpowers','anthropics/skills',
  'anthropics/claude-code','n8n-io/n8n','langgenius/dify','langflow-ai/langflow',
  'FlowiseAI/Flowise','langchain-ai/langgraph','microsoft/agent-framework',
  'huggingface/smolagents','modelcontextprotocol/python-sdk','modelcontextprotocol/servers',
  'promptfoo/promptfoo','langfuse/langfuse','stanfordnlp/dspy','explodinggradients/ragas',
  'langchain-ai/open_deep_research','HKUDS/AI-Researcher','allenai/ScholarQA',
  'stanford-oval/storm','assafelovic/gpt-researcher','zotero/zotero',
  'jupyterlab/jupyterlab','jupyter-book/jupyter-book','dottxt-ai/outlines','openai/evals',
  'huggingface/agents-course','huggingface/mcp-course','anthropics/courses',
  'anthropics/anthropic-cookbook','openai/openai-cookbook','full-stack-deep-learning/llm-bootcamp',
  'langchain-ai/deep_research_from_scratch','langchain-ai/langchain-academy'
)
if($RetryErrorsOnly) {$repositories = @($previous | Where-Object status -eq 'error' | ForEach-Object requested_repository)}
$results = $repositories | ForEach-Object -Parallel {
  $repo = $_
  $headers = @{'User-Agent'='Advanced-AI-Learning-Resource-Audit';Accept='application/vnd.github+json'}
  $record = [ordered]@{requested_repository=$repo; checked_at_utc=[DateTime]::UtcNow.ToString('o')}
  try {
    $canonical = switch($repo) {'block/goose' {'aaif-goose/goose'} 'explodinggradients/ragas' {'vibrantlabsai/ragas'} default {$repo}}
    $meta = Invoke-RestMethod -Uri "https://api.github.com/repos/$canonical" -Headers $using:metadataHeaders -TimeoutSec 40 -MaximumRetryCount 2 -RetryIntervalSec 2
    foreach($key in @('full_name','html_url','description','default_branch','created_at','updated_at','pushed_at','stargazers_count','archived','disabled','homepage')) {$record[$key] = $meta.$key}
    $record['license'] = $meta.license
    $record['metadata_url'] = "https://api.github.com/repos/$canonical"
    $record['readme_status'] = 'unavailable'
    foreach($readme in @('README.md','README.rst','readme.md','README.MD','README')) {
      $uri = "https://raw.githubusercontent.com/$($meta.full_name)/$($meta.default_branch)/$readme"
      try {
        $response = Invoke-WebRequest -Uri $uri -Headers $headers -TimeoutSec 35
        $fileName = $repo.Replace('/','__') + '.md'
        [IO.File]::WriteAllText((Join-Path $using:readmeRoot $fileName), [string]$response.Content, [Text.UTF8Encoding]::new($false))
        $record['readme_url'] = $uri
        $record['readme_file'] = "research/readmes/$fileName"
        $record['readme_status'] = 'downloaded'
        break
      } catch { }
    }
    $record['license_status'] = 'unavailable'
    foreach($licenseFile in @('LICENSE','LICENSE.md','LICENSE.txt','LICENSE-MIT','COPYING','license.md')) {
      $uri = "https://raw.githubusercontent.com/$($meta.full_name)/$($meta.default_branch)/$licenseFile"
      try {
        $response = Invoke-WebRequest -Uri $uri -Headers $headers -TimeoutSec 25
        $licenseRoot = Join-Path $using:outputRoot 'licenses'
        [IO.Directory]::CreateDirectory($licenseRoot) | Out-Null
        $fileName = $repo.Replace('/','__') + '.txt'
        [IO.File]::WriteAllText((Join-Path $licenseRoot $fileName), [string]$response.Content, [Text.UTF8Encoding]::new($false))
        $record['license_url'] = $uri
        $record['license_file'] = "research/licenses/$fileName"
        $record['license_status'] = 'downloaded'
        break
      } catch { }
    }
    $record['status'] = 'verified'
  } catch {
    $record['status'] = 'error'
    $record['error'] = $_.Exception.Message
  }
  [pscustomobject]$record
} -ThrottleLimit 3
$merged = @{}
foreach($old in $previous) {$merged[$old.requested_repository] = $old}
foreach($current in $results) {
  $old = $merged[$current.requested_repository]
  if($current.status -eq 'error' -and $old -and $old.status -eq 'verified') {
    $old | Add-Member -NotePropertyName last_refresh_error -NotePropertyValue $current.error -Force
    $old | Add-Member -NotePropertyName last_refresh_attempt_utc -NotePropertyValue $current.checked_at_utc -Force
  } else {
    $merged[$current.requested_repository] = $current
  }
}
$results = @($merged.Values | Sort-Object requested_repository)
$results | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $metadataPath -Encoding utf8
$metadataHeaders.Clear()
$results | Select-Object requested_repository,status,full_name,@{Name='license';Expression={$_.license.spdx_id}},readme_status,license_status,archived,pushed_at | Format-Table -AutoSize
if(@($results | Where-Object status -eq 'error').Count -gt 0) { exit 1 }
