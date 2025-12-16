import type { SEOData } from '@/src/types/api';

// Why Choose Epoxy page data types
export interface FeatureSection {
  title: string;
  description: string;
  items: string[];
  image: string;
  imagePosition: 'left' | 'right'; // Position of image relative to text
  bgColor: 'blue' | 'white'; // Background color of the section
}

export interface EpoxyType {
  id: string;
  title: string;
  description: string;
}

export interface WhyChooseEpoxyPageContent {
  hero: {
    heading: string;
    title: string;
    breadcrumbs: string[];
    image: string;
  };
  intro: {
    paragraph1: string;
    paragraph2: string;
  };
  features: FeatureSection[];
  additionalFeatures: FeatureSection[]; // Chemical & Heat Resistance, Cost-Effective
  epoxyTypes: {
    heading: string;
    types: EpoxyType[];
  };
  applicationTechniques: {
    heading: string;
    description: string;
    items: string[];
    image: string;
  };
}

export interface WhyChooseEpoxyPageData extends WhyChooseEpoxyPageContent {
  seo: SEOData;
}

export interface WhyChooseEpoxyPageApiResponse {
  translations: {
    en: WhyChooseEpoxyPageData;
    ar: WhyChooseEpoxyPageData;
  };
}

// Internal function to get the full API response
async function getWhyChooseEpoxyPageApiResponse(): Promise<WhyChooseEpoxyPageApiResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const apiResponse: WhyChooseEpoxyPageApiResponse = {
    translations: {
      en: {
        hero: {
          heading: 'WHY CHOOSE EPOXY',
          title: 'Built to Last, Designed to Impress',
          breadcrumbs: ['Home', 'Why Choose Epoxy'],
          image: '/images/1.jpg',
        },
        intro: {
          paragraph1: 'Epoxy isn\'t just a coating — it\'s a complete transformation. At Epoxy Maestro, we believe every surface should look exceptional and perform even better.',
          paragraph2: 'Our epoxy applications are engineered for durability, hygiene, and aesthetic excellence, making them ideal for both homes and businesses across Saudi Arabia.',
        },
        features: [
          {
            title: 'Durability You Can Depend On',
            description: 'Epoxy flooring is resistant to impact, abrasion, and chemicals, ensuring long-term performance even in high-traffic environments. It forms a seamless, hard-wearing surface that protects against cracks, stains, and moisture damage — perfect for both industrial and residential applications.',
            items: [
              'Resistant to heavy loads and machinery',
              'Long-lasting protection from wear and tear',
              'Minimal maintenance required',
            ],
            image: '/images/1.jpg',
            imagePosition: 'right',
            bgColor: 'blue',
          },
          {
            title: 'Aesthetic Versatility',
            description: 'Epoxy flooring enhances every environment with its customizable colors, textures, and finishes, ensuring elegance and strength in one surface. It creates a sleek, seamless appearance that complements both modern interiors and professional commercial spaces.',
            items: [
              'Modern, elegant visuals',
              'Smooth, reflective finishes',
              'Decorative flakes and textures available',
            ],
            image: '/images/2.jpg',
            imagePosition: 'left',
            bgColor: 'white',
          },
        ],
        additionalFeatures: [
          {
            title: 'Chemical & Heat Resistance',
            description: 'Epoxy coatings provide exceptional resistance to fuel, oil, and chemicals, maintain strength under extreme conditions, form a tough protective layer, and resist corrosion, spills, and temperature changes.',
            items: [
              'Chemical and solvent resistance',
              'Heat and system resistance',
              'Safe for healthcare and food-related spaces',
            ],
            image: '/images/3.jpg',
            imagePosition: 'right',
            bgColor: 'blue',
          },
          {
            title: 'Cost-Effective & Long-Term Value',
            description: 'Epoxy flooring delivers long-term performance with minimal maintenance, making it an affordable and practical investment that ensures lasting protection.',
            items: [
              'One-time installation, years of durability',
              'Easy cleaning and reduced maintenance costs',
              'Water-resistant suitable for modern spaces',
            ],
            image: '/images/4.jpg',
            imagePosition: 'left',
            bgColor: 'white',
          },
        ],
        epoxyTypes: {
          heading: 'Epoxy Types & Technologies',
          types: [
            {
              id: '1',
              title: 'Self-Leveling Epoxy',
              description: 'Smooth, seamless finish for residential and commercial use.',
            },
            {
              id: '2',
              title: 'Anti-Slip Coating',
              description: 'Enhanced traction for industrial or wet environments.',
            },
            {
              id: '3',
              title: 'Decorative Epoxy',
              description: 'Custom textures and color blends for premium aesthetics.',
            },
            {
              id: '4',
              title: 'Protective Coatings',
              description: 'Heavy-duty layers for long-term structural protection.',
            },
          ],
        },
        applicationTechniques: {
          heading: 'Application Techniques',
          description: 'Trained professionals follow precision-based methods to ensure each layer is perfectly bonded, leveled, and cured, maintaining the highest technical and aesthetic standards from surface preparation to final polishing.',
          items: [
            'Advanced equipment for smooth finishing',
            'Expert curing process for strength and shine',
            'Quality assurance at every stage',
          ],
          image: '/images/1.jpg',
        },
        seo: {
          title: 'Why Choose Epoxy - Epoxy Maestro',
          description: 'Discover the benefits of epoxy flooring: durability, aesthetic versatility, and long-lasting performance for residential and commercial applications in Saudi Arabia.',
          keywords: 'why choose epoxy, epoxy benefits, epoxy flooring advantages, durable flooring, saudi arabia',
        },
      },
      ar: {
        hero: {
          heading: 'لماذا تختار الإيبوكسي',
          title: 'مصمم للبقاء، مصمم للإبهار',
          breadcrumbs: ['الرئيسية', 'لماذا تختار الإيبوكسي'],
          image: '/images/1.jpg',
        },
        intro: {
          paragraph1: 'الإيبوكسي ليس مجرد طلاء — إنه تحول كامل. في إيبوكسي مايسترو، نؤمن بأن كل سطح يجب أن يبدو استثنائياً ويؤدي بشكل أفضل.',
          paragraph2: 'تطبيقات الإيبوكسي الخاصة بنا مصممة للمتانة والنظافة والتميز الجمالي، مما يجعلها مثالية للمنازل والشركات في جميع أنحاء المملكة العربية السعودية.',
        },
        features: [
          {
            title: 'المتانة التي يمكنك الاعتماد عليها',
            description: 'أرضيات الإيبوكسي مقاومة للصدمات والتآكل والمواد الكيميائية، مما يضمن الأداء طويل الأمد حتى في البيئات عالية الحركة. تشكل سطحاً سلساً ومتيناً يحمي من التشققات والبقع وأضرار الرطوبة — مثالي للتطبيقات الصناعية والسكنية.',
            items: [
              'مقاومة للأحمال الثقيلة والآلات',
              'حماية طويلة الأمد من التآكل',
              'صيانة قليلة مطلوبة',
            ],
            image: '/images/1.jpg',
            imagePosition: 'right',
            bgColor: 'blue',
          },
          {
            title: 'التنوع الجمالي',
            description: 'تعزز أرضيات الإيبوكسي كل بيئة بألوانها وقوامها وتشطيباتها القابلة للتخصيص، مما يضمن الأناقة والقوة في سطح واحد. تخلق مظهراً أنيقاً وسلساً يكمل كل من الديكورات الداخلية الحديثة والمساحات التجارية المهنية.',
            items: [
              'مظاهر حديثة وأنيقة',
              'تشطيبات ناعمة وعاكسة',
              'رقائق وزخارف زخرفية متاحة',
            ],
            image: '/images/2.jpg',
            imagePosition: 'left',
            bgColor: 'white',
          },
        ],
        additionalFeatures: [
          {
            title: 'مقاومة المواد الكيميائية والحرارة',
            description: 'توفر طلاءات الإيبوكسي مقاومة استثنائية للوقود والزيت والمواد الكيميائية، وتحافظ على القوة في الظروف القاسية، وتشكل طبقة واقية قوية، وتقاوم التآكل والانسكابات وتغيرات درجة الحرارة.',
            items: [
              'مقاومة المواد الكيميائية والمذيبات',
              'مقاومة الحرارة والأنظمة',
              'آمنة للمساحات الصحية والغذائية',
            ],
            image: '/images/3.jpg',
            imagePosition: 'right',
            bgColor: 'blue',
          },
          {
            title: 'قيمة فعالة من حيث التكلفة وطويلة الأمد',
            description: 'توفر أرضيات الإيبوكسي أداءً طويل الأمد مع صيانة قليلة، مما يجعلها استثماراً ميسور التكلفة وعملياً يضمن الحماية الدائمة.',
            items: [
              'تركيب لمرة واحدة، متانة لسنوات',
              'تنظيف سهل وتقليل تكاليف الصيانة',
              'مقاومة للماء مناسبة للمساحات الحديثة',
            ],
            image: '/images/4.jpg',
            imagePosition: 'left',
            bgColor: 'white',
          },
        ],
        epoxyTypes: {
          heading: 'أنواع وتقنيات الإيبوكسي',
          types: [
            {
              id: '1',
              title: 'إيبوكسي ذاتي التسوية',
              description: 'تشطيب سلس وسلس للاستخدام السكني والتجاري.',
            },
            {
              id: '2',
              title: 'طلاء مضاد للانزلاق',
              description: 'جر محسن للبيئات الصناعية أو الرطبة.',
            },
            {
              id: '3',
              title: 'إيبوكسي زخرفي',
              description: 'قوام وألوان مخصصة للجماليات المتميزة.',
            },
            {
              id: '4',
              title: 'الطلاءات الواقية',
              description: 'طبقات ثقيلة للحماية الهيكلية طويلة الأمد.',
            },
          ],
        },
        applicationTechniques: {
          heading: 'تقنيات التطبيق',
          description: 'يتبع المحترفون المدربون طرقاً قائمة على الدقة لضمان ربط كل طبقة وتسويتها ومعالجتها بشكل مثالي، والحفاظ على أعلى المعايير التقنية والجمالية من تحضير السطح إلى التلميع النهائي.',
          items: [
            'معدات متقدمة للتشطيب السلس',
            'عملية معالجة خبيرة للقوة واللمعان',
            'ضمان الجودة في كل مرحلة',
          ],
          image: '/images/1.jpg',
        },
        seo: {
          title: 'لماذا تختار الإيبوكسي - إيبوكسي مايسترو',
          description: 'اكتشف فوائد أرضيات الإيبوكسي: المتانة والتنوع الجمالي والأداء طويل الأمد للتطبيقات السكنية والتجارية في المملكة العربية السعودية.',
          keywords: 'لماذا تختار الإيبوكسي، فوائد الإيبوكسي، مزايا أرضيات الإيبوكسي، أرضيات متينة، السعودية',
        },
      },
    },
  };

  return apiResponse;
}

// Get why choose epoxy page data
export async function getWhyChooseEpoxyPageData(locale: string): Promise<WhyChooseEpoxyPageData> {
  const apiResponse = await getWhyChooseEpoxyPageApiResponse();
  return apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
}

// Get why choose epoxy page SEO
export async function getWhyChooseEpoxyPageSEO(locale: string): Promise<SEOData> {
  const apiResponse = await getWhyChooseEpoxyPageApiResponse();
  const data = apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
  return data.seo;
}

