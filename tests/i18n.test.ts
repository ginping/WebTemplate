import { describe, expect, it } from "vitest";
import { dictionaries, localePath, publicLocales } from "@/lib/i18n";

describe("public locale contract", () => {
  it("keeps every public locale fully translated", () => {
    const englishKeys = Object.keys(dictionaries.en).sort();
    for (const locale of publicLocales) {
      expect(Object.keys(dictionaries[locale]).sort()).toEqual(englishKeys);
      expect(dictionaries[locale].foundationItems).toHaveLength(4);
    }
  });

  it("keeps English unprefixed and prefixes other locales", () => {
    expect(localePath("en")).toBe("/");
    expect(localePath("zh")).toBe("/zh");
    expect(localePath("ja", "/settings")).toBe("/ja/settings");
  });
});
