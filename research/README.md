# 首轮调研记录

- 本地日期：2026-11-14，Asia/Shanghai。
- 候选地址：40 个；成功完成仓库元数据核验：37 个。
- 资源目录：37 项，其中包含历史项目、研究基础设施及许可辨析条目，全部推荐层级以目录为准。
- 额外 3 个失败候选：`allenai/ScholarQA`、`full-stack-deep-learning/llm-bootcamp` 返回 404；`anthropics/anthropic-cookbook` 本次接口访问限流。它们没有被纳入推荐。
- 已确认迁移：`block/goose` → `aaif-goose/goose`；`explodinggradients/ragas` → `vibrantlabsai/ragas`。最终直接访问新地址完成核验。
- 已归档：Flowise、Open Deep Research、Anthropic Courses。
- README 明确停止积极维护、只读：Continue；API 当时的 `archived` 仍为 false。

## 文件说明

`github-metadata.json` 是官方 API 的精简快照，包含 UTC 时间、原始仓库地址、规范地址、许可证识别结果和来源链接。API 返回的 `NOASSERTION` 或空值没有被篡改；人工许可解读单独写在 `data/resources.json` 与文档中。

`readmes/`、`licenses/` 为本地下载缓存，不纳入 Git 提交。少数文件某次刷新超时后，已有本地缓存仍可阅读；快照中的 unavailable 仅代表该次下载失败，不表示上游没有该文件。

本文档记录的是完成首轮调研时的情况。后续运行刷新脚本会改变 JSON，人工解读和本文数字需要相应复核。

## 验证记录

已执行 `node scripts/build-catalog.mjs`、`node scripts/validate.mjs`，并检查 PowerShell 脚本语法与 Git 文本空白。未逐项安装或调用这些项目的模型服务。

完整筛选逻辑见[方法说明](../docs/07-methodology.md)，阅读建议见[资源目录](../docs/05-resource-catalog.md)。
