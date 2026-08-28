# Engineering Quality

Evaluate meaningful changes across experience, performance, security, cost, and stability.

1. Define the user-visible outcome and failure modes.
2. Add the smallest relevant automated test.
3. Run `pnpm check:fast` while iterating.
4. Run `pnpm check` before merging.
5. Deploy one revision, verify health and critical routes, and retain a rollback target.

Simplicity is a quality property. Avoid infrastructure, dependencies, caches, queues, and abstractions before a measured need exists. Use [the review checklist](REVIEW-CHECKLIST.md) and [security contract](SECURITY.md).
