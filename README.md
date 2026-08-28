# WebTemplate

[![CI](https://github.com/ginping/WebTemplate/actions/workflows/ci.yml/badge.svg)](https://github.com/ginping/WebTemplate/actions/workflows/ci.yml)

一个面向实际项目的 Next.js 工程模板，适合快速开发并将轻量 Web 应用部署到 Cloudflare Workers。模板预置了原型阶段容易忽略的工程基础：响应式界面、暗黑模式、类型安全的国际化、自动化测试、文档约束、Git hooks 和可重复执行的 CI/CD。

## 包含内容

- Next.js App Router、React、TypeScript 严格模式和 Tailwind CSS。
- 默认英文路径 `/`，以及中文、西班牙语、葡萄牙语、德语、法语、日语和韩语路径。
- 浅色、深色和跟随系统三种主题，并持久化用户选择。
- 支持窄屏、键盘操作、可访问性和减少动态效果的起始界面。
- ESLint、Biome、TypeScript、Vitest、Playwright、axe、文档检查和 Git hooks。
- 通过 OpenNext 部署到 Cloudflare Workers，并使用 GitHub Actions 执行 CI/CD。
- 用于维护当前事实、架构、工程质量、技术决策和运维手册的文档结构。

模板不包含身份认证、支付、分析基础设施和持久化 Cloudflare 资源。只有在产品需求明确时才应引入这些能力。

## 环境要求

- Node.js 24
- pnpm 10.6.5
- 推荐使用 [mise](https://mise.jdx.dev/)；仓库已提供 `.mise.toml`

## 快速开始

```bash
git clone https://github.com/ginping/WebTemplate.git
cd WebTemplate
mise install
mise exec -- pnpm install
mise exec -- pnpm run bootstrap
mise exec -- pnpm exec playwright install chromium webkit
mise exec -- pnpm dev
```

浏览器打开 `http://127.0.0.1:3000`。不依赖外部服务的健康检查地址为 `http://127.0.0.1:3000/api/health`。

## 检查与本地预览

```bash
mise exec -- pnpm check:fast
mise exec -- pnpm check
mise exec -- pnpm preview
```

`check:fast` 是提交前的快速门禁；`check` 还会执行生产构建和浏览器测试；`preview` 会通过 OpenNext 构建项目，并在 Cloudflare Workers 本地运行时中启动结果。

## 部署到 Cloudflare

1. 为目标 Cloudflare 账号创建最小权限 API Token，仅授予所需的 Workers Scripts 编辑权限。
2. 在 GitHub 的 `production` environment 中添加 `CLOUDFLARE_API_TOKEN` 和 `CLOUDFLARE_ACCOUNT_ID` secrets。
3. 修改 `wrangler.jsonc` 中的 Worker 名称和 `SITE_URL`。
4. 手动运行 `Deploy Cloudflare` workflow。
5. 在部署域名上验证 `/api/health` 和各语言首页路径。

部署 workflow 默认只能手动触发，避免刚从模板创建的仓库意外上线。完成 `production` environment 和 secrets 配置后，如果希望每次进入 `main` 的提交自动部署，可以再为该 workflow 添加 `push` 触发条件。

自定义域名、存储绑定、上线验收和回滚方法见 [Cloudflare 部署手册](docs/runbooks/cloudflare-deploy.md)。

## 基于模板创建新产品

- 修改包名、Worker 名称、页面 metadata 和产品文案。
- 替换起始界面，同时保留语言和主题契约。
- 在[项目进展](docs/PROJECT-PROGRESS.md)中记录当前范围和事实。
- 只有功能需要持久化状态时才添加 Cloudflare 存储。
- 启用生产环境自动部署前，确保完整检查持续通过。

## 许可证

MIT
