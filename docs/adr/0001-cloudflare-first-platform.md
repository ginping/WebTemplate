# ADR 0001：Cloudflare 优先的轻量平台

## 决策

通过 OpenNext 将标准 Next.js App Router 应用运行在 Cloudflare Workers 上。项目从无状态架构开始，只有需求确实需要相应语义时，才启用 D1、R2、KV、Queues 或 Durable Objects。

## 原因

该方案降低了运维负担，使首个版本无需单独后端即可上线。OpenNext 已具备可用的 Next.js 适配能力。Cloudflare 为新应用推荐的 vinext 仍是 Next.js API 的 beta 重实现版本；待其稳定发布并通过兼容性验收后再重新评估。

## 影响

首次部署只需要一个 Worker。产品代码必须兼容 Workers 运行时。新增存储时必须同时定义所有权、容量限制、本地测试、备份预期和回滚方式。GCP 和支付能力不属于模板范围。
