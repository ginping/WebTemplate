# 安全契约

浏览器输入、URL、Cookie、请求头、上传内容和第三方响应都不可信。只有服务端代码可以访问 secrets 或高权限 Cloudflare bindings；所有 `NEXT_PUBLIC_*` 变量都会公开到客户端。

- 在每个 Route Handler 或 Server Action 边界验证输入。
- 返回稳定且不敏感的错误信息，不暴露供应商原始响应或堆栈。
- Cloudflare 和 GitHub Token 遵循最小权限原则。生产 secrets 不得进入 Pull Request job。
- 对象默认保持私有；公开用户数据前必须先引入身份认证和授权。
- 保留 `next.config.ts` 中的基础安全响应头。在渲染不可信 HTML 或引入第三方脚本前，先设计基于 nonce 或 hash 的脚本策略。
- 依赖保持精简并及时更新。CI 拒绝存在高危安全公告的依赖树。

发生信息暴露时，立即轮换 secrets、禁用受影响路径、保留不含敏感信息的证据，并按照[故障响应手册](../runbooks/incident-response.md)处理。
