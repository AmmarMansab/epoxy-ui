import type { SEOData } from '@/src/types/api';

// About page data types
export interface VisionMissionCard {
  icon: string; // Icon identifier (e.g., 'vision', 'mission')
  title: string;
  description: string;
}

export interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
}

export interface AboutPageContent {
  hero: {
    heading: string;
    title: string;
    breadcrumbs: string[];
    image: string;
  };
  intro: {
    paragraph: string;
  };
  visionMission: {
    vision: VisionMissionCard;
    mission: VisionMissionCard;
  };
  coreValues: {
    heading: string;
    title: string;
    values: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  expertise: {
    heading: string;
    intro: string;
    image: string;
    cards: ExpertiseCard[];
  };
  seo: SEOData;
}

export interface AboutPageData extends AboutPageContent {}

export interface AboutPageApiResponse {
  translations: {
    en: AboutPageData;
    ar: AboutPageData;
  };
}

// Internal function to get the full API response
async function getAboutPageApiResponse(): Promise<AboutPageApiResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const apiResponse: AboutPageApiResponse = {
    translations: {
      en: {
        hero: {
          heading: 'ABOUT US',
          title: 'Mastering Epoxy. Redefining Surfaces',
          breadcrumbs: ['Home', 'About Us'],
          image: '/images/1.jpg',
        },
        intro: {
          paragraph: 'At Epoxy Maestro (ايبوكسي مايسترو), we specialize in transforming ordinary surfaces into durable, high-performance, and visually striking finishes. Based in Saudi Arabia, we cater to both retail and corporate clients, offering professional epoxy solutions that combine engineering precision with artistic design. Our purpose is simple — to help individuals and businesses experience the perfect balance of strength, style, and sustainability through modern epoxy technology.',
        },
        visionMission: {
          vision: {
            icon: 'vision',
            title: 'Our Vision',
            description: 'To become Saudi Arabia\'s trusted epoxy solutions brand, recognized for quality craftsmanship, innovation, and reliability in every residential and corporate project we deliver.',
          },
          mission: {
            icon: 'mission',
            title: 'Our Mission',
            description: 'To deliver state-of-the-art epoxy applications that enhance aesthetics, durability, and value for every surface — whether it\'s a home, commercial outlet, or industrial facility.',
          },
        },
        coreValues: {
          heading: 'OUR CORE VALUES',
          title: 'Integrity at Every Single Step',
          values: [
            {
              id: '1',
              title: 'Expert Craftsmanship',
              description: 'Every project is carried out with precision and skill, ensuring long-lasting quality, a flawless finish, and superior technical execution.',
            },
            {
              id: '2',
              title: 'Innovative Designs',
              description: 'We combine creativity and engineering to deliver modern patterns, finishes, and solutions that elevate the style and function of every space.',
            },
            {
              id: '3',
              title: 'Customer Satisfaction',
              description: 'From consultation through completion, we ensure a seamless experience, tailored solutions, and dedicated support for each client\'s unique requirements.',
            },
            {
              id: '4',
              title: 'Sustainability',
              description: 'We use eco-friendly materials and processes designed for durability, low maintenance, and minimizing environmental impact across all projects.',
            },
          ],
        },
        expertise: {
          heading: 'Our Expertise',
          intro: 'At Epoxy Maestro, we specialize in transforming surfaces with precision, creativity, and lasting quality. Our team combines technical mastery, advanced materials, and innovative techniques to deliver epoxy solutions that exceed expectations.',
          image: '/images/1.jpg',
          cards: [
            {
              id: '1',
              title: 'Technical Excellence',
              description: 'Applying industry-leading methods for durability and flawless finishes.',
            },
            {
              id: '2',
              title: 'Design Innovation',
              description: 'Creating visually striking surfaces that complement any space or style.',
            },
            {
              id: '3',
              title: 'Project Customization',
              description: 'Tailoring solutions to meet specific client needs, environments, and operational requirements.',
            },
            {
              id: '4',
              title: 'Quality Assurance',
              description: 'Maintaining strict standards at every stage, from preparation to final installation.',
            },
          ],
        },
        seo: {
          title: 'About Us - Epoxy Maestro',
          description: 'Learn about Epoxy Maestro, a leading provider of epoxy flooring and protective coating solutions in Saudi Arabia.',
          keywords: 'about us, epoxy maestro, epoxy flooring, saudi arabia',
        },
      },
      ar: {
        hero: {
          heading: 'من نحن',
          title: 'إتقان الإيبوكسي. إعادة تعريف الأسطح',
          breadcrumbs: ['الرئيسية', 'من نحن'],
          image: '/images/1.jpg',
        },
        intro: {
          paragraph: 'في إيبوكسي مايسترو (ايبوكسي مايسترو)، نتخصص في تحويل الأسطح العادية إلى تشطيبات متينة وعالية الأداء وذات مظهر جذاب. مقرنا في المملكة العربية السعودية، نخدم العملاء من القطاعين التجاري والشركات، ونقدم حلول إيبوكسي احترافية تجمع بين الدقة الهندسية والتصميم الفني. هدفنا بسيط — مساعدة الأفراد والشركات على تجربة التوازن المثالي بين القوة والأناقة والاستدامة من خلال تقنية الإيبوكسي الحديثة.',
        },
        visionMission: {
          vision: {
            icon: 'vision',
            title: 'رؤيتنا',
            description: 'أن نصبح علامة حلول الإيبوكسي الموثوقة في المملكة العربية السعودية، معترف بها لجودة الحرفية والابتكار والموثوقية في كل مشروع سكني وشركات نقدمه.',
          },
          mission: {
            icon: 'mission',
            title: 'مهمتنا',
            description: 'تقديم تطبيقات إيبوكسي حديثة تعزز الجماليات والمتانة والقيمة لكل سطح — سواء كان منزلاً أو منفذاً تجارياً أو منشأة صناعية.',
          },
        },
        coreValues: {
          heading: 'قيمنا الأساسية',
          title: 'النزاهة في كل خطوة',
          values: [
            {
              id: '1',
              title: 'الحرفية الخبيرة',
              description: 'يتم تنفيذ كل مشروع بدقة ومهارة، مما يضمن جودة طويلة الأمد، تشطيب لا تشوبه شائبة، وتنفيذ تقني متفوق.',
            },
            {
              id: '2',
              title: 'تصاميم مبتكرة',
              description: 'نجمع بين الإبداع والهندسة لتقديم أنماط وتشطيبات وحلول حديثة ترفع مستوى الأناقة والوظيفة لكل مساحة.',
            },
            {
              id: '3',
              title: 'رضا العملاء',
              description: 'من الاستشارة حتى الإنجاز، نضمن تجربة سلسة وحلول مخصصة ودعم مخصص لكل متطلبات العميل الفريدة.',
            },
            {
              id: '4',
              title: 'الاستدامة',
              description: 'نستخدم مواد وعمليات صديقة للبيئة مصممة للمتانة والصيانة المنخفضة وتقليل التأثير البيئي عبر جميع المشاريع.',
            },
          ],
        },
        expertise: {
          heading: 'خبرتنا',
          intro: 'في إيبوكسي مايسترو، نتخصص في تحويل الأسطح بدقة وإبداع وجودة دائمة. يجمع فريقنا بين الإتقان التقني والمواد المتقدمة والتقنيات المبتكرة لتقديم حلول إيبوكسي تتجاوز التوقعات.',
          image: '/images/1.jpg',
          cards: [
            {
              id: '1',
              title: 'التميز التقني',
              description: 'تطبيق طرق رائدة في الصناعة للمتانة والتشطيبات المثالية.',
            },
            {
              id: '2',
              title: 'ابتكار التصميم',
              description: 'إنشاء أسطح مذهلة بصرياً تكمل أي مساحة أو أسلوب.',
            },
            {
              id: '3',
              title: 'تخصيص المشروع',
              description: 'تخصيص الحلول لتلبية احتياجات العملاء المحددة والبيئات ومتطلبات التشغيل.',
            },
            {
              id: '4',
              title: 'ضمان الجودة',
              description: 'الحفاظ على معايير صارمة في كل مرحلة، من التحضير إلى التركيب النهائي.',
            },
          ],
        },
        seo: {
          title: 'من نحن - إيبوكسي مايسترو',
          description: 'تعرف على إيبوكسي مايسترو، شركة رائدة في حلول أرضيات الإيبوكسي والتشطيبات الواقية في المملكة العربية السعودية.',
          keywords: 'من نحن، إيبوكسي مايسترو، أرضيات إيبوكسي، السعودية',
        },
      },
    },
  };

  return apiResponse;
}

// Get about page data
export async function getAboutPageData(locale: string): Promise<AboutPageData> {
  const apiResponse = await getAboutPageApiResponse();
  return apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
}

// Get about page SEO
export async function getAboutPageSEO(locale: string): Promise<SEOData> {
  const apiResponse = await getAboutPageApiResponse();
  const data = apiResponse.translations[locale as 'en' | 'ar'] || apiResponse.translations.en;
  return data.seo;
}

