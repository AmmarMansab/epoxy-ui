import type { SEOData } from '@/src/types/api';

export interface CookieCategory {
  name: string;
  description: string;
  cookies: {
    name: string;
    purpose: string;
    duration: string;
  }[];
  required: boolean;
}

export interface CookiesPageApiData {
  title: string;
  heading: string;
  description: string;
  consentText: string;
  lastUpdated: string;
  categories: CookieCategory[];
  buttons: {
    necessaryOnly: string;
    allowSelection: string;
    acceptAll: string;
    decline: string;
    manageCookies: string;
  };
  seo: SEOData;
}

export interface CookiesPageApiResponse {
  translations: {
    en: CookiesPageApiData;
    ar: CookiesPageApiData;
  };
}

// Internal function to get the full API response
async function getCookiesPageApiResponse(): Promise<CookiesPageApiResponse> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const apiResponse: CookiesPageApiResponse = {
    translations: {
      en: {
        title: 'Manage Cookies',
        heading: 'We value your privacy',
        description: 'Please indicate your consent to our use of cookies and related technologies on this site as described in our Cookie Notice, by managing your preferences below.',
        consentText: 'By clicking "Accept Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.',
        lastUpdated: 'January 2025',
        buttons: {
          necessaryOnly: 'Necessary cookies only',
          allowSelection: 'Allow selection',
          acceptAll: 'Accept all cookies',
          decline: 'Decline',
          manageCookies: 'Manage Cookies',
        },
        categories: [
          {
            name: 'Necessary',
            description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
            required: true,
            cookies: [
              {
                name: 'session_id',
                purpose: 'Maintains your session state',
                duration: 'Session',
              },
              {
                name: 'csrf_token',
                purpose: 'Security token for form submissions',
                duration: 'Session',
              },
            ],
          },
          {
            name: 'Functional',
            description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
            required: false,
            cookies: [
              {
                name: 'preferences',
                purpose: 'Stores your website preferences and settings',
                duration: '1 year',
              },
            ],
          },
          {
            name: 'Analytics',
            description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
            required: false,
            cookies: [
              {
                name: '_ga',
                purpose: 'Google Analytics - tracks and reports website traffic',
                duration: '2 years',
              },
              {
                name: '_gid',
                purpose: 'Google Analytics - distinguishes unique users',
                duration: '24 hours',
              },
            ],
          },
          {
            name: 'Advertising',
            description: 'These cookies are used to deliver advertisements that are more relevant to you and your interests.',
            required: false,
            cookies: [
              {
                name: '_fbp',
                purpose: 'Facebook Pixel - tracks conversions and ad performance',
                duration: '3 months',
              },
            ],
          },
        ],
        seo: {
          title: 'Cookie Settings - Epoxy Maestro',
          description: 'Manage your cookie preferences and learn about how Epoxy Maestro uses cookies on our website.',
          keywords: 'cookie settings, cookies policy, website cookies, Epoxy Maestro',
          ogTitle: 'Cookie Settings - Epoxy Maestro',
          ogDescription: 'Control your cookie preferences and understand how we use cookies.',
          ogImage: '/images/og-image.jpg',
        },
      },
      ar: {
        title: 'إدارة ملفات تعريف الارتباط',
        heading: 'نقدر خصوصيتك',
        description: 'يرجى الإشارة إلى موافقتك على استخدامنا لملفات تعريف الارتباط والتقنيات ذات الصلة على هذا الموقع كما هو موضح في إشعار ملفات تعريف الارتباط الخاص بنا، من خلال إدارة تفضيلاتك أدناه.',
        consentText: 'بالنقر على "قبول ملفات تعريف الارتباط"، فإنك توافق على تخزين ملفات تعريف الارتباط على جهازك لتحسين تنقل الموقع وتحليل استخدام الموقع والمساعدة في جهودنا التسويقية.',
        lastUpdated: 'يناير 2025',
        buttons: {
          necessaryOnly: 'ملفات تعريف الارتباط الضرورية فقط',
          allowSelection: 'السماح بالاختيار',
          acceptAll: 'قبول جميع ملفات تعريف الارتباط',
          decline: 'رفض',
          manageCookies: 'إدارة ملفات تعريف الارتباط',
        },
        categories: [
          {
            name: 'ضروري',
            description: 'هذه الملفات ضرورية لعمل الموقع ولا يمكن إيقاف تشغيلها في أنظمتنا.',
            required: true,
            cookies: [
              {
                name: 'session_id',
                purpose: 'يحافظ على حالة جلستك',
                duration: 'الجلسة',
              },
              {
                name: 'csrf_token',
                purpose: 'رمز أمان لإرسال النماذج',
                duration: 'الجلسة',
              },
            ],
          },
          {
            name: 'وظيفي',
            description: 'تمكن هذه الملفات من الوظائف المحسنة والتخصيص، مثل تذكر تفضيلاتك.',
            required: false,
            cookies: [
              {
                name: 'preferences',
                purpose: 'يخزن تفضيلات وإعدادات موقعك',
                duration: 'سنة واحدة',
              },
            ],
          },
          {
            name: 'تحليلي',
            description: 'تساعدنا هذه الملفات على فهم كيفية تفاعل الزوار مع موقعنا من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول.',
            required: false,
            cookies: [
              {
                name: '_ga',
                purpose: 'Google Analytics - يتتبع ويبلغ عن حركة مرور الموقع',
                duration: 'سنتان',
              },
              {
                name: '_gid',
                purpose: 'Google Analytics - يميز المستخدمين الفريدين',
                duration: '24 ساعة',
              },
            ],
          },
          {
            name: 'إعلاني',
            description: 'تُستخدم هذه الملفات لتقديم إعلانات أكثر صلة بك وباهتماماتك.',
            required: false,
            cookies: [
              {
                name: '_fbp',
                purpose: 'Facebook Pixel - يتتبع التحويلات وأداء الإعلانات',
                duration: '3 أشهر',
              },
            ],
          },
        ],
        seo: {
          title: 'إعدادات ملفات تعريف الارتباط - إيبوكسي مايسترو',
          description: 'إدارة تفضيلات ملفات تعريف الارتباط الخاصة بك وتعلم كيفية استخدام إيبوكسي مايسترو لملفات تعريف الارتباط على موقعنا.',
          keywords: 'إعدادات ملفات تعريف الارتباط، سياسة ملفات تعريف الارتباط، ملفات تعريف الارتباط للموقع، إيبوكسي مايسترو',
          ogTitle: 'إعدادات ملفات تعريف الارتباط - إيبوكسي مايسترو',
          ogDescription: 'تحكم في تفضيلات ملفات تعريف الارتباط الخاصة بك وفهم كيفية استخدامنا لها.',
          ogImage: '/images/og-image.jpg',
        },
      },
    },
  };

  return apiResponse;
}

// Get cookies page data
export async function getCookiesPageData(locale: string): Promise<CookiesPageApiData> {
  const apiResponse = await getCookiesPageApiResponse();
  return apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
}

// Get cookies page SEO
export async function getCookiesPageSEO(locale: string): Promise<SEOData> {
  const apiResponse = await getCookiesPageApiResponse();
  const data = apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
  return data.seo;
}

