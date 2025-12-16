import type { SEOData } from '@/src/types/api';

// Contact Us page data types
export interface ContactInfo {
  type: 'email' | 'contact' | 'address'; // Type to match with static translation keys
  value: string;
  link?: string;
}

export interface ContactUsPageApiData {
  hero: {
    image: string;
  };
  contactInfo: ContactInfo[];
  seo: SEOData;
}

export interface ContactUsPageApiResponse {
  translations: {
    en: ContactUsPageApiData;
    ar: ContactUsPageApiData;
  };
}

// Internal function to get the full API response
async function getContactUsPageApiResponse(): Promise<ContactUsPageApiResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const apiResponse: ContactUsPageApiResponse = {
    translations: {
      en: {
        hero: {
          image: '/images/contact-hero.jpg',
        },
        contactInfo: [
          {
            type: 'email',
            value: 'contact@epoxy.com',
            link: 'mailto:contact@epoxy.com',
          },
          {
            type: 'contact',
            value: '+65 6789 1234',
            link: 'tel:+6567891234',
          },
          {
            type: 'address',
            value: 'Bws 17 Main St. Dummy Address',
          },
        ],
        seo: {
          title: 'Contact Us - Epoxy Maestro',
          description: 'Partner with Epoxy Maestro. Join our trusted referral network and collaborate on residential, commercial, and industrial epoxy projects in Saudi Arabia.',
          keywords: 'contact us, partner with epoxy maestro, referral network, epoxy collaboration, saudi arabia',
        },
      },
      ar: {
        hero: {
          image: '/images/contact-hero.jpg',
        },
        contactInfo: [
          {
            type: 'email',
            value: 'contact@epoxy.com',
            link: 'mailto:contact@epoxy.com',
          },
          {
            type: 'contact',
            value: '+65 6789 1234',
            link: 'tel:+6567891234',
          },
          {
            type: 'address',
            value: 'Bws 17 Main St. Dummy Address',
          },
        ],
        seo: {
          title: 'اتصل بنا - إيبوكسي مايسترو',
          description: 'شراكة مع إيبوكسي مايسترو. انضم إلى شبكة الإحالة الموثوقة لدينا وتعاون في مشاريع الإيبوكسي السكنية والتجارية والصناعية في المملكة العربية السعودية.',
          keywords: 'اتصل بنا، شراكة مع إيبوكسي مايسترو، شبكة الإحالة، تعاون إيبوكسي، السعودية',
        },
      },
    },
  };

  return apiResponse;
}

// Get contact us page data
export async function getContactUsPageData(locale: string): Promise<ContactUsPageApiData> {
  const apiResponse = await getContactUsPageApiResponse();
  return apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
}

// Get contact us page SEO
export async function getContactUsPageSEO(locale: string): Promise<SEOData> {
  const apiResponse = await getContactUsPageApiResponse();
  const data = apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
  return data.seo;
}
