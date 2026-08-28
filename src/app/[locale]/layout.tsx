import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { RootDocument } from "@/components/root-document";
import { dictionaries, isPublicLocale, localizedLocales } from "@/lib/i18n";
import "../globals.css";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isPublicLocale(locale) || locale === "en") return {};
  return {
    title: `WebTemplate · ${dictionaries[locale].languageName}`,
    description: dictionaries[locale].description,
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isPublicLocale(locale) || locale === "en") notFound();
  return <RootDocument locale={locale}>{children}</RootDocument>;
}
