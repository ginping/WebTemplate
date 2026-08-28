# Engineering Quality Review Checklist

## Experience

- Happy, empty, loading, error, retry, and recovery states are defined.
- English and Chinese, all typed dictionaries, mobile width, keyboard focus, dark mode, and reduced motion are checked.
- Errors explain the next action without exposing internals.

## Performance, cost, and security

- Client JavaScript, media, fonts, and third-party scripts are necessary and bounded.
- Server reads avoid waterfalls and duplicate internal HTTP hops.
- Lists, payloads, and stored objects have limits.
- Secrets stay out of browser bundles, URLs, logs, screenshots, and test artifacts.
- Inputs are validated and Cloudflare/GitHub permissions are least privilege.

## Stability and release

- Relevant unit or browser coverage protects the contract.
- `pnpm check` passes from a clean install.
- Runtime-sensitive changes pass Cloudflare preview.
- Verification and rollback are known before production deployment.
- Current facts, architecture, and operations are documented canonically.
