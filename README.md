# WebTemplate

[![CI](https://github.com/ginping/WebTemplate/actions/workflows/ci.yml/badge.svg)](https://github.com/ginping/WebTemplate/actions/workflows/ci.yml)

A production-minded Next.js starter for launching a lightweight web application on Cloudflare Workers. It provides the engineering baseline that is easy to skip in an early prototype: responsive UI, dark mode, typed internationalization, automated tests, documentation contracts, Git hooks, and repeatable CI/CD.

## Included

- Next.js App Router, React, TypeScript strict mode, and Tailwind CSS.
- English at `/` plus Chinese, Spanish, Portuguese, German, French, Japanese, and Korean locale routes.
- Light, dark, and system themes with persistent user choice.
- Responsive and accessible starter UI with reduced-motion support.
- ESLint, Biome, TypeScript, Vitest, Playwright, axe, documentation checks, and Git hooks.
- OpenNext deployment to Cloudflare Workers and GitHub Actions CI/CD.
- A documentation structure for current facts, architecture, quality, decisions, and runbooks.

Authentication, payment, analytics infrastructure, and persistent Cloudflare resources are intentionally absent. Add them only when the product requires them.

## Prerequisites

- Node.js 24
- pnpm 10.6.5
- [mise](https://mise.jdx.dev/) is recommended and configured in `.mise.toml`

## Quick start

```bash
git clone https://github.com/ginping/WebTemplate.git
cd WebTemplate
mise install
mise exec -- pnpm install
mise exec -- pnpm run bootstrap
mise exec -- pnpm exec playwright install chromium webkit
mise exec -- pnpm dev
```

Open `http://127.0.0.1:3000`. The dependency-free health endpoint is `http://127.0.0.1:3000/api/health`.

## Validate

```bash
mise exec -- pnpm check:fast
mise exec -- pnpm check
mise exec -- pnpm preview
```

`check:fast` is the pre-commit gate. `check` adds the production build and browser suite. `preview` builds through OpenNext and runs the result in the Cloudflare Workers runtime.

## Deploy

1. Create a least-privilege Cloudflare API token with Workers Scripts edit access for the target account.
2. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub environment secrets for `production`.
3. Update the Worker name and `SITE_URL` in `wrangler.jsonc`.
4. Run the `Deploy Cloudflare` workflow manually.
5. Verify `/api/health` and the localized home routes on the deployed hostname.

The deployment workflow is manual by default so a newly cloned template cannot deploy accidentally. After configuring the `production` environment and secrets, add a `push` trigger if every accepted `main` commit should deploy automatically.

See [Cloudflare deployment](docs/runbooks/cloudflare-deploy.md) for custom domains, storage bindings, verification, and rollback.

## Create a product from this template

- Rename the package, Worker, page metadata, and product copy.
- Replace the starter surface while keeping the locale and theme contracts.
- Record current scope in [project progress](docs/PROJECT-PROGRESS.md).
- Add Cloudflare storage only when a feature requires durable state.
- Keep the full gate green before enabling automatic production deploys.

## License

MIT
