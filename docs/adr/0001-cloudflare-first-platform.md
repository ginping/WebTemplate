# ADR 0001: Cloudflare-first lightweight platform

## Decision

Use real Next.js App Router through OpenNext on Cloudflare Workers. Start stateless and enable D1, R2, KV, Queues, or Durable Objects only when a requirement needs their semantics.

## Rationale

This limits operations and supports a first release without a separate backend. OpenNext is proven in the source project. Cloudflare recommends vinext for new apps, but it remains a beta Next.js API reimplementation; reevaluate after a stable release and compatibility acceptance.

## Consequences

The first deploy needs only one Worker. Product code respects Workers compatibility. Storage additions require ownership, limits, local tests, backup expectations, and rollback. GCP and payments remain outside the template.
