import {
  ui,
  defaultLang,
  type SupportedLanguage,
  type UIKey,
  languages,
} from "./ui";

/**
 * Extracts language code from the current URL pathname.
 * E.g. /en/about -> 'en', /about -> 'ms'
 */
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in languages) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns translation function for the given language.
 */
export function useTranslations(lang: SupportedLanguage) {
  return function t(key: UIKey): string {
    const langDict = ui[lang];
    if (key in langDict) {
      return (langDict as Record<string, string>)[key];
    }
    return (ui[defaultLang] as Record<string, string>)[key] || key;
  };
}

/**
 * Strips the language prefix from the current pathname.
 * E.g. /en/about -> /about, /en/contact/ -> /contact, /about -> /about, /en -> /
 */
export function getCleanPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    const remaining = segments.slice(1).join("/");
    return remaining ? `/${remaining}` : "/";
  }
  return pathname || "/";
}

/**
 * Generates localized path for a given route and target language.
 * Default locale (ms) has no prefix: /about
 * English (en) has /en prefix: /en/about
 */
export function getLocalizedPath(
  cleanPath: string,
  lang: SupportedLanguage,
): string {
  const normalized = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  if (lang === defaultLang) {
    return normalized;
  }
  return normalized === "/" ? `/${lang}` : `/${lang}${normalized}`;
}

/**
 * Helper to get the alternate language URL for language switcher.
 */
export function getAlternateLanguageUrl(
  currentUrl: URL,
  targetLang: SupportedLanguage,
): string {
  const clean = getCleanPathname(currentUrl.pathname);
  return getLocalizedPath(clean, targetLang);
}
