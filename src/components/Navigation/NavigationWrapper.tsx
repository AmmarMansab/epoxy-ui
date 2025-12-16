import { getStaticTranslations } from '@/src/lib/static-translations';
import { getAllServices } from '@/src/lib/api/services';
import type { Locale } from '@/i18n';
import { Navigation } from './index';

interface NavigationWrapperProps {
  locale: Locale;
}

export async function NavigationWrapper({ locale }: NavigationWrapperProps) {
  const nav = await getStaticTranslations(locale, 'nav');
  const services = await getAllServices(locale);
  return <Navigation locale={locale} nav={nav} services={services} />;
}

