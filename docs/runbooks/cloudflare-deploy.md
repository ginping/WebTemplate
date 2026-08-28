# Cloudflare 部署

## 前置条件

- `pnpm check` 和 `pnpm preview` 均已通过。
- Wrangler 已在本地完成认证，或者 GitHub 的 `production` environment 已配置 `CLOUDFLARE_API_TOKEN` 和 `CLOUDFLARE_ACCOUNT_ID`。
- Token 仅拥有项目所需账号和 Worker 权限。

## 部署与验收

```bash
mise exec -- pnpm exec wrangler whoami
mise exec -- pnpm deploy
curl --fail --show-error https://YOUR_HOST/api/health
curl --fail --show-error https://YOUR_HOST/
curl --fail --show-error https://YOUR_HOST/zh
```

默认部署到 `workers.dev`。确认 DNS 所有权后再添加自定义域名 route。验收范围包括桌面端、移动端、暗黑模式、语言链接和 Worker 日志。上传成功不等于生产验收通过。

引入存储时，先创建资源并添加 binding，再运行 `pnpm cf-typegen`，同时补充本地和部署环境测试。文档中必须说明保留策略、容量限制、访问方式和回滚方案。

使用 Wrangler 回滚到上一个已验收的 Worker 版本，然后重新执行健康检查和语言路径验证。
