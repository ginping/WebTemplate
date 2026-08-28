# Cloudflare Deployment

## Prerequisites

- `pnpm check` and `pnpm preview` pass.
- Wrangler is authenticated locally, or GitHub production has `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
- The token has only the account and Worker permissions this project needs.

## Deploy and verify

```bash
mise exec -- pnpm exec wrangler whoami
mise exec -- pnpm deploy
curl --fail --show-error https://YOUR_HOST/api/health
curl --fail --show-error https://YOUR_HOST/
curl --fail --show-error https://YOUR_HOST/zh
```

The default uses `workers.dev`. Add a custom-domain route only after DNS ownership is known. Verify desktop, mobile, dark mode, locale links, and Worker logs. Upload success alone is not production acceptance.

For storage, create the resource, add its binding, run `pnpm cf-typegen`, and add local and deployed tests. Document retention, limits, access, and rollback.

Rollback to the last accepted Worker version with Wrangler, then repeat health and locale checks.
