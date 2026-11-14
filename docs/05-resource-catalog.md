# 进阶资源目录

[返回首页](../README.md) · [筛选和许可方法](07-methodology.md)

首轮核验：2026-11-14（Asia/Shanghai）。共收录 **37 项**，含优先实践、专项进阶、方法阅读、历史与许可对照。下文为文档审阅结果，未逐项安装运行。

最近推送日期取上游 UTC 日期，是代码活动线索；维护者 README 的停维护声明单独处理。费用描述为构成项，不是价格承诺。完整上游元数据见 [核验快照](../research/github-metadata.json)。

## AI Coding

| 资源 | 类型 / 难度 | 推荐层级 | 许可 | 最近推送 / API 归档 |
| --- | --- | --- | --- | --- |
| [openai/codex](https://github.com/openai/codex) | 工具 / 中级 | 优先实践 | Apache-2.0 | 2026-11-14 / 未归档 |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 工具 / 中级 | 优先实践 | Apache-2.0 | 2026-05-22 / 未归档 |
| [github/spec-kit](https://github.com/github/spec-kit) | 方法与模板 / 中级 | 优先实践 | MIT | 2026-11-12 / 未归档 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 方法与模板 / 中级 | 优先实践 | MIT | 2026-11-14 / 未归档 |
| [obra/superpowers](https://github.com/obra/superpowers) | 技能与方法 / 中级 | 优先实践 | MIT | 2026-11-03 / 未归档 |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | 工具 / 中高级 | 专项进阶 | Apache-2.0 | 2026-11-14 / 未归档 |
| [continuedev/continue](https://github.com/continuedev/continue) | 历史工具 / 中级 | 历史参考 | Apache-2.0 | 2026-11-13 / 未归档 |

### openai/codex

- **前置与语言**：Git、终端和项目运行基础；英文。
- **具体读哪里**：README、贡献指南、官方文档入口。
- **学到什么**：在仓库上下文中执行任务、检查变更和验证。
- **实践交付**：完成一个带四类验收场景的小功能。
- **成本构成**：模型或账号额度；无需专用 GPU。
- **许可范围**：仓库代码；模型服务另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/openai/codex/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/openai/codex/main/README.md)。
- **选用提醒**：选择一个编程助手即可开始。

### Aider-AI/aider

- **前置与语言**：Git 与基本编程；英文。
- **具体读哪里**：README 的 repomap、Git、lint/test 文档。
- **学到什么**：上下文选择、代码映射与检查反馈。
- **实践交付**：修复单个缺陷并保存前后验证。
- **成本构成**：支持多种模型；调用或本地算力另计。
- **许可范围**：仓库代码。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/Aider-AI/aider/main/README.md)。
- **选用提醒**：最近推送距核验日数月，先验证接口兼容性。

### github/spec-kit

- **前置与语言**：需求场景描述与一个可用编程助手；英文，含中文 README。
- **具体读哪里**：Choose your process、模板、官方文档。
- **学到什么**：将需求贯穿规格、计划、实现和验证。
- **实践交付**：把模糊需求写成可检查场景。
- **成本构成**：工具本身可本地使用；助手调用另计。
- **许可范围**：仓库代码与模板。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/github/spec-kit/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/github/spec-kit/main/README.md)。
- **选用提醒**：新项目与完整规格流程可优先考虑。

### Fission-AI/OpenSpec

- **前置与语言**：已有小项目与 Git；英文。
- **具体读哪里**：示例 specs、changes 与变更归档。
- **学到什么**：用增量规格约束已有项目的改动。
- **实践交付**：新增一个小功能并归档变更。
- **成本构成**：助手模型调用另计。
- **许可范围**：仓库代码与模板。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/README.md)。
- **选用提醒**：和 Spec Kit 二选一落地。

### obra/superpowers

- **前置与语言**：理解任务拆解与验证；英文。
- **具体读哪里**：Basic Workflow、调试和验证相关技能目录。
- **学到什么**：把设计、计划、调试和完成检查写成操作流程。
- **实践交付**：提炼一张自己的编程操作卡。
- **成本构成**：宿主与模型调用另计。
- **许可范围**：仓库；宿主工具另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/obra/superpowers/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/obra/superpowers/main/README.md)。
- **选用提醒**：先阅读方法；按实际任务采用需要的部分。

### aaif-goose/goose

- **前置与语言**：工具调用与命令行；英文。
- **具体读哪里**：README、扩展和 MCP 相关入口。
- **学到什么**：通过扩展组合本地工具。
- **实践交付**：连接一个只读资料查询工具。
- **成本构成**：模型和外部服务另计。
- **许可范围**：仓库代码；首轮 API 已确认迁移。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/aaif-goose/goose/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/aaif-goose/goose/main/README.md)。
- **选用提醒**：标准仓库为 aaif-goose/goose，已直接核验新地址。

### continuedev/continue

- **前置与语言**：IDE 扩展与配置基础；英文。
- **具体读哪里**：README 的停维护声明与 Final 2.0.0 Release。
- **学到什么**：学习 IDE 助手架构与上下文组织。
- **实践交付**：仅做架构阅读笔记。
- **成本构成**：模型调用另计。
- **许可范围**：仓库代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/continuedev/continue/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/continuedev/continue/main/README.md)。
- **选用提醒**：API archived=false，但 README 明确不再积极维护、只读。

## AI 工作流

| 资源 | 类型 / 难度 | 推荐层级 | 许可 | 最近推送 / API 归档 |
| --- | --- | --- | --- | --- |
| [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | 可视化工具 / 中级 | 优先实践 | MIT | 2026-11-14 / 未归档 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 框架 / 中高级 | 优先实践 | MIT | 2026-11-14 / 未归档 |
| [huggingface/smolagents](https://github.com/huggingface/smolagents) | 框架 / 中高级 | 专项进阶 | Apache-2.0 | 2026-11-10 / 未归档 |
| [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | SDK / 中高级 | 专项进阶 | MIT | 2026-11-05 / 未归档 |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 参考实现 / 中高级 | 专项进阶 | MIT / Apache-2.0 迁移；文档 CC BY 4.0 | 2026-11-12 / 未归档 |
| [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 框架 / 中高级 | 专项进阶 | MIT | 2026-11-14 / 未归档 |
| [anthropics/skills](https://github.com/anthropics/skills) | 技能样例 / 中级 | 专项进阶 | README 声明许多技能 Apache-2.0；按技能确认 | 2026-11-14 / 未归档 |
| [langgenius/dify](https://github.com/langgenius/dify) | 源码可用平台 / 中级 | 补充参考 | Dify modified Apache-2.0 | 2026-11-14 / 未归档 |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | 源码可用平台 / 中级 | 补充参考 | Sustainable Use License；企业部分单独授权 | 2026-11-14 / 未归档 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 历史平台 / 中级 | 历史参考 | 核心 Apache-2.0；企业目录商业许可 | 2026-08-13 / 已归档 |

### langflow-ai/langflow

- **前置与语言**：JSON、输入输出与流程概念；英文。
- **具体读哪里**：README 的 Visual builder、API/export、MCP。
- **学到什么**：把模型、检索和工具拆成清晰节点。
- **实践交付**：导出一条带来源的资料摘要流程。
- **成本构成**：模型与数据库服务另计；可本地运行。
- **许可范围**：仓库代码；外部集成另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/langflow-ai/langflow/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/langflow-ai/langflow/main/README.md)。
- **选用提醒**：严格开源的可视化第一入口。

### langchain-ai/langgraph

- **前置与语言**：Python、状态和函数调用；英文。
- **具体读哪里**：README 官方文档中的 persistence、interrupts 与状态图。
- **学到什么**：持久状态、暂停恢复与条件分支。
- **实践交付**：给周报流程加人工检查和错误分支。
- **成本构成**：模型、搜索与可选云服务另计。
- **许可范围**：框架核心；云服务另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/langchain-ai/langgraph/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/langchain-ai/langgraph/main/README.md)。
- **选用提醒**：先理解单条状态流程再扩展多个 Agent。

### huggingface/smolagents

- **前置与语言**：Python、工具 schema 和执行环境；英文。
- **具体读哪里**：README 的 CodeAgent、tools、沙箱示例。
- **学到什么**：轻量 Agent 循环和代码执行轨迹。
- **实践交付**：在受控环境查询并汇总本地样例。
- **成本构成**：模型服务或本地算力、沙箱服务另计。
- **许可范围**：仓库代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/huggingface/smolagents/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/huggingface/smolagents/main/README.md)。
- **选用提醒**：先限制工具、步数和执行目录。

### modelcontextprotocol/python-sdk

- **前置与语言**：Python、API 和 schema；英文。
- **具体读哪里**：README 的 tools、resources、client/server 示例。
- **学到什么**：把业务能力封装成模型可调用工具。
- **实践交付**：实现一个只读文献索引查询工具。
- **成本构成**：本地示例可不调用模型；连接模型另计。
- **许可范围**：本 SDK 仓库当前许可。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md)。
- **选用提醒**：不要把协议支持等同于工具获得无限权限。

### modelcontextprotocol/servers

- **前置与语言**：MCP 基础；英文。
- **具体读哪里**：README 的 reference servers 与实际实现目录。
- **学到什么**：工具边界、连接方式与参考服务器结构。
- **实践交付**：读懂一个服务器的输入与权限边界。
- **成本构成**：各服务器依赖和模型另计。
- **许可范围**：按文件与贡献的适用许可区分。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/modelcontextprotocol/servers/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/modelcontextprotocol/servers/main/README.md)。
- **选用提醒**：顶层 LICENSE 明示许可迁移，不能只看 API 的 NOASSERTION。

### microsoft/agent-framework

- **前置与语言**：Python 或 .NET、工具调用与状态；英文。
- **具体读哪里**：python/samples/03-workflows、dotnet samples。
- **学到什么**：工作流编排、checkpoint 与人工介入。
- **实践交付**：实现可暂停恢复的三步业务流程。
- **成本构成**：模型和外部平台另计。
- **许可范围**：仓库代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/microsoft/agent-framework/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/microsoft/agent-framework/main/README.md)。
- **选用提醒**：适合已有 .NET/Python 技术栈。

### anthropics/skills

- **前置与语言**：Markdown、脚本与任务规范；英文。
- **具体读哪里**：skills、template、各技能的 SKILL.md 和许可。
- **学到什么**：封装触发条件、操作步骤、脚本和验收。
- **实践交付**：将一个已成功流程写成可复用技能草案。
- **成本构成**：宿主工具、模型和可选依赖另计。
- **许可范围**：逐技能 LICENSE.txt；未确认顶层统一许可。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/anthropics/skills/main/README.md)。
- **选用提醒**：本指南只提供阅读入口；使用前逐目录核验。

### langgenius/dify

- **前置与语言**：模型 API、可选 Docker；含中文文档。
- **具体读哪里**：README 工作流/知识库入口与 LICENSE。
- **学到什么**：观察应用、检索与工作流一体化组织。
- **实践交付**：比较可视化平台对同一摘要任务的表达。
- **成本构成**：模型、部署、搜索与可选云服务另计。
- **许可范围**：多租户和前端标识等附加限制。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/langgenius/dify/main/LICENSE)。
- **选用提醒**：不要归类为无附加条件的标准 Apache 许可。

### n8n-io/n8n

- **前置与语言**：API、JSON 和连接器；英文。
- **具体读哪里**：README 的工作流与集成入口、LICENSE.md。
- **学到什么**：事件触发、连接器与自动化错误处理。
- **实践交付**：只导出本地草稿的资料处理流程。
- **成本构成**：部署、外部接口与可选云服务另计。
- **许可范围**：有内部、个人与非商业等使用限制。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/n8n-io/n8n/master/README.md)。
- **选用提醒**：不视为 OSI 意义的无用途限制开源许可。

### FlowiseAI/Flowise

- **前置与语言**：可视化 Agent 概念；英文。
- **具体读哪里**：README 的归档说明与 Future of Flowise 链接。
- **学到什么**：观察历史可视化实现。
- **实践交付**：架构对照阅读。
- **成本构成**：复现环境和模型另计。
- **许可范围**：按目录与文件区分。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/FlowiseAI/Flowise/main/LICENSE.md)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/FlowiseAI/Flowise/main/README.md)。
- **选用提醒**：GitHub API archived=true，README 同时明确归档。

## 评测与优化

| 资源 | 类型 / 难度 | 推荐层级 | 许可 | 最近推送 / API 归档 |
| --- | --- | --- | --- | --- |
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | 工具 / 中级 | 优先实践 | MIT | 2026-11-14 / 未归档 |
| [vibrantlabsai/ragas](https://github.com/vibrantlabsai/ragas) | 框架 / 中高级 | 专项进阶 | Apache-2.0 | 2026-11-14 / 未归档 |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | 观察工具 / 中高级 | 专项进阶 | 核心 MIT；ee 目录另有许可 | 2026-11-14 / 未归档 |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 框架 / 高级 | 专项进阶 | MIT | 2026-11-13 / 未归档 |
| [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | 结构化生成工具 / 中高级 | 专项进阶 | Apache-2.0 | 2026-09-21 / 未归档 |
| [openai/evals](https://github.com/openai/evals) | 评测参考 / 中高级 | 方法阅读 | 代码 MIT；数据集独立许可 | 2026-04-14 / 未归档 |

### promptfoo/promptfoo

- **前置与语言**：JSON/YAML、输入输出与预期行为；英文。
- **具体读哪里**：README 的 evaluate、providers、assertions 文档入口。
- **学到什么**：固定样例比较提示、模型和流程。
- **实践交付**：用10条样例比较两种摘要提示。
- **成本构成**：调用量随配置和样例数增长。
- **许可范围**：仓库许可；服务另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/promptfoo/promptfoo/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/promptfoo/promptfoo/main/README.md)。
- **选用提醒**：先写预期，再跑比较。

### vibrantlabsai/ragas

- **前置与语言**：Python、RAG 与人工标注标准；英文。
- **具体读哪里**：quickstart、RAG evaluation、test-set generation。
- **学到什么**：区分检索和回答质量、建立评估反馈。
- **实践交付**：评估20道有原文依据的问题。
- **成本构成**：部分指标与生成样例需要模型调用。
- **许可范围**：首轮官方 API 与 LICENSE 已确认。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/vibrantlabsai/ragas/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/vibrantlabsai/ragas/main/README.md)。
- **选用提醒**：标准仓库为 vibrantlabsai/ragas，已直接核验新地址。

### langfuse/langfuse

- **前置与语言**：基本应用开发和调用链；英文。
- **具体读哪里**：README 的 tracing、evaluation 与自托管入口。
- **学到什么**：观察调用轨迹、耗时、成本和失败位置。
- **实践交付**：对一次失败流程保留可解释 trace。
- **成本构成**：自托管基础设施或可选云服务另计。
- **许可范围**：排除 LICENSE 指定企业目录。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/langfuse/langfuse/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/langfuse/langfuse/main/README.md)。
- **选用提醒**：API 的 NOASSERTION 不等于核心没有开源许可。

### stanfordnlp/dspy

- **前置与语言**：Python、指标与开发/测试集划分；英文。
- **具体读哪里**：官方 docs 的 signatures、modules、metrics、optimizers。
- **学到什么**：用任务指标优化模块化 AI 程序。
- **实践交付**：在开发集优化、在留出问题上比较。
- **成本构成**：优化可能产生多轮模型调用。
- **许可范围**：仓库代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/stanfordnlp/dspy/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/stanfordnlp/dspy/main/README.md)。
- **选用提醒**：先有可靠指标，再谈自动优化。

### dottxt-ai/outlines

- **前置与语言**：Python、schema 与模型后端；英文。
- **具体读哪里**：README 的 structured generation 和后端支持。
- **学到什么**：将输出约束为结构、类型或语法。
- **实践交付**：输出可校验的资料卡 JSON。
- **成本构成**：本地模型算力或兼容服务另计。
- **许可范围**：仓库代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/dottxt-ai/outlines/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/dottxt-ai/outlines/main/README.md)。
- **选用提醒**：结构有效不等于内容真实。

### openai/evals

- **前置与语言**：Python、数据集与评价方法；英文。
- **具体读哪里**：README、eval 定义、registry 和 LICENSE 数据集说明。
- **学到什么**：组织可复用的评测任务与结果。
- **实践交付**：阅读一个 eval 并写出评价标准。
- **成本构成**：模型调用与数据获取另计。
- **许可范围**：LICENSE 指明的数据目录另行核验。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/openai/evals/main/LICENSE.md)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/openai/evals/main/README.md)。
- **选用提醒**：最近推送较久；不把仓库代码许可延伸到全部数据。

## AI 学术研究

| 资源 | 类型 / 难度 | 推荐层级 | 许可 | 最近推送 / API 归档 |
| --- | --- | --- | --- | --- |
| [stanford-oval/storm](https://github.com/stanford-oval/storm) | 研究实现 / 中高级 | 方法阅读 | MIT | 2025-09-30 / 未归档 |
| [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) | 研究工具 / 中高级 | 专项进阶 | Apache-2.0 | 2026-11-12 / 未归档 |
| [langchain-ai/open_deep_research](https://github.com/langchain-ai/open_deep_research) | 历史研究实现 / 高级 | 历史参考 | MIT | 2026-08-10 / 已归档 |
| [HKUDS/AI-Researcher](https://github.com/HKUDS/AI-Researcher) | 探索研究实现 / 高级 | 补充参考 | 未确认明确顶层许可 | 2025-10-16 / 未归档 |
| [zotero/zotero](https://github.com/zotero/zotero) | 研究基础设施 / 初中级 | 优先实践 | AGPLv3；第三方部分各自许可 | 2026-11-14 / 未归档 |
| [jupyterlab/jupyterlab](https://github.com/jupyterlab/jupyterlab) | 研究基础设施 / 中级 | 优先实践 | BSD-3-Clause | 2026-11-14 / 未归档 |
| [jupyter-book/jupyter-book](https://github.com/jupyter-book/jupyter-book) | 成果组织 / 中级 | 专项进阶 | BSD-3-Clause | 2026-11-04 / 未归档 |

### stanford-oval/storm

- **前置与语言**：Python、检索、基本研究阅读能力；英文。
- **具体读哪里**：How STORM works、retrieval module、outline/article pipeline。
- **学到什么**：多视角提问与带来源的长文组织。
- **实践交付**：人工对照其提问方法完善文献综述提纲。
- **成本构成**：运行需要模型和搜索服务；多轮调用。
- **许可范围**：仓库代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/stanford-oval/storm/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/stanford-oval/storm/main/README.md)。
- **选用提醒**：最后推送 2025-09-30；依赖需另行试跑。

### assafelovic/gpt-researcher

- **前置与语言**：Python、搜索 API 和证据核查；含中文 README。
- **具体读哪里**：README 的 architecture、配置、sources 与示例。
- **学到什么**：计划、检索和聚合报告的任务拆分。
- **实践交付**：用小主题生成报告后逐条核验关键引用。
- **成本构成**：模型、搜索与长任务调用量另计。
- **许可范围**：仓库代码；第三方服务另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/assafelovic/gpt-researcher/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/assafelovic/gpt-researcher/main/README.md)。
- **选用提醒**：维护者关于准确性的宣传应以实际样例验证。

### langchain-ai/open_deep_research

- **前置与语言**：Python、LangGraph 和搜索工具；英文。
- **具体读哪里**：配置、计划/检索/压缩/报告流程和 evaluation。
- **学到什么**：完整研究流程的分阶段设计。
- **实践交付**：架构阅读，和课程 Notebook 对照。
- **成本构成**：模型、搜索和评测调用另计。
- **许可范围**：仓库代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/README.md)。
- **选用提醒**：GitHub API archived=true。

### HKUDS/AI-Researcher

- **前置与语言**：研究方法、Python、Docker 和实验环境；英文。
- **具体读哪里**：README 的 architecture、examples、环境与论文。
- **学到什么**：自动科研长链条的任务依赖与记录设计。
- **实践交付**：只做流程拆解和风险/依赖分析。
- **成本构成**：模型、容器、部分实验需 GPU。
- **许可范围**：公开可见不足以确认复用授权。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/HKUDS/AI-Researcher/main/README.md)。
- **选用提醒**：最后推送 2025-10-16；不列入首个复现或再分发项目。

### zotero/zotero

- **前置与语言**：本领域文献阅读；多语言界面。
- **具体读哪里**：README 官方入口、collection/notes/citation 文档。
- **学到什么**：管理文献、原文和可追溯笔记。
- **实践交付**：整理10篇真实文献与证据矩阵。
- **成本构成**：本地使用可免费；可选存储另计。
- **许可范围**：COPYING 明确源码许可和商标条件。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/zotero/zotero/main/COPYING)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/zotero/zotero/main/README.md)。
- **选用提醒**：不是独立 AI 工具；第三方 AI 插件须分别评估。

### jupyterlab/jupyterlab

- **前置与语言**：Python 与实验基础；英文文档，多语言界面。
- **具体读哪里**：README 的 Notebook、kernel、文档入口。
- **学到什么**：把数据、代码和输出保存在可运行记录中。
- **实践交付**：完成直接问答与检索问答对照实验。
- **成本构成**：本地可免费；模型与算力另计。
- **许可范围**：仓库代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/jupyterlab/jupyterlab/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/jupyterlab/jupyterlab/main/README.md)。
- **选用提醒**：记录依赖与执行顺序。

### jupyter-book/jupyter-book

- **前置与语言**：Markdown、Notebook 和引用基础；英文。
- **具体读哪里**：README 的 computational content、citation、版本说明。
- **学到什么**：把实验和文献组织成可阅读研究材料。
- **实践交付**：发布一章带引用和结果的实验记录。
- **成本构成**：本地构建可免费；托管另计。
- **许可范围**：仓库代码；内容由作者单独授权。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/jupyter-book/jupyter-book/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/jupyter-book/jupyter-book/main/README.md)。
- **选用提醒**：README 提醒 v1 位于独立分支，勿混用教程。

## 官方进阶教材

| 资源 | 类型 / 难度 | 推荐层级 | 许可 | 最近推送 / API 归档 |
| --- | --- | --- | --- | --- |
| [huggingface/agents-course](https://github.com/huggingface/agents-course) | 课程 / 中级 | 优先实践 | Apache-2.0 | 2026-11-10 / 未归档 |
| [huggingface/mcp-course](https://github.com/huggingface/mcp-course) | 课程素材 / 中级 | 补充参考 | Apache-2.0 | 2026-11-10 / 未归档 |
| [langchain-ai/langchain-academy](https://github.com/langchain-ai/langchain-academy) | 课程 / 中高级 | 专项进阶 | MIT | 2026-06-15 / 未归档 |
| [langchain-ai/deep_research_from_scratch](https://github.com/langchain-ai/deep_research_from_scratch) | 项目课程 / 中高级 | 优先实践 | MIT | 2026-08-11 / 未归档 |
| [anthropics/courses](https://github.com/anthropics/courses) | 历史课程 / 中级 | 历史参考 | CC BY-NC 4.0 | 2026-08-28 / 已归档 |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 案例集 / 中高级 | 优先实践 | MIT | 2026-11-14 / 未归档 |

### huggingface/agents-course

- **前置与语言**：Python 和 LLM 基础；英文为主，可检查翻译目录。
- **具体读哪里**：Unit 2、Agentic RAG、Observability/Evaluation、Final Project。
- **学到什么**：把 Agent 框架用到任务并评价效果。
- **实践交付**：完成最终任务的小规模本地版本。
- **成本构成**：取决于所选模型、服务与运行平台。
- **许可范围**：仓库教材；模型与服务另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/huggingface/agents-course/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/huggingface/agents-course/main/README.md)。
- **选用提醒**：已有基础可跳过 Unit 0/1。

### huggingface/mcp-course

- **前置与语言**：API 和一门编程语言；英文。
- **具体读哪里**：仓库 units 与 MCP client/server 材料。
- **学到什么**：工具连接与协议实现概念。
- **实践交付**：对照 SDK 实现一个只读工具。
- **成本构成**：依练习模型和服务决定。
- **许可范围**：仓库教材。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/huggingface/mcp-course/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/huggingface/mcp-course/main/README.md)。
- **选用提醒**：当前 README 仍含 Coming Soon，需检查具体章节完整度；完整实现优先读 SDK。

### langchain-ai/langchain-academy

- **前置与语言**：Python 和 LangGraph 基础；英文。
- **具体读哪里**：与状态、持久化、人工介入和记忆相关 Notebook。
- **学到什么**：系统学习有状态工作流。
- **实践交付**：复现一个暂停恢复示例并替换成自己的任务。
- **成本构成**：模型调用；可选云平台另计。
- **许可范围**：仓库代码/教材；平台服务另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/langchain-ai/langchain-academy/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/langchain-ai/langchain-academy/main/README.md)。
- **选用提醒**：按当前目录选择模块，注意依赖版本。

### langchain-ai/deep_research_from_scratch

- **前置与语言**：Python 3.11+、uv、Node/MCP 基础；英文。
- **具体读哪里**：README 和逐步构建研究流程的 Notebook。
- **学到什么**：从搜索、工具、上下文压缩到报告生成。
- **实践交付**：只用一个小主题跑通前几步并保存证据。
- **成本构成**：模型、搜索；完整评估另计。
- **许可范围**：仓库代码与教材。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/langchain-ai/deep_research_from_scratch/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/langchain-ai/deep_research_from_scratch/main/README.md)。
- **选用提醒**：与已归档的完整实现分开判断维护状态。

### anthropics/courses

- **前置与语言**：模型 API、Python 和提示基础；英文。
- **具体读哪里**：real_world_prompting、prompt_evaluations、tool_use。
- **学到什么**：真实提示、评测和工具调用设计。
- **实践交付**：迁移一个例子到当前可用模型并重做评测。
- **成本构成**：模型 API 调用。
- **许可范围**：非商业限制；不归为可自由商业复用代码许可。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/anthropics/courses/master/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/anthropics/courses/master/README.md)。
- **选用提醒**：GitHub API archived=true；示例模型和 SDK 需更新验证。

### openai/openai-cookbook

- **前置与语言**：Python、API 和所选任务基础；英文。
- **具体读哪里**：官方站按 structured outputs、evaluation、retrieval、tools 选题。
- **学到什么**：用完整案例实现具体能力。
- **实践交付**：选一个案例替换自己的输入并添加失败样例。
- **成本构成**：模型、搜索、存储等按案例决定。
- **许可范围**：仓库代码；服务、模型和第三方素材另计。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/openai/openai-cookbook/main/LICENSE)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/openai/openai-cookbook/main/README.md)。
- **选用提醒**：按案例日期、SDK 与模型兼容性选择。

## 许可对照

| 资源 | 类型 / 难度 | 推荐层级 | 许可 | 最近推送 / API 归档 |
| --- | --- | --- | --- | --- |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 商业工具仓库 / 中级 | 补充参考 | 保留所有权利；Anthropic 商业条款 | 2026-11-14 / 未归档 |

### anthropics/claude-code

- **前置与语言**：终端与账号；英文。
- **具体读哪里**：README 与 LICENSE 的商业条款指向。
- **学到什么**：区分公开仓库与开源授权。
- **实践交付**：只做许可辨析阅读。
- **成本构成**：订阅或 API 等服务费用。
- **许可范围**：未归类为可自由复用的开源代码。
- **许可证据**：[上游许可原文](https://raw.githubusercontent.com/anthropics/claude-code/main/LICENSE.md)。
- **内容证据**：[核验所读 README](https://raw.githubusercontent.com/anthropics/claude-code/main/README.md)。
- **选用提醒**：本目录收录用于解释许可边界。

## 未纳入推荐的候选

下面是来源访问或地址核验失败的候选，保留审计记录以避免把猜测地址混入推荐。失败只描述本次访问，不能推断项目不存在或停止维护。

| 候选地址 | 本轮结果 |
| --- | --- |
| allenai/ScholarQA | Response status code does not indicate success: 404 (Not Found). |
| anthropics/anthropic-cookbook | Response status code does not indicate success: 403 (rate limit exceeded). |
| full-stack-deep-learning/llm-bootcamp | Response status code does not indicate success: 404 (Not Found). |
