"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import type { PublicLocale } from "@/lib/i18n";
import { dictionaries } from "@/lib/i18n";

const themeOptions = ["system", "light", "dark"] as const;
const subscribeToHydration = () => () => undefined;

export function ThemeSwitcher({ locale }: { locale: PublicLocale }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const copy = dictionaries[locale];

  const labels = {
    system: copy.themeSystem,
    light: copy.themeLight,
    dark: copy.themeDark,
  };

  return (
    <fieldset className="control-group">
      <legend className="sr-only">{copy.themeLabel}</legend>
      {themeOptions.map((option) => {
        const active = mounted && theme === option;
        return (
          <button
            aria-pressed={active}
            className="control-button"
            data-active={active}
            key={option}
            onClick={() => setTheme(option)}
            type="button"
          >
            {labels[option]}
          </button>
        );
      })}
    </fieldset>
  );
}
