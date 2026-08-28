# Security Contract

Browser input, URLs, cookies, headers, uploads, and third-party responses are untrusted. Only server code may access secrets or privileged Cloudflare bindings; `NEXT_PUBLIC_*` is always public.

- Validate input at every Route Handler or Server Action boundary.
- Return stable, non-sensitive errors and never expose provider payloads or stack traces.
- Use least-privilege Cloudflare and GitHub tokens. Production secrets never enter pull-request jobs.
- Keep objects private by default and add authentication before exposing user-owned data.
- Keep the baseline response headers in `next.config.ts`; design a nonce- or hash-based script policy before rendering untrusted HTML or adding third-party scripts.
- Keep dependencies current and minimal. CI rejects high-severity advisories.

For an exposure, rotate secrets, disable the affected path, preserve non-sensitive evidence, and follow the [incident runbook](../runbooks/incident-response.md).
