import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Consultation } from '@/src/components/Consultation';
import { getConsultationPageData, getConsultationPageSEO } from '@/src/lib/api/consultation';
import { getStaticTranslations } from '@/src/lib/static-translations';
import type { Locale } from '@/i18n';

const locales = ['en', 'ar'] as const;
type LocaleType = (typeof locales)[number];

interface ConsultationPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ConsultationPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as LocaleType)) {
    notFound();
  }

  const seo = await getConsultationPageSEO(locale);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
  };
}

export default async function ConsultationPage({ params }: ConsultationPageProps) {
  const { locale } = await params;

  if (!locales.includes(locale as LocaleType)) {
    notFound();
  }

  const apiData = await getConsultationPageData(locale);
  const translations = await getStaticTranslations(locale as Locale, 'consultation');

  return <Consultation apiData={apiData} translations={translations} locale={locale} />;
}

