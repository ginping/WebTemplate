import Link from "next/link";
import { dictionaries, localePath, type PublicLocale, publicLocales } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: PublicLocale }) {
  return (
    <nav className="language-list" aria-label={dictionaries[locale].languageLabel}>
      {publicLocales.map((item) => (
        <Link
          aria-current={item === locale ? "page" : undefined}
          className="language-link"
          data-active={item === locale}
          href={localePath(item)}
          hrefLang={item}
          key={item}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
