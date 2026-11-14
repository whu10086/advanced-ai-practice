import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const resources = JSON.parse(fs.readFileSync(path.join(root, 'data/resources.json'), 'utf8'));
const meta = JSON.parse(fs.readFileSync(path.join(root, 'research/github-metadata.json'), 'utf8').replace(/^\uFEFF/, ''));
const lookup = new Map(meta.map(x => [x.requested_repository, x]));
const escaped = x => String(x ?? '待核实').replaceAll('|', '\\|').replaceAll('\n', ' ');
let out = '# 进阶资源目录\n\n[返回首页](../README.md) · [筛选和许可方法](07-methodology.md)\n\n';
out += `首轮核验：2026-11-14（Asia/Shanghai）。共收录 **${resources.length} 项**，含优先实践、专项进阶、方法阅读、历史与许可对照。下文为文档审阅结果，未逐项安装运行。\n\n`;
out += '最近推送日期取上游 UTC 日期，是代码活动线索；维护者 README 的停维护声明单独处理。费用描述为构成项，不是价格承诺。完整上游元数据见 [核验快照](../research/github-metadata.json)。\n\n';
for (const category of [...new Set(resources.map(x => x.category))]) {
  out += `## ${category}\n\n`;
  out += '| 资源 | 类型 / 难度 | 推荐层级 | 许可 | 最近推送 / API 归档 |\n| --- | --- | --- | --- | --- |\n';
  const group = resources.filter(x => x.category === category);
  for (const r of group) {
    const m = lookup.get(r.repo);
    const repo = m?.full_name ?? r.repo;
    const activity = m?.pushed_at ? `${m.pushed_at.slice(0,10)} / ${m.archived ? '已归档' : '未归档'}` : '本轮刷新失败，见备注及快照';
    out += `| [${escaped(repo)}](https://github.com/${repo}) | ${escaped(r.type)} / ${escaped(r.level)} | ${escaped(r.priority)} | ${escaped(r.license)} | ${activity} |\n`;
  }
  out += '\n';
  for (const r of group) {
    const m = lookup.get(r.repo);
    const repo = m?.full_name ?? r.repo;
    out += `### ${repo}\n\n`;
    out += `- **前置与语言**：${r.prerequisite}；${r.language}。\n`;
    out += `- **具体读哪里**：${r.read}。\n`;
    out += `- **学到什么**：${r.learn}。\n`;
    out += `- **实践交付**：${r.exercise}。\n`;
    out += `- **成本构成**：${r.cost}。\n`;
    out += `- **许可范围**：${r.license_scope}。\n`;
    if(m?.license_url) out += `- **许可证据**：[上游许可原文](${m.license_url})。\n`;
    if(m?.readme_url) out += `- **内容证据**：[核验所读 README](${m.readme_url})。\n`;
    out += `- **选用提醒**：${r.note}。\n\n`;
  }
}
out += '## 未纳入推荐的候选\n\n';
out += '下面是来源访问或地址核验失败的候选，保留审计记录以避免把猜测地址混入推荐。失败只描述本次访问，不能推断项目不存在或停止维护。\n\n';
out += '| 候选地址 | 本轮结果 |\n| --- | --- |\n';
for(const m of meta.filter(x => x.status === 'error' && !resources.some(r => r.repo === x.requested_repository))) {
  out += `| ${escaped(m.requested_repository)} | ${escaped(m.error)} |\n`;
}
fs.writeFileSync(path.join(root, 'docs/05-resource-catalog.md'), out);
console.log(`Generated catalog for ${resources.length} resources.`);
