import Link from "next/link";
import type { PublicLocale } from "@/lib/i18n";
import { dictionaries } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";

export function StarterPage({ locale }: { locale: PublicLocale }) {
  const copy = dictionaries[locale];

  return (
    <main className="shell">
      <header className="topbar">
        <Link className="wordmark" href="/" aria-label="WebTemplate home">
          <span className="wordmark-mark" aria-hidden="true">
            BT
          </span>
          <span>WebTemplate</span>
        </Link>
        <ThemeSwitcher locale={locale} />
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            {copy.eyebrow}
          </p>
          <h1 id="hero-title">{copy.title}</h1>
          <p className="lede">{copy.description}</p>
          <div className="actions">
            <a className="button button-primary" href="#foundation">
              {copy.primaryAction}
            </a>
            <Link className="button button-secondary" href="/api/health">
              {copy.secondaryAction}
            </Link>
          </div>
        </div>

        <aside className="status-card" aria-label={copy.statusReady}>
          <div className="status-line">
            <span className="status-dot" />
            {copy.statusReady}
          </div>
          <div className="diagram" aria-hidden="true">
            <span>IDEA</span>
            <i />
            <span>NEXT</span>
            <i />
            <span>EDGE</span>
          </div>
          <p>{copy.cloudflareBody}</p>
        </aside>
      </section>

      <section className="foundation" id="foundation">
        <div>
          <p className="section-number">01 / FOUNDATION</p>
          <h2>{copy.foundationTitle}</h2>
        </div>
        <ul>
          {copy.foundationItems.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="cloud-card">
        <p className="section-number">02 / CLOUDFLARE</p>
        <h2>{copy.cloudflareTitle}</h2>
        <p>{copy.cloudflareBody}</p>
      </section>

      <footer className="footer">
        <LanguageSwitcher locale={locale} />
        <span>Next.js · Cloudflare · pnpm</span>
      </footer>
    </main>
  );
}
