# AI 进阶实践指南

面向已经学过 Datawhale 等基础课程、希望把 AI 用进真实任务的学习者。围绕 **AI Coding、AI 辅助工作流、AI 学术研究**，整理值得读的开源实现、官方教材、可复用方法与实践作业。

本项目重点训练四种能力：把目标写成可验收的任务；给 AI 提供恰当的上下文和工具；用证据检查结果；把成功做法保存为可重复运行的流程。

**首轮核验日期：2026-11-14（Asia/Shanghai）。** 项目维护状态和许可证以核验快照为准。资源经过官方仓库/API、README 与许可证审阅；尚未逐一安装运行，实践时长是本指南的学习安排建议。

## 从哪里开始

| 你的情况 | 建议入口 | 第一个交付物 |
| --- | --- | --- |
| 能写一点代码，AI 改项目经常失控 | [AI Coding 路线](docs/01-ai-coding.md) | 一个需求清楚、测试通过、可回滚的小功能 |
| 会用对话 AI，想自动化重复工作 | [工作流路线](docs/02-ai-workflows.md) | 一个有结构化输出、错误分支和人工确认的资料周报流程 |
| 能读论文，想提高研究效率 | [学术研究路线](docs/03-ai-research.md) | 一份每个关键结论均能追溯原文的文献证据矩阵 |
| 想系统组织一次进阶学习 | [六周实践计划](docs/04-learning-plan.md) | 三个小作品和一份前后对照评估 |
| 想先比较有哪些资源 | [完整资源目录](docs/05-resource-catalog.md) | 按难度、成本、许可和维护状态选型 |

## 第一轮只选这些

同一角色先选一个工具。下表顺序体现学习收益，完整候选和暂缓推荐项见资源目录。

| 方向 | 资源 | 重点学习的进阶能力 |
| --- | --- | --- |
| 编程执行 | [Codex CLI](https://github.com/openai/codex) / [Aider](https://github.com/Aider-AI/aider) | 仓库上下文、限定修改范围、检查差异、运行验证 |
| 需求与变更 | [Spec Kit](https://github.com/github/spec-kit) / [OpenSpec](https://github.com/Fission-AI/OpenSpec) | 把自然语言需求变成规格、场景和任务 |
| 编程方法 | [Superpowers](https://github.com/obra/superpowers) | 设计、任务拆解、调试、验证的可复用技能 |
| 可视化流程 | [Langflow](https://github.com/langflow-ai/langflow) | 拆分模型、检索、工具和输入输出，导出可复用流程 |
| 有状态流程 | [LangGraph](https://github.com/langchain-ai/langgraph) | 状态、条件分支、持久化、暂停与恢复 |
| 小型 Agent | [smolagents](https://github.com/huggingface/smolagents) | 工具调用循环、执行轨迹与受控代码执行 |
| 工具连接 | [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | 给 AI 提供边界清楚、可测试的工具接口 |
| 结果评估 | [Promptfoo](https://github.com/promptfoo/promptfoo) / [Ragas](https://github.com/vibrantlabsai/ragas) | 固定样例、比较方案、定位失败类型 |
| 检索与研究 | [STORM](https://github.com/stanford-oval/storm) | 多视角提问、检索、提纲与引文组织；作为方法阅读项目 |
| 系统优化 | [DSPy](https://github.com/stanfordnlp/dspy) | 定义任务与指标，用开发集优化、用留出集评估 |
| 研究复现 | [JupyterLab](https://github.com/jupyterlab/jupyterlab) + [Jupyter Book](https://github.com/jupyter-book/jupyter-book) | 保存数据处理、实验、图表和可发布研究记录 |

**工具开源不代表模型、搜索接口或云服务免费。** 基础练习优先使用本地样例和已有模型额度；先做 5—10 个样例再扩大运行，记录调用次数、耗时和费用。纯文档、Git 与证据核查练习可以不调用模型。

## 直接复用的材料

- [编程任务说明模板](templates/coding-task.md)：目标、范围、验收、验证记录。
- [工作流设计模板](templates/workflow-spec.md)：输入输出契约、失败分支、重试、人工审批和成本。
- [文献证据矩阵](templates/literature-matrix.csv)：逐条记录结论、原文位置和核验状态。
- [评测数据模板](templates/evaluation-set.jsonl) 与[评测方法](docs/06-evaluation.md)：区分人工标注、自动校验和模型评审。
- [最小实践作业](labs/README.md)：三个独立练习，均附验收要求。
- [九张进阶操作卡](docs/08-practice-cards.md)：带输入、提示、产出和检查点，可直接改成自己的任务。

## 为什么会有“暂缓推荐”

热门度只表示关注，不能替代维护与许可检查。首轮审阅发现：

- Flowise、Open Deep Research 的 GitHub API 返回 `archived=true`，适合作为历史实现研究。
- Continue 的 API 尚未标记归档，但 README 明确说明不再积极维护并只读，按停维护处理。
- n8n 使用 Sustainable Use License，Dify 使用带附加限制的许可证，分别标注为源码可用资源。
- Claude Code 仓库中的许可文本指向 Anthropic 商业条款，未将其列作可自由复用的开源工具。
- STORM 的最后推送距核验日超过一年，保留其研究方法价值，安装复现前需单独检查依赖。

详见[来源、筛选和许可说明](docs/07-methodology.md)与[核验快照](research/github-metadata.json)。

## 维护与贡献

新增资源请按 [CONTRIBUTING.md](CONTRIBUTING.md) 提交：附官方入口、具体学习章节、一个实践任务、许可证证据和核验日期。推荐标准是“能教会什么、怎样检验学会了”，不按 Star 排名。

```powershell
# PowerShell 7+；只访问官方仓库并刷新本地证据缓存
pwsh -File scripts/collect-sources.ps1
# 如遇 GitHub 匿名限额，可显式选择使用已配置的 Git 凭据：
pwsh -File scripts/collect-sources.ps1 -UseGitCredential
# 离线检查本仓库文件、资源记录与本地链接
node scripts/validate.mjs
```

刷新数据后仍需人工审阅 README 与许可证，核验脚本不会自动改变推荐等级。当前没有后台定时更新。

本仓库原创文档与模板采用 [CC BY 4.0](LICENSE)，原创脚本采用 [MIT](LICENSE-CODE)。所链接的第三方代码、课程、论文与数据遵循各自许可证；本仓库的许可不覆盖这些上游材料。
