import type { SEOData } from '@/src/types/api';

// Consultation page data types
export interface ContactInfo {
  type: 'email' | 'contact' | 'address'; // Type to match with static translation keys
  value: string;
  link?: string;
}

export interface ConsultationPageApiData {
  hero: {
    image: string;
  };
  contactInfo: ContactInfo[];
  seo: SEOData;
}

export interface ConsultationPageApiResponse {
  translations: {
    en: ConsultationPageApiData;
    ar: ConsultationPageApiData;
  };
}

// Internal function to get the full API response
async function getConsultationPageApiResponse(): Promise<ConsultationPageApiResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const apiResponse: ConsultationPageApiResponse = {
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
          title: 'Free Epoxy Consultation - Epoxy Maestro',
          description: 'Get your free epoxy consultation with Epoxy Maestro. Transform your floors with confidence. Expert guidance for the best epoxy solutions.',
          keywords: 'free epoxy consultation, epoxy consultation, epoxy maestro, floor consultation, epoxy solutions',
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
          title: 'استشارة إيبوكسي مجانية - إيبوكسي مايسترو',
          description: 'احصل على استشارة إيبوكسي مجانية مع إيبوكسي مايسترو. حوّل أرضياتك بثقة. إرشاد خبير لأفضل حلول الإيبوكسي.',
          keywords: 'استشارة إيبوكسي مجانية، استشارة إيبوكسي، إيبوكسي مايسترو، استشارة أرضيات، حلول إيبوكسي',
        },
      },
    },
  };

  return apiResponse;
}

// Get consultation page data
export async function getConsultationPageData(locale: string): Promise<ConsultationPageApiData> {
  const apiResponse = await getConsultationPageApiResponse();
  return apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
}

// Get consultation page SEO
export async function getConsultationPageSEO(locale: string): Promise<SEOData> {
  const apiResponse = await getConsultationPageApiResponse();
  const data = apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
  return data.seo;
}

