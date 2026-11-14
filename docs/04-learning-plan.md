# 六周实践计划

[返回首页](../README.md)

适用于已学过基础课、每周可投入约 5—8 小时的学习者。时间是建议安排；可以按自己的方向只选其中一条路线。

| 周次 | 主题与前置 | 核心活动 | 交付物与通过条件 |
| --- | --- | --- | --- |
| 第 1 周 | AI Coding；会 Git、能运行项目 | 选 Codex 或 Aider；使用任务模板修复一个真实问题；学会控制上下文 | 一次完整提交；复现与修复后的验证均有记录 |
| 第 2 周 | 规格与调试；完成上一周 | 选 Spec Kit 或 OpenSpec；借鉴 Superpowers 的设计和验证方法 | 一个小功能；至少四类验收场景；别人能按文档运行 |
| 第 3 周 | 工作流；会 JSON 和基本 API 概念 | 用 Langflow 或 LangGraph 整理资料；区分状态、证据和失败分支 | 周报草稿流程；10 条样例；重复输入不会重复执行副作用 |
| 第 4 周 | 工具与评测；流程已可运行 | 从 MCP SDK 做只读工具；用 Promptfoo 或人工表比较两个版本 | 工具 schema、边界样例、修改前后评估与一次费用记录 |
| 第 5 周 | 研究辅助；具备领域阅读能力 | 精读 STORM 的方法；整理 8—12 篇文献；核验所有关键引用 | 文献证据矩阵；有问题意识、支持证据和冲突结果 |
| 第 6 周 | 研究复现；会基本 Python | 用 JupyterLab 完成小实验；选择 Ragas 或 DSPy 进一步学习 | 原始输出、留出问题集、评分、图表与可复现说明 |

## 已有基础的课程可以跳读

- [Hugging Face Agents Course](https://github.com/huggingface/agents-course)：从 Unit 2 的框架、Agentic RAG、Observability/Evaluation 和最终项目开始。基础概念不必重学。
- [LangChain Academy](https://github.com/langchain-ai/langchain-academy)：围绕状态、持久化、人工介入和长期记忆选择材料。课程中的云产品与框架核心分开理解。
- [Deep Research from Scratch](https://github.com/langchain-ai/deep_research_from_scratch)：沿 Notebook 逐步拆开搜索、工具、压缩和报告生成，使用小题目运行。
- [Anthropic Courses](https://github.com/anthropics/courses)：重点是 `real_world_prompting`、`prompt_evaluations` 和 `tool_use`。该仓库已归档，适合方法阅读；课程采用 CC BY-NC 4.0，非商业共享的限制需保留。
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook)：按任务搜索 structured outputs、evaluation、retrieval、tool calling 等主题，先阅读再选一个最接近自己场景的例子。

## 如何组织成分享或学习小组

每次分享安排四个部分：问题和基线、官方资源中的关键设计、现场跑一个正常与一个失败样例、交付物验收。把课程链接放在课前材料，把现场时间留给“为什么失败、怎样验证和修复”。

每周用同一张表记录：本周任务、采用资源、实际交付、失败样例、验证命令或人工证据、耗时、费用、下一步。分享者只能把自己实际执行的部分标为“已跑通”。

## 三个阶段的能力检查

- 两周后：能把一个模糊需求拆成验收场景，读懂 AI 的代码改动并跑验证。
- 四周后：能解释流程的每个状态，区分格式失败、工具失败和证据不足，并用固定样例比较改动。
- 六周后：能逐条核查文献结论，把实验结果追溯到数据和代码，给出结果适用范围。
