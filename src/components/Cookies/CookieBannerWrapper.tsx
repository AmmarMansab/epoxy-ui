import { getCookiesPageData } from '@/src/lib/api/cookies';
import { CookieBanner } from './CookieBanner';
import type { Locale } from '@/i18n';

interface CookieBannerWrapperProps {
  locale: Locale;
}

export async function CookieBannerWrapper({ locale }: CookieBannerWrapperProps) {
  const data = await getCookiesPageData(locale);
  return <CookieBanner locale={locale} data={data} />;
}

