# Project Context

| Area | Location | Responsibility |
| --- | --- | --- |
| Routes | `src/app/` | App Router pages, layouts, metadata, and Route Handlers |
| UI | `src/components/` | Reusable server and client components |
| Locale contract | `src/lib/i18n.ts` | Public locales, dictionaries, and URL helpers |
| Styling | `src/app/globals.css` | Tokens, themes, responsive behavior, and motion policy |
| Tests | `tests/` | Unit, desktop, mobile, i18n, accessibility, and health acceptance |
| Cloudflare | `wrangler.jsonc`, `open-next.config.ts` | Worker runtime and deployment |
| Automation | `.github/workflows/` | CI and production deployment |

The browser reaches one Cloudflare Worker. The template starts stateless. Use D1 for bounded relational state, R2 for objects, KV for small eventual-consistency cache/config, and Durable Objects only for proven coordination needs.

Public locale URLs, persisted theme values, API shapes, and stored data are contracts. Changes must remain compatible or include migration and rollback.
