import { getCookiesPageData, getCookiesPageSEO } from '@/src/lib/api/cookies';
import { CookiesPageClient } from '@/src/components/Cookies/CookiesPageClient';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';

interface CookiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CookiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = await getCookiesPageSEO(locale);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
  };
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { locale } = await params;
  const data = await getCookiesPageData(locale);

  return <CookiesPageClient data={data} locale={locale as Locale} />;
}

