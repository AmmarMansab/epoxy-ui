import type { SEOData } from '@/src/types/api';

export interface PrivacyPageApiData {
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string;
  }[];
  seo: SEOData;
}

export interface PrivacyPageApiResponse {
  translations: {
    en: PrivacyPageApiData;
    ar: PrivacyPageApiData;
  };
}

// Internal function to get the full API response
async function getPrivacyPageApiResponse(): Promise<PrivacyPageApiResponse> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const apiResponse: PrivacyPageApiResponse = {
    translations: {
      en: {
        title: 'Privacy Policy',
        lastUpdated: 'January 2025',
        sections: [
          {
            title: 'Introduction',
            content: 'At Epoxy Maestro, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.',
          },
          {
            title: 'Information We Collect',
            content: 'We may collect information about you in a variety of ways. The information we may collect on the site includes personal data, demographic data, and other information that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.',
          },
          {
            title: 'How We Use Your Information',
            content: 'We use the information we collect to provide, maintain, and improve our services, process your requests, send you communications, and comply with legal obligations.',
          },
          {
            title: 'Information Sharing and Disclosure',
            content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with service providers who assist us in operating our website and conducting our business.',
          },
          {
            title: 'Data Security',
            content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
          },
          {
            title: 'Your Rights',
            content: 'You have the right to access, update, or delete your personal information at any time. You may also opt-out of certain communications from us.',
          },
          {
            title: 'Contact Us',
            content: 'If you have any questions about this Privacy Policy, please contact us at info@epoxymaestro.com.',
          },
        ],
        seo: {
          title: 'Privacy Policy - Epoxy Maestro',
          description: 'Read our Privacy Policy to understand how Epoxy Maestro collects, uses, and protects your personal information.',
          keywords: 'privacy policy, data protection, personal information, Epoxy Maestro',
          ogTitle: 'Privacy Policy - Epoxy Maestro',
          ogDescription: 'Learn how we protect your privacy and handle your personal information.',
          ogImage: '/images/og-image.jpg',
        },
      },
      ar: {
        title: 'سياسة الخصوصية',
        lastUpdated: 'يناير 2025',
        sections: [
          {
            title: 'مقدمة',
            content: 'في إيبوكسي مايسترو، نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والكشف عنها وحمايتها عند زيارة موقعنا واستخدام خدماتنا.',
          },
          {
            title: 'المعلومات التي نجمعها',
            content: 'قد نجمع معلومات عنك بطرق متنوعة. قد تشمل المعلومات التي نجمعها على الموقع البيانات الشخصية والبيانات الديموغرافية ومعلومات أخرى تقدمها لنا طواعية عند التسجيل في الموقع أو عند اختيار المشاركة في أنشطة مختلفة متعلقة بالموقع.',
          },
          {
            title: 'كيف نستخدم معلوماتك',
            content: 'نستخدم المعلومات التي نجمعها لتوفير خدماتنا وصيانتها وتحسينها ومعالجة طلباتك وإرسال الاتصالات إليك والامتثال للالتزامات القانونية.',
          },
          {
            title: 'مشاركة المعلومات والكشف عنها',
            content: 'لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة بدون موافقتك، باستثناء ما هو موضح في هذه السياسة. قد نشارك معلوماتك مع مقدمي الخدمات الذين يساعدوننا في تشغيل موقعنا وإدارة أعمالنا.',
          },
          {
            title: 'أمان البيانات',
            content: 'نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير.',
          },
          {
            title: 'حقوقك',
            content: 'لديك الحق في الوصول إلى معلوماتك الشخصية أو تحديثها أو حذفها في أي وقت. قد تختار أيضًا عدم تلقي اتصالات معينة منا.',
          },
          {
            title: 'اتصل بنا',
            content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على info@epoxymaestro.com.',
          },
        ],
        seo: {
          title: 'سياسة الخصوصية - إيبوكسي مايسترو',
          description: 'اقرأ سياسة الخصوصية الخاصة بنا لفهم كيفية جمع إيبوكسي مايسترو واستخدامه وحماية معلوماتك الشخصية.',
          keywords: 'سياسة الخصوصية، حماية البيانات، المعلومات الشخصية، إيبوكسي مايسترو',
          ogTitle: 'سياسة الخصوصية - إيبوكسي مايسترو',
          ogDescription: 'تعرف على كيفية حماية خصوصيتك والتعامل مع معلوماتك الشخصية.',
          ogImage: '/images/og-image.jpg',
        },
      },
    },
  };

  return apiResponse;
}

// Get privacy page data
export async function getPrivacyPageData(locale: string): Promise<PrivacyPageApiData> {
  const apiResponse = await getPrivacyPageApiResponse();
  return apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
}

// Get privacy page SEO
export async function getPrivacyPageSEO(locale: string): Promise<SEOData> {
  const apiResponse = await getPrivacyPageApiResponse();
  const data = apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
  return data.seo;
}

