# Project Progress

## Current stage

The repository is a reusable web foundation with no product domain, authentication, payment, or persistent storage.

## Active priorities

1. Replace the starter page with one coherent product idea.
2. Preserve the locale, theme, responsive, accessibility, and test contracts.
3. Add only the smallest Cloudflare capability required by the first usable workflow.

## Current facts

- Next.js runs locally and deploys to Cloudflare Workers through OpenNext.
- English is unprefixed; other public locales use a URL prefix.
- Production deployment is manual until the target repository has a reviewed Cloudflare environment and least-privilege secrets. Automatic deployment from `main` is an explicit opt-in.
- No database, bucket, KV namespace, payment integration, GCP resource, or external backend exists.

Keep durable decisions in `docs/adr/`, operations in `docs/runbooks/`, and release history in `docs/CHANGELOG.md`.
