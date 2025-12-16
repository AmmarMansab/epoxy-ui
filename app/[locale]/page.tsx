import { getHomePageData, getHomePageSEO } from "@/src/lib/api/home";
import { Hero } from '@/src/components/Home/Hero';
import { About } from '@/src/components/Home/About';
import { CoreValues } from '@/src/components/Home/CoreValues';
import { Services } from '@/src/components/Home/Services';
import { WhyChooseUs } from '@/src/components/Home/WhyChooseUs';
import { FeaturedProjects } from '@/src/components/Home/FeaturedProjects';
import { Testimonials } from '@/src/components/Home/Testimonials';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = await getHomePageSEO(locale as Locale);

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

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const data = await getHomePageData(locale as Locale);

  return (
    <>
      <Hero data={data.hero} />
      <About data={data.about} />
      <CoreValues data={data.coreValues} />
      <Services data={data.services} />
      <WhyChooseUs data={data.whyChooseUs} />
      <FeaturedProjects data={data.featuredProjects} />
      <Testimonials data={data.testimonials} />
    </>
  );
}

