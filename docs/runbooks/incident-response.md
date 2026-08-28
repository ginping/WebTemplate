# Incident Response

1. Confirm hostname, route, start time, client, and Worker version.
2. Check `/api/health` separately from the product route.
3. Review Worker logs without copying secrets or personal data.
4. Compare the active version with the last accepted deployment.
5. Roll back when the current version is the likely cause and the prior version is known healthy.
6. Verify health, English, Chinese, and the affected workflow.
7. Add a regression test and update the canonical runbook.

CI success, upload success, or a local check does not prove live recovery.
