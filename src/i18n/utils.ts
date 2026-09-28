import { ui, defaultLang, type SupportedLanguage, type UIKey, languages } from './ui';

/**
 * Extracts language code from URL pathname.
 * If path starts with /en, returns 'en'. Otherwise returns defaultLang ('ms').
 */
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns a translation function for a given language.
 */
export function useTranslations(lang: SupportedLanguage) {
  return function t(key: UIKey): string {
    const langDict = ui[lang] as Record<string, string>;
    const defaultDict = ui[defaultLang] as Record<string, string>;
    return langDict[key] || defaultDict[key] || key;
  };
}

/**
 * Strips language prefix from pathname (e.g., /en/about -> /about, /en -> /)
 */
export function getCleanPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    const remaining = segments.slice(1).join('/');
    return remaining ? `/${remaining}` : '/';
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

/**
 * Generates localized path for given route and language.
 * Default language ('ms') has no prefix: /about
 * English ('en') has /en prefix: /en/about
 */
export function getLocalizedPath(path: string, lang: SupportedLanguage): string {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }

  const clean = getCleanPathname(path);

  if (lang === defaultLang) {
    return clean;
  }

  // Non-default language (e.g. en)
  if (clean === '/') {
    return `/${lang}`;
  }
  return `/${lang}${clean}`;
}

/**
 * Returns URL for switching to alternate language while preserving current page.
 */
export function getAlternateLanguageUrl(url: URL, targetLang: SupportedLanguage): string {
  const localizedPath = getLocalizedPath(url.pathname, targetLang);
  return `${localizedPath}${url.search}${url.hash}`;
}
