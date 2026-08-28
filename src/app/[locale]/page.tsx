import { notFound } from "next/navigation";
import { StarterPage } from "@/components/starter-page";
import { isPublicLocale } from "@/lib/i18n";

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublicLocale(locale) || locale === "en") notFound();
  return <StarterPage locale={locale} />;
}
