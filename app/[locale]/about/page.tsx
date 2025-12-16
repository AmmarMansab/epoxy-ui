import { Box } from '@mui/material';
import { getAboutPageData, getAboutPageSEO } from '@/src/lib/api/about';
import { About } from '@/src/components/About';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = await getAboutPageSEO(locale);

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

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const data = await getAboutPageData(locale);

  return (
    <Box py={{ xs: 2, md: 3 }}>
      <About data={data} locale={locale as Locale} />
    </Box>
  );
}

