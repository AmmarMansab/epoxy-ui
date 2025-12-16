import type {
  ServiceDetailData,
  ServiceDetailDataWithSEO,
  SEOData,
} from '@/src/types/api';

// Utility function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Service content without relatedServices (will be generated dynamically)
interface ServiceContent {
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
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  benefits: {
    heading: string;
    items: string[];
  };
  relatedServices: {
    heading: string;
    services: Array<{
      en: {
        title: string;
        image: string;
      };
      ar: {
        title: string;
        image: string;
      };
    }>;
  };
  seo: SEOData;
}

// Raw service data from API (only content, no computed fields)
interface ServiceDataItemRaw {
  category: {
    en: string;
    ar: string;
  };
  translations: {
    en: ServiceContent;
    ar: ServiceContent;
  };
}

// Service data with computed fields
interface ServiceDataItem {
  category: {
    en: string;
    ar: string;
    slug: string; // Auto-generated from category.en
  };
  slug: string; // Auto-generated from translations.en.hero.title
  translations: {
    en: ServiceDetailDataWithSEO;
    ar: ServiceDetailDataWithSEO;
  };
}

// Type for service slug (computed from titles)
export type ServiceSlug = string;

// Get all services as an array from API response
async function getAllServicesData(): Promise<ServiceDataItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Service data as array - only content, no computed fields
  const serviceDataRaw: ServiceDataItemRaw[] = [
    {
      category: {
        en: 'Retail Applications',
        ar: 'تطبيقات التجزئة',
      },
      translations: {
        en: {
          hero: {
            title: 'Residential Flooring',
            breadcrumbs: ['Home', 'Services', 'Retail Applications', 'Residential Flooring'],
            image: '/images/hero-epoxy-floor.jpg',
          },
          intro: {
            paragraph1:
              'Transform your home with premium-grade, seamless epoxy flooring — the perfect balance of functionality and beauty.',
            paragraph2:
              'Whether for your kitchen, living area, or garage, our floors are designed to withstand daily wear while elevating your home\'s aesthetic appeal.',
          },
          applications: {
            heading: 'Applications Include:',
            items: [
              {
                title: 'Kitchens',
                description:
                  'Our food-safe, non-porous epoxy coatings create a hygienic surface resistant to stains, grease, and spills. Perfect for busy kitchens, they ensure effortless cleaning and lasting shine, even with heat exposure or constant foot traffic.',
              },
              {
                title: 'Bathrooms',
                description:
                  'Designed with anti-slip and waterproof technology, our bathroom coatings prevent moisture buildup while offering a sleek, polished look. The seamless finish resists mold, mildew, and humidity, making maintenance simple and stress-free.',
              },
              {
                title: 'Garages',
                description:
                  'Built to handle vehicles, tools, and heavy loads, our industrial-grade garage epoxy offers exceptional chemical and abrasion resistance. It not only protects against oil leaks and tire marks but also gives your garage a clean, professional finish.',
              },
              {
                title: 'Living Areas',
                description:
                  'Our decorative epoxy finishes bring elegance and depth to interiors. Whether you prefer a high-gloss marble effect or matte stone texture, we create luxurious floors that complement any modern home design — smooth, strong, and timeless.',
              },
            ],
          },
          benefits: {
            heading: 'Benefits:',
            items: [
              'Seamless, easy-to-clean surfaces for everyday convenience',
              'Long-lasting shine and color stability even in high-traffic areas',
              'Resistant to cracks, moisture, and stains',
              'Fully customizable finishes — from matte to metallic',
            ],
          },
          relatedServices: {
            heading: 'Related Services',
            services: [
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'Residential Flooring - Epoxy Maestro',
            description:
              'Transform your home with premium-grade, seamless epoxy flooring. Perfect for kitchens, bathrooms, garages, and living areas.',
            keywords: 'residential epoxy flooring, home flooring, kitchen flooring, bathroom flooring',
          },
        },
        ar: {
          hero: {
            title: 'أرضيات سكنية',
            breadcrumbs: ['الرئيسية', 'الخدمات', 'تطبيقات التجزئة', 'أرضيات سكنية'],
            image: '/images/hero-epoxy-floor.jpg',
          },
          intro: {
            paragraph1:
              'حول منزلك بأرضيات إيبوكسي سلسة من الدرجة المتميزة — التوازن المثالي بين الوظائف والجمال.',
            paragraph2:
              'سواء كانت لمطبخك أو منطقة المعيشة أو المرآب، تم تصميم أرضياتنا لتحمل الاستخدام اليومي مع رفع الجاذبية الجمالية لمنزلك.',
          },
          applications: {
            heading: 'التطبيقات تشمل:',
            items: [
              {
                title: 'المطابخ',
                description:
                  'تخلق طلاءات الإيبوكسي الآمنة للطعام وغير المسامية لدينا سطحًا صحيًا مقاومًا للبقع والدهون والانسكابات. مثالية للمطابخ المزدحمة، فهي تضمن التنظيف السهل واللمعان الدائم، حتى مع التعرض للحرارة أو حركة المرور المستمرة.',
              },
              {
                title: 'الحمامات',
                description:
                  'مصممة بتقنية مضادة للانزلاق ومقاومة للماء، تمنع طلاءات الحمامات لدينا تراكم الرطوبة مع تقديم مظهر أنيق ومصقول. النهاية السلسة تقاوم العفن والعفن الفطري والرطوبة، مما يجعل الصيانة بسيطة وخالية من الإجهاد.',
              },
              {
                title: 'المرائب',
                description:
                  'مبنية للتعامل مع المركبات والأدوات والأحمال الثقيلة، يوفر إيبوكسي المرآب الصناعي لدينا مقاومة استثنائية للمواد الكيميائية والكشط. لا يحمي فقط من تسربات الزيت وعلامات الإطارات فحسب، بل يعطي أيضًا مرآبك مظهرًا نظيفًا واحترافيًا.',
              },
              {
                title: 'مناطق المعيشة',
                description:
                  'تجلب إنهاءات الإيبوكسي الزخرفية لدينا الأناقة والعمق إلى الدواخل. سواء كنت تفضل تأثير الرخام اللامع أو نسيج الحجر غير اللامع، ننشئ أرضيات فاخرة تكمل أي تصميم منزلي حديث — ناعمة وقوية وخالدة.',
              },
            ],
          },
          benefits: {
            heading: 'الفوائد:',
            items: [
              'أسطح سلسة وسهلة التنظيف لراحة يومية',
              'لمعان دائم واستقرار لوني حتى في المناطق عالية الحركة',
              'مقاومة للشقوق والرطوبة والبقع',
              'إنهاءات قابلة للتخصيص بالكامل — من غير اللامع إلى المعدني',
            ],
          },
          relatedServices: {
            heading: 'خدمات ذات صلة',
            services: [
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'أرضيات سكنية - إيبوكسي مايسترو',
            description:
              'حول منزلك بأرضيات إيبوكسي سلسة من الدرجة المتميزة. مثالية للمطابخ والحمامات والمرائب ومناطق المعيشة.',
            keywords: 'أرضيات إيبوكسي سكنية، أرضيات منزلية، أرضيات مطبخ، أرضيات حمام',
          },
        },
      },
    },
    {
      category: {
        en: 'Retail Applications',
        ar: 'تطبيقات التجزئة',
      },
      translations: {
        en: {
          hero: {
            title: 'Home Repairs',
            breadcrumbs: ['Home', 'Services', 'Retail Applications', 'Home Repairs'],
            image: '/images/service-residential.jpg',
          },
          intro: {
            paragraph1:
              'Expert epoxy repair and restoration services to restore your home\'s surfaces to their original beauty and functionality.',
            paragraph2:
              'From cracked floors to damaged countertops, our professional repair solutions ensure lasting results that blend seamlessly with your existing decor.',
          },
          applications: {
            heading: 'Applications Include:',
            items: [
              {
                title: 'Floor Repairs',
                description:
                  'Comprehensive repair services for damaged, cracked, or worn epoxy floors. We restore structural integrity and aesthetic appeal, ensuring your floors look and perform like new.',
              },
              {
                title: 'Countertop Restoration',
                description:
                  'Professional restoration of epoxy countertops, fixing chips, cracks, and surface damage. Our repairs maintain the original finish and extend the life of your surfaces.',
              },
              {
                title: 'Surface Refinishing',
                description:
                  'Complete surface refinishing to refresh worn or outdated epoxy surfaces. We apply new coatings that restore shine, color, and protection to your home\'s surfaces.',
              },
              {
                title: 'Emergency Repairs',
                description:
                  'Rapid response repair services for urgent surface damage. Our team quickly addresses issues to prevent further deterioration and restore functionality.',
              },
            ],
          },
          benefits: {
            heading: 'Benefits:',
            items: [
              'Expert repair techniques that restore original quality',
              'Cost-effective solutions that extend surface life',
              'Seamless integration with existing surfaces',
              'Professional service with guaranteed results',
            ],
          },
          relatedServices: {
            heading: 'Related Services',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'Home Repairs - Epoxy Maestro',
            description:
              'Expert epoxy repair and restoration services for your home. Professional solutions for floors, countertops, and surfaces.',
            keywords: 'epoxy repairs, home repairs, floor repairs, countertop restoration',
          },
        },
        ar: {
          hero: {
            title: 'إصلاحات المنزل',
            breadcrumbs: ['الرئيسية', 'الخدمات', 'تطبيقات التجزئة', 'إصلاحات المنزل'],
            image: '/images/service-residential.jpg',
          },
          intro: {
            paragraph1:
              'خدمات إصلاح واستعادة إيبوكسي خبيرة لاستعادة أسطح منزلك إلى جمالها ووظيفتها الأصلية.',
            paragraph2:
              'من الأرضيات المتشققة إلى أسطح العمل التالفة، تضمن حلول الإصلاح الاحترافية لدينا نتائج دائمة تندمج بسلاسة مع ديكورك الحالي.',
          },
          applications: {
            heading: 'التطبيقات تشمل:',
            items: [
              {
                title: 'إصلاحات الأرضيات',
                description:
                  'خدمات إصلاح شاملة للأرضيات الإيبوكسي التالفة أو المتشققة أو البالية. نستعيد السلامة الهيكلية والجاذبية الجمالية، مما يضمن أن أرضياتك تبدو وتعمل كالجديدة.',
              },
              {
                title: 'استعادة أسطح العمل',
                description:
                  'استعادة احترافية لأسطح عمل الإيبوكسي، إصلاح الرقائق والشقوق والأضرار السطحية. تحافظ إصلاحاتنا على النهاية الأصلية وتطيل عمر أسطحك.',
              },
              {
                title: 'إعادة تشطيب الأسطح',
                description:
                  'إعادة تشطيب سطحية كاملة لتجديد أسطح الإيبوكسي البالية أو القديمة. نطبق طلاءات جديدة تستعيد اللمعان واللون والحماية لأسطح منزلك.',
              },
              {
                title: 'إصلاحات الطوارئ',
                description:
                  'خدمات إصلاح سريعة الاستجابة للأضرار السطحية العاجلة. يتعامل فريقنا بسرعة مع المشكلات لمنع المزيد من التدهور واستعادة الوظيفة.',
              },
            ],
          },
          benefits: {
            heading: 'الفوائد:',
            items: [
              'تقنيات إصلاح خبيرة تستعيد الجودة الأصلية',
              'حلول فعالة من حيث التكلفة تطيل عمر السطح',
              'تكامل سلس مع الأسطح الموجودة',
              'خدمة احترافية مع نتائج مضمونة',
            ],
          },
          relatedServices: {
            heading: 'خدمات ذات صلة',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'إصلاحات المنزل - إيبوكسي مايسترو',
            description:
              'خدمات إصلاح واستعادة إيبوكسي خبيرة لمنزلك. حلول احترافية للأرضيات وأسطح العمل والأسطح.',
            keywords: 'إصلاحات إيبوكسي، إصلاحات منزلية، إصلاحات أرضيات، استعادة أسطح العمل',
          },
        },
      },
    },
    {
      category: {
        en: 'Corporate Applications',
        ar: 'تطبيقات الشركات',
      },
      translations: {
        en: {
          hero: {
            title: 'Industrial Flooring',
            breadcrumbs: ['Home', 'Services', 'Corporate Applications', 'Industrial Flooring'],
            image: '/images/service-industrial.jpg',
          },
          intro: {
            paragraph1:
              'Heavy-duty epoxy flooring solutions engineered for industrial environments where durability, safety, and performance are critical.',
            paragraph2:
              'Our industrial-grade epoxy systems withstand extreme conditions, heavy machinery, chemical exposure, and constant foot traffic while maintaining a professional appearance.',
          },
          applications: {
            heading: 'Applications Include:',
            items: [
              {
                title: 'Manufacturing Facilities',
                description:
                  'Robust flooring systems designed for manufacturing plants, production lines, and industrial workspaces. Resistant to heavy equipment, chemical spills, and constant use.',
              },
              {
                title: 'Warehouses',
                description:
                  'Durable warehouse flooring that handles forklifts, pallet jacks, and heavy loads. Our systems provide excellent traction, easy maintenance, and long-term performance.',
              },
              {
                title: 'Chemical Processing',
                description:
                  'Specialized epoxy coatings for chemical processing areas with superior resistance to acids, solvents, and corrosive materials. Engineered for safety and longevity.',
              },
              {
                title: 'Food Processing',
                description:
                  'FDA-compliant epoxy flooring for food processing facilities. Non-porous, hygienic surfaces that meet strict sanitation standards and resist bacterial growth.',
              },
            ],
          },
          benefits: {
            heading: 'Benefits:',
            items: [
              'Exceptional durability under extreme industrial conditions',
              'Chemical and abrasion resistance for long-term performance',
              'Safety features including anti-slip surfaces',
              'Low maintenance requirements with easy cleaning',
            ],
          },
          relatedServices: {
            heading: 'Related Services',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'Industrial Flooring - Epoxy Maestro',
            description:
              'Heavy-duty epoxy flooring for industrial facilities. Durable, chemical-resistant solutions for manufacturing, warehouses, and processing plants.',
            keywords: 'industrial epoxy flooring, warehouse flooring, manufacturing flooring',
          },
        },
        ar: {
          hero: {
            title: 'أرضيات صناعية',
            breadcrumbs: ['الرئيسية', 'الخدمات', 'تطبيقات الشركات', 'أرضيات صناعية'],
            image: '/images/service-industrial.jpg',
          },
          intro: {
            paragraph1:
              'حلول أرضيات إيبوكسي ثقيلة مصممة للبيئات الصناعية حيث المتانة والسلامة والأداء أمر بالغ الأهمية.',
            paragraph2:
              'تتحمل أنظمة الإيبوكسي الصناعية لدينا الظروف القاسية والآلات الثقيلة والتعرض للمواد الكيميائية وحركة المرور المستمرة مع الحفاظ على مظهر احترافي.',
          },
          applications: {
            heading: 'التطبيقات تشمل:',
            items: [
              {
                title: 'مرافق التصنيع',
                description:
                  'أنظمة أرضيات قوية مصممة لمصانع التصنيع وخطوط الإنتاج ومساحات العمل الصناعية. مقاومة للمعدات الثقيلة والانسكابات الكيميائية والاستخدام المستمر.',
              },
              {
                title: 'المستودعات',
                description:
                  'أرضيات مستودعات متينة تتعامل مع الرافعات الشوكية وعربات البليت والأحمال الثقيلة. توفر أنظمتنا جرًا ممتازًا وصيانة سهلة وأداءً طويل الأمد.',
              },
              {
                title: 'معالجة المواد الكيميائية',
                description:
                  'طلاءات إيبوكسي متخصصة لمناطق معالجة المواد الكيميائية مع مقاومة فائقة للأحماض والمذيبات والمواد المسببة للتآكل. مصممة للسلامة والعمر الطويل.',
              },
              {
                title: 'معالجة الأغذية',
                description:
                  'أرضيات إيبوكسي متوافقة مع إدارة الغذاء والدواء لمرافق معالجة الأغذية. أسطح غير مسامية وصحية تلبي معايير النظافة الصارمة ومقاومة لنمو البكتيريا.',
              },
            ],
          },
          benefits: {
            heading: 'الفوائد:',
            items: [
              'متانة استثنائية تحت الظروف الصناعية القاسية',
              'مقاومة للمواد الكيميائية والكشط لأداء طويل الأمد',
              'ميزات السلامة بما في ذلك الأسطح المضادة للانزلاق',
              'متطلبات صيانة منخفضة مع تنظيف سهل',
            ],
          },
          relatedServices: {
            heading: 'خدمات ذات صلة',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'أرضيات صناعية - إيبوكسي مايسترو',
            description:
              'أرضيات إيبوكسي ثقيلة للمرافق الصناعية. حلول متينة ومقاومة للمواد الكيميائية للتصنيع والمستودعات ومصانع المعالجة.',
            keywords: 'أرضيات إيبوكسي صناعية، أرضيات مستودعات، أرضيات تصنيع',
          },
        },
      },
    },
    {
      category: {
        en: 'Corporate Applications',
        ar: 'تطبيقات الشركات',
      },
      translations: {
        en: {
          hero: {
            title: 'Commercial Spaces',
            breadcrumbs: ['Home', 'Services', 'Corporate Applications', 'Commercial Spaces'],
            image: '/images/service-commercial.jpg',
          },
          intro: {
            paragraph1:
              'Professional epoxy flooring solutions for commercial environments that combine aesthetic appeal with practical durability.',
            paragraph2:
              'From retail stores to corporate offices, our commercial flooring systems enhance your space while providing long-lasting performance and easy maintenance.',
          },
          applications: {
            heading: 'Applications Include:',
            items: [
              {
                title: 'Retail Stores',
                description:
                  'Attractive, durable flooring for retail environments that withstands high foot traffic while maintaining a polished, professional appearance. Perfect for showrooms and shopping centers.',
              },
              {
                title: 'Office Buildings',
                description:
                  'Modern epoxy flooring for corporate offices that creates a professional atmosphere. Our systems are quiet, comfortable underfoot, and easy to maintain in busy office environments.',
              },
              {
                title: 'Restaurants & Cafes',
                description:
                  'Hygienic, easy-to-clean flooring solutions for food service establishments. Resistant to spills, stains, and heavy use while maintaining a welcoming aesthetic.',
              },
              {
                title: 'Healthcare Facilities',
                description:
                  'Specialized epoxy flooring for hospitals, clinics, and medical facilities. Meets strict hygiene standards with seamless, bacteria-resistant surfaces that are easy to sanitize.',
              },
            ],
          },
          benefits: {
            heading: 'Benefits:',
            items: [
              'Professional appearance that enhances brand image',
              'High-traffic durability with minimal maintenance',
              'Hygienic, easy-to-clean surfaces',
              'Customizable designs to match your brand',
            ],
          },
          relatedServices: {
            heading: 'Related Services',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'Commercial Spaces - Epoxy Maestro',
            description:
              'Professional epoxy flooring for commercial spaces. Perfect for retail stores, offices, restaurants, and healthcare facilities.',
            keywords: 'commercial epoxy flooring, office flooring, retail flooring',
          },
        },
        ar: {
          hero: {
            title: 'مساحات تجارية',
            breadcrumbs: ['الرئيسية', 'الخدمات', 'تطبيقات الشركات', 'مساحات تجارية'],
            image: '/images/service-commercial.jpg',
          },
          intro: {
            paragraph1:
              'حلول أرضيات إيبوكسي احترافية للبيئات التجارية التي تجمع بين الجاذبية الجمالية والمتانة العملية.',
            paragraph2:
              'من المتاجر التجارية إلى المكاتب المؤسسية، تعزز أنظمة الأرضيات التجارية لدينا مساحتك مع توفير أداء طويل الأمد وصيانة سهلة.',
          },
          applications: {
            heading: 'التطبيقات تشمل:',
            items: [
              {
                title: 'المتاجر التجارية',
                description:
                  'أرضيات جذابة ومتينة للبيئات التجارية التي تتحمل حركة المرور العالية مع الحفاظ على مظهر مصقول واحترافي. مثالية لصالات العرض ومراكز التسوق.',
              },
              {
                title: 'المباني المكتبية',
                description:
                  'أرضيات إيبوكسي حديثة للمكاتب المؤسسية التي تخلق جوًا احترافيًا. أنظمتنا هادئة ومريحة تحت القدم وسهلة الصيانة في بيئات المكاتب المزدحمة.',
              },
              {
                title: 'المطاعم والمقاهي',
                description:
                  'حلول أرضيات صحية وسهلة التنظيف لمؤسسات تقديم الطعام. مقاومة للانسكابات والبقع والاستخدام الثقيل مع الحفاظ على جمالية ترحيبية.',
              },
              {
                title: 'المرافق الصحية',
                description:
                  'أرضيات إيبوكسي متخصصة للمستشفيات والعيادات والمرافق الطبية. تلبي معايير النظافة الصارمة مع أسطح سلسة ومقاومة للبكتيريا وسهلة التعقيم.',
              },
            ],
          },
          benefits: {
            heading: 'الفوائد:',
            items: [
              'مظهر احترافي يعزز صورة العلامة التجارية',
              'متانة عالية الحركة مع صيانة minimal',
              'أسطح صحية وسهلة التنظيف',
              'تصاميم قابلة للتخصيص لتتناسب مع علامتك التجارية',
            ],
          },
          relatedServices: {
            heading: 'خدمات ذات صلة',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'مساحات تجارية - إيبوكسي مايسترو',
            description:
              'أرضيات إيبوكسي احترافية للمساحات التجارية. مثالية للمتاجر التجارية والمكاتب والمطاعم والمرافق الصحية.',
            keywords: 'أرضيات إيبوكسي تجارية، أرضيات مكاتب، أرضيات تجارية',
          },
        },
      },
    },
    {
      category: {
        en: 'Corporate Applications',
        ar: 'تطبيقات الشركات',
      },
      translations: {
        en: {
          hero: {
            title: 'Infrastructure Projects',
            breadcrumbs: ['Home', 'Services', 'Corporate Applications', 'Infrastructure Projects'],
            image: '/images/service-infrastructure.jpg',
          },
          intro: {
            paragraph1:
              'Large-scale epoxy solutions for infrastructure and public works projects that require exceptional durability and performance.',
            paragraph2:
              'Our infrastructure-grade epoxy systems are designed for bridges, tunnels, airports, and other critical infrastructure where reliability and longevity are paramount.',
          },
          applications: {
            heading: 'Applications Include:',
            items: [
              {
                title: 'Bridges & Overpasses',
                description:
                  'Protective epoxy coatings for bridge decks and overpasses that resist weather, traffic, and environmental stress. Our systems extend the life of critical infrastructure.',
              },
              {
                title: 'Airports & Terminals',
                description:
                  'Durable flooring solutions for airports, terminals, and transportation hubs. Designed to handle heavy luggage, equipment, and constant foot traffic while maintaining safety standards.',
              },
              {
                title: 'Parking Structures',
                description:
                  'Robust epoxy flooring for multi-level parking garages and structures. Resistant to vehicle traffic, oil, and weather exposure while providing clear traffic patterns.',
              },
              {
                title: 'Public Facilities',
                description:
                  'Long-lasting epoxy systems for public buildings, stadiums, and municipal facilities. Engineered for high-traffic areas with minimal maintenance requirements.',
              },
            ],
          },
          benefits: {
            heading: 'Benefits:',
            items: [
              'Engineered for extreme durability and long-term performance',
              'Weather and environmental resistance',
              'Safety compliance for public infrastructure',
              'Cost-effective solutions for large-scale projects',
            ],
          },
          relatedServices: {
            heading: 'Related Services',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'Infrastructure Projects - Epoxy Maestro',
            description:
              'Large-scale epoxy solutions for infrastructure projects. Bridges, airports, parking structures, and public facilities.',
            keywords: 'infrastructure epoxy, bridge coatings, airport flooring',
          },
        },
        ar: {
          hero: {
            title: 'مشاريع البنية التحتية',
            breadcrumbs: ['الرئيسية', 'الخدمات', 'تطبيقات الشركات', 'مشاريع البنية التحتية'],
            image: '/images/service-infrastructure.jpg',
          },
          intro: {
            paragraph1:
              'حلول إيبوكسي واسعة النطاق لمشاريع البنية التحتية والأشغال العامة التي تتطلب متانة وأداء استثنائيين.',
            paragraph2:
              'تم تصميم أنظمة الإيبوكسي الخاصة بالبنية التحتية لدينا للجسور والأنفاق والمطارات والبنية التحتية الحرجة الأخرى حيث الموثوقية والعمر الطويل أمران بالغان الأهمية.',
          },
          applications: {
            heading: 'التطبيقات تشمل:',
            items: [
              {
                title: 'الجسور والجسور العلوية',
                description:
                  'طلاءات إيبوكسي واقية لأسطح الجسور والجسور العلوية التي تقاوم الطقس وحركة المرور والإجهاد البيئي. تطيل أنظمتنا عمر البنية التحتية الحرجة.',
              },
              {
                title: 'المطارات والمحطات',
                description:
                  'حلول أرضيات متينة للمطارات والمحطات ومراكز النقل. مصممة للتعامل مع الأمتعة الثقيلة والمعدات وحركة المرور المستمرة مع الحفاظ على معايير السلامة.',
              },
              {
                title: 'هياكل وقوف السيارات',
                description:
                  'أرضيات إيبوكسي قوية لمواقف السيارات متعددة المستويات والهياكل. مقاومة لحركة المركبات والزيت والتعرض للطقس مع توفير أنماط حركة واضحة.',
              },
              {
                title: 'المرافق العامة',
                description:
                  'أنظمة إيبوكسي طويلة الأمد للمباني العامة والملاعب والمرافق البلدية. مصممة للمناطق عالية الحركة مع متطلبات صيانة minimal.',
              },
            ],
          },
          benefits: {
            heading: 'الفوائد:',
            items: [
              'مصممة لمتانة استثنائية وأداء طويل الأمد',
              'مقاومة الطقس والبيئة',
              'الامتثال للسلامة للبنية التحتية العامة',
              'حلول فعالة من حيث التكلفة للمشاريع واسعة النطاق',
            ],
          },
          relatedServices: {
            heading: 'خدمات ذات صلة',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Custom Projects', image: '/images/service-custom.jpg' },
                ar: { title: 'مشاريع مخصصة', image: '/images/service-custom.jpg' },
              },
            ],
          },
          seo: {
            title: 'مشاريع البنية التحتية - إيبوكسي مايسترو',
            description:
              'حلول إيبوكسي واسعة النطاق لمشاريع البنية التحتية. الجسور والمطارات وهياكل وقوف السيارات والمرافق العامة.',
            keywords: 'إيبوكسي البنية التحتية، طلاءات الجسور، أرضيات المطارات',
          },
        },
      },
    },
    {
      category: {
        en: 'Corporate Applications',
        ar: 'تطبيقات الشركات',
      },
      translations: {
        en: {
          hero: {
            title: 'Custom Projects',
            breadcrumbs: ['Home', 'Services', 'Corporate Applications', 'Custom Projects'],
            image: '/images/service-custom.jpg',
          },
          intro: {
            paragraph1:
              'Bespoke epoxy solutions tailored to your unique requirements, combining innovative design with technical excellence.',
            paragraph2:
              'From artistic installations to specialized industrial applications, we work closely with you to create custom epoxy solutions that exceed expectations.',
          },
          applications: {
            heading: 'Applications Include:',
            items: [
              {
                title: 'Artistic Installations',
                description:
                  'Custom decorative epoxy floors with unique patterns, colors, and effects. Create stunning visual statements with metallic finishes, 3D effects, and personalized designs.',
              },
              {
                title: 'Specialized Industrial',
                description:
                  'Tailored epoxy systems for unique industrial requirements. We engineer solutions for specific environments, equipment, and performance needs.',
              },
              {
                title: 'Branded Environments',
                description:
                  'Custom epoxy flooring that incorporates your brand colors, logos, or design elements. Create a cohesive brand experience throughout your space.',
              },
              {
                title: 'Unique Architectural',
                description:
                  'Innovative epoxy applications for architectural features, including walls, countertops, and custom surfaces that require specialized expertise.',
              },
            ],
          },
          benefits: {
            heading: 'Benefits:',
            items: [
              'Fully customized solutions for unique requirements',
              'Collaborative design process with expert guidance',
              'Innovative techniques and materials',
              'Unlimited design possibilities',
            ],
          },
          relatedServices: {
            heading: 'Related Services',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
            ],
          },
          seo: {
            title: 'Custom Projects - Epoxy Maestro',
            description:
              'Bespoke epoxy solutions for unique projects. Custom designs, artistic installations, and specialized applications.',
            keywords: 'custom epoxy, artistic epoxy, bespoke flooring',
          },
        },
        ar: {
          hero: {
            title: 'مشاريع مخصصة',
            breadcrumbs: ['الرئيسية', 'الخدمات', 'تطبيقات الشركات', 'مشاريع مخصصة'],
            image: '/images/service-custom.jpg',
          },
          intro: {
            paragraph1:
              'حلول إيبوكسي مخصصة مصممة خصيصًا لمتطلباتك الفريدة، تجمع بين التصميم المبتكر والتميز التقني.',
            paragraph2:
              'من التركيبات الفنية إلى التطبيقات الصناعية المتخصصة، نعمل معك عن كثب لإنشاء حلول إيبوكسي مخصصة تتجاوز التوقعات.',
          },
          applications: {
            heading: 'التطبيقات تشمل:',
            items: [
              {
                title: 'التركيبات الفنية',
                description:
                  'أرضيات إيبوكسي زخرفية مخصصة بأنماط وألوان وتأثيرات فريدة. أنشئ تصريحات بصرية مذهلة مع إنهاءات معدنية وتأثيرات ثلاثية الأبعاد وتصاميم مخصصة.',
              },
              {
                title: 'صناعي متخصص',
                description:
                  'أنظمة إيبوكسي مصممة خصيصًا للمتطلبات الصناعية الفريدة. نطور حلولًا لبيئات ومعدات واحتياجات أداء محددة.',
              },
              {
                title: 'بيئات ذات علامة تجارية',
                description:
                  'أرضيات إيبوكسي مخصصة تتضمن ألوان علامتك التجارية أو شعاراتك أو عناصر التصميم. أنشئ تجربة علامة تجارية متماسكة في جميع أنحاء مساحتك.',
              },
              {
                title: 'معماري فريد',
                description:
                  'تطبيقات إيبوكسي مبتكرة للميزات المعمارية، بما في ذلك الجدران وأسطح العمل والأسطح المخصصة التي تتطلب خبرة متخصصة.',
              },
            ],
          },
          benefits: {
            heading: 'الفوائد:',
            items: [
              'حلول مخصصة بالكامل للمتطلبات الفريدة',
              'عملية تصميم تعاونية مع إرشاد خبير',
              'تقنيات ومواد مبتكرة',
              'إمكانيات تصميم غير محدودة',
            ],
          },
          relatedServices: {
            heading: 'خدمات ذات صلة',
            services: [
              {
                en: { title: 'Residential Flooring', image: '/images/hero-epoxy-floor.jpg' },
                ar: { title: 'أرضيات سكنية', image: '/images/hero-epoxy-floor.jpg' },
              },
              {
                en: { title: 'Home Repairs', image: '/images/service-residential.jpg' },
                ar: { title: 'إصلاحات المنزل', image: '/images/service-residential.jpg' },
              },
              {
                en: { title: 'Industrial Flooring', image: '/images/service-industrial.jpg' },
                ar: { title: 'أرضيات صناعية', image: '/images/service-industrial.jpg' },
              },
              {
                en: { title: 'Commercial Spaces', image: '/images/service-commercial.jpg' },
                ar: { title: 'مساحات تجارية', image: '/images/service-commercial.jpg' },
              },
              {
                en: { title: 'Infrastructure Projects', image: '/images/service-infrastructure.jpg' },
                ar: { title: 'مشاريع البنية التحتية', image: '/images/service-infrastructure.jpg' },
              },
            ],
          },
          seo: {
            title: 'مشاريع مخصصة - إيبوكسي مايسترو',
            description:
              'حلول إيبوكسي مخصصة للمشاريع الفريدة. تصاميم مخصصة وتركيبات فنية وتطبيقات متخصصة.',
            keywords: 'إيبوكسي مخصص، إيبوكسي فني، أرضيات مخصصة',
          },
        },
      },
    },
  ];

  // Automatically generate slugs from titles
  const serviceData: ServiceDataItem[] = serviceDataRaw.map((service) => {
    // Generate service slug from English title
    const serviceSlug = generateSlug(service.translations.en.hero.title);
    // Generate category slug from English category title
    const categorySlug = generateSlug(service.category.en);

    return {
      category: {
        ...service.category,
        slug: categorySlug,
      },
      slug: serviceSlug,
      translations: service.translations as unknown as {
        en: ServiceDetailDataWithSEO;
        ar: ServiceDetailDataWithSEO;
      },
    };
  });

  // Create map by English title for finding services from relatedServices titles
  const serviceByTitleMap = new Map(
    serviceData.map((s) => [s.translations.en.hero.title.toLowerCase(), s])
  );

  // Generate relatedServices links dynamically from titles
  const serviceDataWithDynamicRelatedServices: ServiceDataItem[] = serviceData.map((service, serviceIndex) => {
    // Get raw service data to access the original relatedServices structure
    const rawService = serviceDataRaw[serviceIndex];
    
    // Process relatedServices - generate links from titles
    const processRelatedServices = (locale: 'en' | 'ar') => {
      return rawService.translations[locale].relatedServices.services.map((relatedService: { en: { title: string; image: string }; ar: { title: string; image: string } }) => {
        // relatedService structure: { en: { title: '', image: '' }, ar: { title: '', image: '' } }
        const relatedServiceTitle = relatedService[locale].title;
        const relatedServiceImage = relatedService[locale].image;
        
        // Find the service by matching the title
        const foundService = serviceByTitleMap.get(relatedServiceTitle.toLowerCase());
        
        if (foundService) {
          // Generate link dynamically
          const categoryPath = foundService.category.slug;
          const serviceSlug = foundService.slug;
          return {
            id: foundService.slug,
            title: relatedServiceTitle,
            image: relatedServiceImage,
            link: `/services/${categoryPath}/${serviceSlug}`,
          };
        }
        
        // Fallback if service not found - generate slug from title
        const fallbackSlug = generateSlug(relatedServiceTitle);
        return {
          id: fallbackSlug,
          title: relatedServiceTitle,
          image: relatedServiceImage,
          link: `/services/${fallbackSlug}`, // Fallback link
        };
      });
    };

    // Update translations with dynamically generated relatedServices links
    const updatedTranslations = {
      en: {
        ...service.translations.en,
        relatedServices: {
          heading: service.translations.en.relatedServices.heading,
          services: processRelatedServices('en'),
        },
      },
      ar: {
        ...service.translations.ar,
        relatedServices: {
          heading: service.translations.ar.relatedServices.heading,
          services: processRelatedServices('ar'),
        },
      },
    };

    return {
      ...service,
      translations: updatedTranslations,
    };
  });

  return serviceDataWithDynamicRelatedServices;
}

// Get service detail data by slug (finds from array)
async function getServiceApiResponse(
  slug: ServiceSlug,
  locale: string
): Promise<ServiceDetailDataWithSEO> {
  const allServices = await getAllServicesData();
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    throw new Error(`Service with slug "${slug}" not found`);
  }

  const serviceData = service.translations[locale as 'en' | 'ar'] || service.translations.en;
  // Type assertion: relatedServices.services is generated dynamically
  return serviceData as ServiceDetailDataWithSEO;
}

// Validate that a service exists and belongs to a specific category
export async function validateServiceCategory(
  serviceSlug: ServiceSlug,
  categorySlug: string
): Promise<boolean> {
  const allServices = await getAllServicesData();
  const service = allServices.find((s) => s.slug === serviceSlug);
  
  if (!service) {
    return false;
  }
  
  return service.category.slug === categorySlug;
}

// Get service detail data (without SEO)
export async function getServiceDetailData(
  slug: ServiceSlug,
  locale: string
): Promise<ServiceDetailData> {
  const fullData = await getServiceApiResponse(slug, locale);
  const { seo: _seo, ...dataWithoutSEO } = fullData;
  return dataWithoutSEO;
}

// Get SEO data for service detail page
export async function getServiceDetailSEO(
  slug: ServiceSlug,
  locale: string
): Promise<SEOData> {
  const fullData = await getServiceApiResponse(slug, locale);
  return fullData.seo;
}

// Service list item for navigation
export interface ServiceListItem {
  slug: ServiceSlug;
  title: string;
  link: string;
  category: {
    title: string;
    slug: string;
  };
}

// Get all services as an array for navigation (derived from serviceData array)
export async function getAllServices(locale: string): Promise<ServiceListItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 50));

  const allServices = await getAllServicesData();
  
  // Dynamically generate service list from array
  const services: ServiceListItem[] = allServices.map((service) => {
    const serviceData = service.translations[locale as 'en' | 'ar'] || service.translations.en;
    // Dynamically generate categoryPath from category slug
    const categoryPath = service.category.slug;
    
    return {
      slug: service.slug,
      title: serviceData.hero.title,
      link: `/services/${categoryPath}/${service.slug}`,
      category: {
        title: service.category[locale as 'en' | 'ar'] || service.category.en,
        slug: service.category.slug,
      },
    };
  });

  return services;
}

// Helper function to get service link dynamically
export function getServiceLink(service: ServiceDataItem): string {
  const categoryPath = service.category.slug;
  return `/services/${categoryPath}/${service.slug}`;
}

// Get services by category slug
export async function getServicesByCategory(
  categorySlug: string,
  locale: string
): Promise<ServiceListItem[]> {
  const allServices = await getAllServices(locale);
  return allServices.filter((service) => service.category.slug === categorySlug);
}

// Get category info by slug
export async function getCategoryBySlug(
  categorySlug: string,
  locale: string
): Promise<{ title: string; slug: string } | null> {
  const allServices = await getAllServices(locale);
  const category = allServices.find((service) => service.category.slug === categorySlug);
  return category ? category.category : null;
}