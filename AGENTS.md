# Next.js 版本约束

当前 Next.js 版本包含破坏性变化，API、约定和文件结构都可能与模型训练数据中的版本不同。编写代码前，必须阅读 `node_modules/next/dist/docs/` 中与任务相关的指南。该路径以本文件所在目录为基准解析；在 monorepo 中，仓库根目录未必能直接访问 `next` 包。注意所有废弃提示。

`next.config.ts` 已通过 `agentRules: false` 关闭 Next.js 自动生成的英文 Agent 规则。本节由项目维护；升级 Next.js 时必须根据当前版本文档重新核对其内容。

# WebTemplate 协作约束

开始工作前先阅读 `docs/PROJECT-PROGRESS.md`。架构入口见 `docs/PROJECT-CONTEXT.md`，运维入口见 `docs/RUNBOOK-INDEX.md`。

- 修改前先定义可验证的目标，不触碰无关变更。
- 修复问题时优先补充回归测试，并按风险执行相应检查。
- 使用 mise、pnpm 和 `rg`，默认采用 Server Components。
- 公开文案必须是完整的 `Record<PublicLocale, T>`。英文 URL 不带语言前缀，其他语言使用 `/:locale`。
- UI 变更需要检查中英文、移动端宽度、暗黑模式、键盘焦点、减少动态效果和失败状态。
- Cloudflare 是唯一托管平台。只有具体功能需要时才添加 D1、R2 或 KV。GCP 和支付系统不在模板范围内。
- Route Handler 是对外 HTTP 边界。读取优先使用 Server Components，UI 触发的数据修改优先使用 Server Actions。
- 禁止提交 secrets、本地登录状态和自动生成的测试产物。
- 快速门禁：`mise exec -- pnpm check:fast`；完整门禁：`mise exec -- pnpm check`；运行时预览：`mise exec -- pnpm preview`。
- 文档使用面向读者的最终态表述。当前事实写入项目进展，长期决策写入 ADR，运维操作写入 runbook。
