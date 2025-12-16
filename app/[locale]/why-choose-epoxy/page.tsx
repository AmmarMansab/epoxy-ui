import { Box } from '@mui/material';
import { getWhyChooseEpoxyPageData, getWhyChooseEpoxyPageSEO } from '@/src/lib/api/why-choose-epoxy';
import { WhyChooseEpoxy } from '@/src/components/WhyChooseEpoxy';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';

interface WhyChooseEpoxyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: WhyChooseEpoxyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = await getWhyChooseEpoxyPageSEO(locale);

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

export default async function WhyChooseEpoxyPage({ params }: WhyChooseEpoxyPageProps) {
  const { locale } = await params;
  const data = await getWhyChooseEpoxyPageData(locale);

  return (
    <Box py={{ xs: 2, md: 3 }}>
      <WhyChooseEpoxy data={data} locale={locale as Locale} />
    </Box>
  );
}

