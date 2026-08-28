<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# WebTemplate collaboration contract

Read `docs/PROJECT-PROGRESS.md` first. Use `docs/PROJECT-CONTEXT.md` for architecture and `docs/RUNBOOK-INDEX.md` for operations.

- Define a verifiable outcome before editing. Keep unrelated changes untouched.
- Prefer a regression test for fixes. Run checks in proportion to risk.
- Use mise, pnpm, and `rg`. Keep Server Components as the default.
- Public copy is a complete `Record<PublicLocale, T>`. English has no URL prefix; other locales use `/:locale`.
- Check English and Chinese, mobile width, dark mode, keyboard focus, reduced motion, and failure states for UI changes.
- Cloudflare is the only hosted platform. Add D1, R2, or KV only for a concrete feature. GCP and payment systems are out of scope.
- Route Handlers are external HTTP boundaries. Prefer Server Components for reads and Server Actions for UI mutations.
- Never commit secrets, local login state, or generated test artifacts.
- Fast gate: `mise exec -- pnpm check:fast`. Full gate: `mise exec -- pnpm check`. Runtime preview: `mise exec -- pnpm preview`.
- Write reader-facing final-state docs. Current facts live in progress, durable decisions in ADRs, and operations in runbooks.
