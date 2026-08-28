import type { PropsWithChildren } from "react";
import type { PublicLocale } from "@/lib/i18n";
import { ThemeProvider } from "./theme-provider";

export function RootDocument({ children, locale }: PropsWithChildren<{ locale: PublicLocale }>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
