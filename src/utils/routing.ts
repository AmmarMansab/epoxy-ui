import { locales, type Locale } from '@/i18n';

/**
 * Get the locale from a pathname
 */
export function getLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return null;
}

/**
 * Remove locale from pathname
 */
export function removeLocaleFromPath(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  if (locale) {
    return pathname.replace(`/${locale}`, '') || '/';
  }
  return pathname;
}

/**
 * Add locale to pathname
 */
export function addLocaleToPath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = removeLocaleFromPath(pathname);
  return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
}

