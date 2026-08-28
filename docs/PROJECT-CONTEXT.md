# 项目上下文

| 领域 | 位置 | 职责 |
| --- | --- | --- |
| 路由 | `src/app/` | App Router 页面、布局、metadata 和 Route Handlers |
| UI | `src/components/` | 可复用的服务端和客户端组件 |
| 语言契约 | `src/lib/i18n.ts` | 公开语言、字典和 URL 工具 |
| 样式 | `src/app/globals.css` | 设计 token、主题、响应式行为和动态效果策略 |
| 测试 | `tests/` | 单元、桌面端、移动端、国际化、可访问性和健康检查验收 |
| Cloudflare | `wrangler.jsonc`、`open-next.config.ts` | Worker 运行时和部署配置 |
| 自动化 | `.github/workflows/` | CI 和生产部署 |

浏览器只访问一个 Cloudflare Worker。模板初始状态无持久化依赖：有限的关系型数据使用 D1，对象文件使用 R2，小型最终一致缓存或配置使用 KV；只有存在明确协调需求时才使用 Durable Objects。

公开语言 URL、持久化主题值、API 结构和存储数据都属于兼容性契约。变更必须保持兼容，或者同时提供迁移和回滚方案。
