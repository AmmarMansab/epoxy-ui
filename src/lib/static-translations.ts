import { type Locale } from '@/i18n';

// Load static translations (nav, footer, contact, consultation, etc.)
export async function getStaticTranslations(
  locale: Locale,
  namespace: 'nav' | 'footer' | 'contact' | 'consultation'
): Promise<Record<string, any>> {
  try {
    const translations = await import(
      `@/src/locales/static/${locale}/${namespace}.json`
    );
    return translations.default;
  } catch (error) {
    // Fallback to English if translation doesn't exist
    if (locale !== 'en') {
      try {
        const fallback = await import(
          `@/src/locales/static/en/${namespace}.json`
        );
        return fallback.default;
      } catch {
        return {};
      }
    }
    return {};
  }
}

// Type-safe static translation keys
export type NavTranslationKeys = 
  | 'home'
  | 'about'
  | 'services'
  | 'contact'
  | 'login'
  | 'signup';

export type FooterTranslationKeys = 
  | 'company'
  | 'legal'
  | 'social'
  | 'copyright'
  | 'madeWith';

