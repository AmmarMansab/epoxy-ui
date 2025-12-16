import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Contact } from '@/src/components/Contact';
import { getContactUsPageData, getContactUsPageSEO } from '@/src/lib/api/contact';
import { getStaticTranslations } from '@/src/lib/static-translations';
import type { Locale } from '@/i18n';

const locales = ['en', 'ar'] as const;
type LocaleType = (typeof locales)[number];

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as LocaleType)) {
    notFound();
  }

  const seo = await getContactUsPageSEO(locale);

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

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!locales.includes(locale as LocaleType)) {
    notFound();
  }

  const apiData = await getContactUsPageData(locale);
  const translations = await getStaticTranslations(locale as Locale, 'contact');

  return <Contact apiData={apiData} translations={translations} locale={locale} />;
}
