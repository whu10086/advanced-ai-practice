# AI 学术研究：建立能回到原文的证据链

[返回首页](../README.md) · [资源总表](05-resource-catalog.md)

适合能阅读本专业论文、想提高选题调研、阅读整理、实验和成果组织效率的人。第一阶段交付一份可信的文献证据矩阵，第二阶段完成一个可复现的小实验。

## 从研究问题到证据矩阵

1. 把主题变成具体问题，例如“在固定检索预算下，查询改写是否改善中文学术问答的证据召回？”列出对象、干预、比较方式和指标。
2. 用本领域数据库、出版社、arXiv 或官方仓库检索，记录关键词、检索日期与筛选条件。AI 帮你生成同义词和分类，但文献存在性要通过 DOI、出版页或原文确认。
3. 阅读 8—12 篇论文，填写[文献矩阵](../templates/literature-matrix.csv)。先做两篇人工精读，建立判断标准，再让 AI 辅助提取其余材料。
4. 每个关键结论保存原文引句、页码/章节、使用的数据集与实验条件。把作者主张、实验证据和自己的推断分别填写。
5. 整合一致结果、冲突结果、尚无证据的空白，输出下一步可检验的问题。

建议安排 4—8 小时完成第一版矩阵，前提是题目范围已收窄。领域难度、原文获取和人工核查时间会显著影响工作量。

## 推荐资源与具体读法

| 资源 | 重点阅读 | 适合训练什么 | 使用边界 |
| --- | --- | --- | --- |
| [STORM / Co-STORM](https://github.com/stanford-oval/storm) | How it works、检索模块与 outline/article pipeline | 多视角追问、检索、提纲与带引用的长文组织 | 方法阅读优先；最后推送较久，生成文章需要人工编辑与查证 |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 当前 README 的 research、sources、配置与示例 | 多来源调查与报告生成 | 首轮核验为 Apache-2.0、未归档；引用仍逐条核验 |
| [DSPy](https://github.com/stanfordnlp/dspy) | signatures、modules、metrics、optimizers | 把“总结得更好”变成可评测任务 | 开发集优化与最终留出测试分离 |
| [Ragas](https://github.com/vibrantlabsai/ragas) | RAG evaluation 与 test-set generation | 检索和回答质量的分开评估 | 模型评分应配合人工抽检与标注标准 |
| [Zotero](https://github.com/zotero/zotero) | 官方文档中的 collection、notes、citation management | 文献元数据、PDF、标签和引用管理 | 是研究基础设施，AI 功能通常来自额外插件，需分别检查许可和数据流向 |
| [JupyterLab](https://github.com/jupyterlab/jupyterlab) | Notebook、kernel 与可复现运行 | 数据分析、实验和图表 | 记录依赖、随机种子、数据来源和运行顺序 |
| [Jupyter Book](https://github.com/jupyter-book/jupyter-book) | Markdown/Notebook、引用、计算内容发布 | 把研究过程整理成可阅读的成果 | 新旧主版本存在差异，按当前文档选一套依赖 |

STORM 原论文：[Assisting in Writing Wikipedia-like Articles From Scratch with Large Language Models](https://arxiv.org/abs/2402.14207)。DSPy 原论文：[Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714)。论文适合解释方法设计，当前安装方式以项目文档为准。

## 一项适合进阶学习的小实验

题目：比较“直接问答”和“先检索证据再回答”在自选领域资料上的表现。

- 数据：10 篇合法获取的公开文献，制作 20 个可从原文回答的问题，额外加入 5 个材料不足的问题。
- 基线 A：仅给问题，不提供资料。
- 方案 B：提供检索片段，要求逐条引用并允许回答“现有材料不足”。
- 控制变量：相同模型与版本、相同问题集、相同评分标准；记录检索设置与上下文限制。
- 指标：结论正确率、引用是否支持结论、材料不足时的正确拒答比例、总耗时与费用。
- 交付：题目集、原始输出、人工评分表、运行 Notebook 和结果说明。

这是一项教学实验，少量自选样例只能支持本任务范围内的判断。若要形成论文证据，需要独立测试集、合理的采样与统计设计，并报告重复实验或不确定性。

## 如何阅读自动科研 Agent 项目

[HKUDS/AI-Researcher](https://github.com/HKUDS/AI-Researcher) 展示了从论文到想法、实验和文稿的长链条。适合拆解任务依赖、工具环境和实验记录设计。首轮未定位到顶层明确许可文件，最后推送距核验日超过一年，因此列为探索阅读，暂不建议作为初学者首个复现或再分发项目。

[Open Deep Research](https://github.com/langchain-ai/open_deep_research) 已归档。可以阅读其计划、搜索、压缩与最终报告的实现，再结合 [Deep Research from Scratch](https://github.com/langchain-ai/deep_research_from_scratch) 的课程材料学习。课程项目和历史参考实现的维护状态分别记录在目录中。

## 两条核查规则

**结论必须回到原文。** 不能仅以标题、摘要或另一个模型的转述作为证据。找到真实论文也不代表该论文支持当前结论。

**实验必须回到运行记录。** AI 可以生成分析代码和写作草稿，最终数字应来自可运行脚本与保存的数据。把人工修正和重新运行保留在版本历史中，后续别人才能理解数字如何产生。
