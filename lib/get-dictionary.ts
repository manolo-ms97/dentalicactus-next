import { Locale } from "./i18n";

const dictionaries = {
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

function normalizeLocale(locale?: string): Locale {
  if (!locale) return "es"; // 🔒 hard fallback

  if (locale.startsWith("es")) return "es";
  if (locale.startsWith("en")) return "en";

  return "es";
}

export async function getDictionary(locale?: string | Locale) {
  const normalizedLocale = normalizeLocale(locale);
  return dictionaries[normalizedLocale]();
}
