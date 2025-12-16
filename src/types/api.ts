export interface HeroData {
  headline: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

export interface AboutData {
  heading: string;
  title: string;
  description1: string;
  description2: string;
  ctaText: string;
  ctaLink: string;
  image1: string;
  image2: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CoreValuesData {
  heading: string;
  title: string;
  values: CoreValue[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesData {
  heading: string;
  title: string;
  tabs: string[];
  services: Record<string, Service[]>;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  heading: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  benefits: Benefit[];
}

export interface Project {
  id: string;
  images: string[]; // Array of all images for the gallery (shared across languages, first image is the main image)
  translations: {
    en: {
      title: string;
      description: string;
      category: string;
    };
    ar: {
      title: string;
      description: string;
      category: string;
    };
  };
}

export interface BlogPost {
  slug: string;
  image: string;
  author: string;
  publishedAt: string; // ISO date string
  translations: {
    en: {
      title: string;
      excerpt: string;
      content: string;
      category: string;
    };
    ar: {
      title: string;
      excerpt: string;
      content: string;
      category: string;
    };
  };
  seo: SEOData;
}

export interface FeaturedProjectsData {
  heading: string;
  title: string;
  description: string;
  projects: Project[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  authorImage: string;
  rating: number;
}

export interface TestimonialsData {
  heading: string;
  title: string;
  testimonials: Testimonial[];
}

export interface HomePageData {
  hero: HeroData;
  about: AboutData;
  coreValues: CoreValuesData;
  services: ServicesData;
  whyChooseUs: WhyChooseUsData;
  featuredProjects: FeaturedProjectsData;
  testimonials: TestimonialsData;
}

// SEO Data
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
}

// Extended HomePageData with SEO
export interface HomePageDataWithSEO extends HomePageData {
  seo: SEOData;
}

// API Response Structure
export interface HomePageApiResponse {
  email: string;
  translations: {
    en: HomePageDataWithSEO;
    ar: HomePageDataWithSEO;
  };
}

// Service Detail Page Types
export interface ServiceApplication {
  title: string;
  description: string;
}

export interface ServiceDetailData {
  hero: {
    title: string;
    breadcrumbs: string[];
    image: string;
  };
  intro: {
    paragraph1: string;
    paragraph2: string;
  };
  applications: {
    heading: string;
    items: ServiceApplication[];
  };
  benefits: {
    heading: string;
    items: string[];
  };
  relatedServices: {
    heading: string;
    services: Array<{
      id: string;
      title: string;
      image: string;
      link: string;
    }>;
  };
}

export interface ServiceDetailDataWithSEO extends ServiceDetailData {
  seo: SEOData;
}

export interface ServiceDetailApiResponse {
  translations: {
    en: ServiceDetailDataWithSEO;
    ar: ServiceDetailDataWithSEO;
  };
}
