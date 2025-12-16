import { Box } from '@mui/material';
import { getServiceDetailData, getServiceDetailSEO, validateServiceCategory, getAllServices } from '@/src/lib/api/services';
import { getHomePageData } from '@/src/lib/api/home';
import { ServiceDetail } from '@/src/components/ServiceDetail';
import { WhyChooseUs } from '@/src/components/Home/WhyChooseUs';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

interface ServicePageProps {
  params: Promise<{ locale: string; category: string; service: string }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  const allParams: Array<{ locale: string; category: string; service: string }> = [];
  
  for (const locale of locales) {
    const services = await getAllServices(locale);
    for (const service of services) {
      allParams.push({
        locale,
        category: service.category.slug,
        service: service.slug,
      });
    }
  }
  
  return allParams;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, service: serviceSlug } = await params;
  const seo = await getServiceDetailSEO(serviceSlug, locale);

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

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, category: categorySlug, service: serviceSlug } = await params;

  // Validate that the service exists and belongs to the specified category
  const isValid = await validateServiceCategory(serviceSlug, categorySlug);
  
  if (!isValid) {
    notFound();
  }

  const data = await getServiceDetailData(serviceSlug, locale);
  const homePageData = await getHomePageData(locale);

  return (
    <>
      <Box sx={{ py: { xs: 4, md: 6 }, m: { xs: 2, md: 3 } }}>
        <ServiceDetail data={data} locale={locale as Locale} />
      </Box>
      <WhyChooseUs data={homePageData.whyChooseUs} />
    </>
  );
}

