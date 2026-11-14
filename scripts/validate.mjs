import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];
const parse = name => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8').replace(/^\uFEFF/, ''));
const resources = parse('data/resources.json');
const meta = parse('research/github-metadata.json');
const lookup = new Map(meta.map(x => [x.requested_repository, x]));
const ids = new Set();
for (const r of resources) {
  if(ids.has(r.id)) errors.push(`Duplicate resource id: ${r.id}`);
  ids.add(r.id);
  for(const key of ['repo','category','type','level','priority','license','license_scope','prerequisite','read','learn','exercise','cost','language','note']) {
    if(typeof r[key] !== 'string' || !r[key].trim()) errors.push(`${r.id}: missing ${key}`);
  }
  const m = lookup.get(r.repo);
  if(!m) errors.push(`${r.id}: no metadata record`);
  else if(m.status !== 'verified') warnings.push(`${r.repo}: metadata error (${m.error})`);
  if(m?.archived && r.priority === '优先实践') errors.push(`${r.id}: archived repository marked first choice`);
}
function walk(folder) {
  return fs.readdirSync(folder, {withFileTypes:true}).flatMap(e => {
    if(['.git','node_modules','readmes','licenses','pages'].includes(e.name)) return [];
    const p=path.join(folder,e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const files = walk(root);
let links = 0;
for(const file of files.filter(f=>f.endsWith('.md'))) {
  const text=fs.readFileSync(file,'utf8');
  const withoutCode=text.replace(/```[\s\S]*?```/g,'');
  for(const match of withoutCode.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    let target=match[1].split(/\s+"/)[0].replace(/^<|>$/g,'');
    if(/^(https?:|mailto:|#)/i.test(target)) continue;
    target=decodeURIComponent(target.split('#')[0]);
    if(!target) continue;
    links++;
    if(!fs.existsSync(path.resolve(path.dirname(file),target))) errors.push(`${path.relative(root,file)}: broken local link ${target}`);
  }
}
const examples=fs.readFileSync(path.join(root,'templates/evaluation-set.jsonl'),'utf8').trim().split(/\r?\n/).map((line,i)=>{
  try{return JSON.parse(line)}catch{errors.push(`Invalid JSONL line ${i+1}`);return {}}
});
if(new Set(examples.map(x=>x.id)).size !== examples.length) errors.push('Duplicate evaluation case ID');
for(const file of files) {
  if(!/\.(md|json|jsonl|ps1|mjs|csv)$/.test(file)) continue;
  const text=fs.readFileSync(file,'utf8');
  if(/gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|sk-[A-Za-z0-9]{35,}/.test(text)) errors.push(`Possible secret in ${path.relative(root,file)}`);
}
console.log(JSON.stringify({resources:resources.length,verified_metadata:meta.filter(x=>x.status==='verified').length,candidates:meta.length,markdown_files:files.filter(f=>f.endsWith('.md')).length,local_links_checked:links,evaluation_cases:examples.length,warnings,errors},null,2));
if(errors.length) process.exitCode=1;
