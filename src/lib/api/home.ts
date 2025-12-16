import type { HomePageApiResponse, HomePageData, HomePageDataWithSEO, SEOData } from "@/src/types/api";

// Internal function to get the full API response
// This ensures we only make one API call and reuse the data
async function getHomePageApiResponse(locale: string): Promise<HomePageDataWithSEO> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Mock API response structure
  const apiResponse: HomePageApiResponse = {
    email: "info@epoxymaestro.com",
    translations: {
      en: {
        seo: {
          title:
            "Epoxy Maestro - Premium Epoxy Flooring Solutions in Saudi Arabia",
          description:
            "Transform your space with premium epoxy flooring and protective coating solutions. Expert craftsmanship, innovative designs, and superior quality for residential, corporate, and industrial projects.",
          keywords:
            "epoxy flooring, epoxy coating, Saudi Arabia, industrial flooring, commercial flooring, residential flooring",
          ogTitle: "Epoxy Maestro - Premium Epoxy Flooring Solutions",
          ogDescription:
            "Expert epoxy flooring solutions engineered for strength and designed for elegance. Serving Saudi Arabia with superior quality and innovative designs.",
          ogImage: "/images/og-image.jpg",
        },
        hero: {
          headline: "Transform Every Surface into a Masterpiece",
          highlightedText: "Surface into a Masterpiece",
          description:
            "From modern homes to industrial facilities, we deliver superior epoxy flooring and protective coating solutions — engineered for strength, designed for elegance.",
          ctaText: "Explore Our Projects",
          ctaLink: `/${locale}/projects`,
          image: "/images/hero-epoxy-floor.jpg",
        },
        about: {
          heading: "ABOUT EPOXY MAESTRO",
          title: "Transform Your Space with Premium Epoxy Expertise",
          description1:
            "At Epoxy Maestro, we specialize in providing advanced epoxy flooring and coating solutions across residential, corporate, and industrial environments throughout Saudi Arabia.",
          description2:
            "Our team combines technical mastery, design precision, and customer commitment to deliver surfaces that last a lifetime.",
          ctaText: "Discover More",
          ctaLink: `/${locale}/about`,
          image1: "/images/about-warehouse.jpg",
          image2: "/images/about-application.jpg",
        },
        coreValues: {
          heading: "OUR CORE VALUES",
          title: "Integrity at Every Single Step",
          values: [
            {
              id: "1",
              title: "Expert Craftsmanship",
              description:
                "Every project is carried out with precision and skill, ensuring long-lasting quality, a flawless finish, and superior technical execution.",
              image: "/images/core-craftsmanship.jpg",
            },
            {
              id: "2",
              title: "Innovative Designs",
              description:
                "We combine creativity and engineering to deliver modern patterns, finishes, and solutions that elevate the style and function of every space.",
              image: "/images/core-designs.jpg",
            },
            {
              id: "3",
              title: "Customer Satisfaction",
              description:
                "From consultation through completion, we ensure a seamless experience, tailored solutions, and dedicated support for each client's unique requirements.",
              image: "/images/core-satisfaction.jpg",
            },
            {
              id: "4",
              title: "Sustainability",
              description:
                "We use eco-friendly materials and processes designed for durability, low maintenance, and minimizing environmental impact across all projects.",
              image: "/images/core-sustainability.jpg",
            },
          ],
        },
        services: {
          heading: "OUR SERVICES",
          title: "Comprehensive Epoxy Solutions for Every Need",
          tabs: ["Retail Applications", "Corporate Applications"],
          services: {
            "Retail Applications": [
              {
                id: "r1",
                title: "Residential Flooring",
                description: "Beautiful and durable epoxy floors for homes",
                image: "/images/1.jpg",
              },
              {
                id: "r2",
                title: "Garage Floors",
                description: "Protective and stylish garage flooring solutions",
                image: "/images/2.jpg",
              },
              {
                id: "r3",
                title: "Decorative Floors",
                description: "Custom artistic epoxy floor designs",
                image: "/images/3.jpg",
              },
              {
                id: "r4",
                title: "Basement Floors",
                description: "Moisture-resistant basement flooring",
                image: "/images/4.jpg",
              },
            ],
            "Corporate Applications": [
              {
                id: "c1",
                title: "Industrial Flooring",
                description: "Heavy-duty flooring for industrial facilities",
                image: "/images/1.jpg",
              },
              {
                id: "c2",
                title: "Commercial Spaces",
                description: "Professional flooring for offices and businesses",
                image: "/images/2.jpg",
              },
              {
                id: "c3",
                title: "Infrastructure Projects",
                description: "Large-scale epoxy solutions for infrastructure",
                image: "/images/3.jpg",
              },
              {
                id: "c4",
                title: "Custom Projects",
                description: "Tailored epoxy solutions for unique requirements",
                image: "/images/4.jpg",
              },
            ],
          },
        },
        whyChooseUs: {
          heading: "WHY CHOOSE US",
          title: "Where Quality Meets Expertise",
          description:
            "We don't just apply epoxy — we engineer it for performance.",
          ctaText: "Book a Free Consultation",
          ctaLink: `/${locale}/consultation`,
          benefits: [
            {
              id: "b1",
              icon: "shield",
              title: "Unmatched Durability",
              description: "Resistant to heat, chemicals, and heavy use",
            },
            {
              id: "b2",
              icon: "star",
              title: "Refined Aesthetics",
              description:
                "Glossy, metallic, or matte finishes tailored to your style",
            },
            {
              id: "b3",
              icon: "hourglass",
              title: "Cost-Effective Longevity",
              description: "Superior protection with minimal upkeep",
            },
            {
              id: "b4",
              icon: "expert",
              title: "Expert Installation",
              description:
                "Applied by trained professionals using advanced techniques",
            },
          ],
        },
        featuredProjects: {
          heading: "FEATURED PROJECTS",
          title: "Explore Our Work",
          description:
            "See the Maestro difference in action - explore a gallery of residential, corporate, and industrial projects that demonstrate our commitment to durability and design excellence.",
          projects: [
            {
              id: "1",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Industrial Office",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Corporate",
                },
                ar: {
                  title: "مكتب صناعي",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "شركات",
                },
              },
            },
            {
              id: "2",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Residential Living Room",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Residential",
                },
                ar: {
                  title: "غرفة معيشة سكنية",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "سكني",
                },
              },
            },
            {
              id: "3",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Modern Living Space",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Residential",
                },
                ar: {
                  title: "مساحة معيشة عصرية",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "سكني",
                },
              },
            },
            {
              id: "4",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Corporate Hallway",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Corporate",
                },
                ar: {
                  title: "ممر شركات",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "شركات",
                },
              },
            },
            {
              id: "5",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Artistic Epoxy Floor",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Custom",
                },
                ar: {
                  title: "أرضية إيبوكسي فنية",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "مخصص",
                },
              },
            },
          ],
        },
        testimonials: {
          heading: "CLIENT TESTIMONIALS",
          title: "Build trust and credibility through real client feedback.",
          testimonials: [
            {
              id: "1",
              text: "Epoxy Maestro transformed our warehouse floor completely. The quality is outstanding and the team was professional throughout the entire process.",
              author: "Ahmed Al-Rashid",
              authorImage: "/images/testimonial-1.jpg",
              rating: 5,
            },
            {
              id: "2",
              text: "The epoxy floor in our office has exceeded all expectations. It's beautiful, durable, and easy to maintain. Highly recommend!",
              author: "Sarah Johnson",
              authorImage: "/images/testimonial-2.jpg",
              rating: 5,
            },
            {
              id: "3",
              text: "Professional service from start to finish. The custom design they created for our showroom is absolutely stunning.",
              author: "Mohammed Hassan",
              authorImage: "/images/testimonial-3.jpg",
              rating: 4,
            },
            {
              id: "4",
              text: "Great experience working with Epoxy Maestro. They delivered on time and the quality is exceptional.",
              author: "Fatima Al-Zahra",
              authorImage: "/images/testimonial-4.jpg",
              rating: 5,
            },
            {
              id: "5",
              text: "The team was knowledgeable and helped us choose the perfect solution for our needs. Very satisfied!",
              author: "David Wilson",
              authorImage: "/images/testimonial-5.jpg",
              rating: 4,
            },
          ],
        },
      },
      ar: {
        seo: {
          title:
            "إيبوكسي مايسترو - حلول أرضيات إيبوكسي متميزة في المملكة العربية السعودية",
          description:
            "حول مساحتك بحلول أرضيات وطلاء إيبوكسي متميزة. حرفية خبيرة وتصاميم مبتكرة وجودة فائقة للمشاريع السكنية والشركات والصناعية.",
          keywords:
            "أرضيات إيبوكسي، طلاء إيبوكسي، السعودية، أرضيات صناعية، أرضيات تجارية، أرضيات سكنية",
          ogTitle: "إيبوكسي مايسترو - حلول أرضيات إيبوكسي متميزة",
          ogDescription:
            "حلول أرضيات إيبوكسي خبيرة مصممة للقوة ومصممة للأناقة. نخدم المملكة العربية السعودية بجودة فائقة وتصاميم مبتكرة.",
          ogImage: "/images/og-image.jpg",
        },
        hero: {
          headline: "حول كل سطح إلى تحفة فنية",
          highlightedText: "سطح إلى تحفة فنية",
          description:
            "من المنازل الحديثة إلى المرافق الصناعية، نقدم حلول أرضيات إيبوكسي وطلاء واقي فائقة الجودة — مصممة للقوة، مصممة للأناقة.",
          ctaText: "استكشف مشاريعنا",
          ctaLink: `/${locale}/projects`,
          image: "/images/hero-epoxy-floor.jpg",
        },
        about: {
          heading: "حول إيبوكسي مايسترو",
          title: "حول مساحتك بخبرة إيبوكسي متميزة",
          description1:
            "في إيبوكسي مايسترو، نتخصص في تقديم حلول أرضيات وطلاء إيبوكسي متقدمة عبر البيئات السكنية والشركات والصناعية في جميع أنحاء المملكة العربية السعودية.",
          description2:
            "يجمع فريقنا بين الإتقان التقني ودقة التصميم والتزام العملاء لتقديم أسطح تدوم مدى الحياة.",
          ctaText: "اكتشف المزيد",
          ctaLink: `/${locale}/about`,
          image1: "/images/about-warehouse.jpg",
          image2: "/images/about-application.jpg",
        },
        coreValues: {
          heading: "قيمنا الأساسية",
          title: "النزاهة في كل خطوة",
          values: [
            {
              id: "1",
              title: "الحرفية الخبيرة",
              description:
                "يتم تنفيذ كل مشروع بدقة ومهارة، مما يضمن جودة طويلة الأمد، إنهاء لا تشوبه شائبة، وتنفيذ تقني فائق.",
              image: "/images/core-craftsmanship.jpg",
            },
            {
              id: "2",
              title: "تصاميم مبتكرة",
              description:
                "نجمع بين الإبداع والهندسة لتقديم أنماط وإنهاءات وحلول حديثة ترفع من مستوى أسلوب ووظيفة كل مساحة.",
              image: "/images/core-designs.jpg",
            },
            {
              id: "3",
              title: "رضا العملاء",
              description:
                "من الاستشارة حتى الإتمام، نضمن تجربة سلسة وحلول مخصصة ودعم مخصص لمتطلبات كل عميل الفريدة.",
              image: "/images/core-satisfaction.jpg",
            },
            {
              id: "4",
              title: "الاستدامة",
              description:
                "نستخدم مواد وعمليات صديقة للبيئة مصممة للمتانة والصيانة المنخفضة وتقليل التأثير البيئي عبر جميع المشاريع.",
              image: "/images/core-sustainability.jpg",
            },
          ],
        },
        services: {
          heading: "خدماتنا",
          title: "حلول إيبوكسي شاملة لكل احتياج",
          tabs: ["تطبيقات التجزئة", "تطبيقات الشركات"],
          services: {
            "تطبيقات التجزئة": [
              {
                id: "r1",
                title: "أرضيات سكنية",
                description: "أرضيات إيبوكسي جميلة ومتينة للمنازل",
                image: "/images/1.jpg",
              },
              {
                id: "r2",
                title: "أرضيات المرآب",
                description: "حلول أرضيات مرآب واقية وأنيقة",
                image: "/images/2.jpg",
              },
              {
                id: "r3",
                title: "أرضيات زخرفية",
                description: "تصاميم أرضيات إيبوكسي فنية مخصصة",
                image: "/images/3.jpg",
              },
              {
                id: "r4",
                title: "أرضيات القبو",
                description: "أرضيات قبو مقاومة للرطوبة",
                image: "/images/4.jpg",
              },
            ],
            "تطبيقات الشركات": [
              {
                id: "c1",
                title: "أرضيات صناعية",
                description: "أرضيات ثقيلة للمرافق الصناعية",
                image: "/images/1.jpg",
              },
              {
                id: "c2",
                title: "مساحات تجارية",
                description: "أرضيات احترافية للمكاتب والأعمال",
                image: "/images/2.jpg",
              },
              {
                id: "c3",
                title: "مشاريع البنية التحتية",
                description: "حلول إيبوكسي واسعة النطاق للبنية التحتية",
                image: "/images/3.jpg",
              },
              {
                id: "c4",
                title: "مشاريع مخصصة",
                description: "حلول إيبوكسي مصممة خصيصًا للمتطلبات الفريدة",
                image: "/images/4.jpg",
              },
            ],
          },
        },
        whyChooseUs: {
          heading: "لماذا تختارنا",
          title: "حيث تلتقي الجودة بالخبرة",
          description: "نحن لا نطبق الإيبوكسي فقط — بل نطوره للأداء.",
          ctaText: "احجز استشارة مجانية",
          ctaLink: `/${locale}/consultation`,
          benefits: [
            {
              id: "b1",
              icon: "shield",
              title: "متانة لا مثيل لها",
              description: "مقاوم للحرارة والمواد الكيميائية والاستخدام الثقيل",
            },
            {
              id: "b2",
              icon: "star",
              title: "جماليات راقية",
              description:
                "إنهاءات لامعة أو معدنية أو غير لامعة مصممة حسب أسلوبك",
            },
            {
              id: "b3",
              icon: "hourglass",
              title: "عمر طويل فعال من حيث التكلفة",
              description: "حماية فائقة مع صيانة minimal",
            },
            {
              id: "b4",
              icon: "expert",
              title: "تركيب خبير",
              description:
                "يتم تطبيقه من قبل محترفين مدربين باستخدام تقنيات متقدمة",
            },
          ],
        },
        featuredProjects: {
          heading: "المشاريع المميزة",
          title: "استكشف أعمالنا",
          description:
            "شاهد فرق مايسترو في العمل - استكشف معرضًا للمشاريع السكنية والشركات والصناعية التي تظهر التزامنا بالمتانة والتميز في التصميم.",
          projects: [
            {
              id: "1",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Industrial Office",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Corporate",
                },
                ar: {
                  title: "مكتب صناعي",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "شركات",
                },
              },
            },
            {
              id: "2",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Residential Living Room",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Residential",
                },
                ar: {
                  title: "غرفة معيشة سكنية",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "سكني",
                },
              },
            },
            {
              id: "3",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Modern Living Space",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Residential",
                },
                ar: {
                  title: "مساحة معيشة عصرية",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "سكني",
                },
              },
            },
            {
              id: "4",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Corporate Hallway",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Corporate",
                },
                ar: {
                  title: "ممر شركات",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "شركات",
                },
              },
            },
            {
              id: "5",
              images: [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
              ],
              translations: {
                en: {
                  title: "Artistic Epoxy Floor",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                  category: "Custom",
                },
                ar: {
                  title: "أرضية إيبوكسي فنية",
                  description: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور",
                  category: "مخصص",
                },
              },
            },
          ],
        },
        testimonials: {
          heading: "شهادات العملاء",
          title: "بناء الثقة والمصداقية من خلال ملاحظات العملاء الحقيقية.",
          testimonials: [
            {
              id: "1",
              text: "حول إيبوكسي مايسترو أرضية مستودعنا بالكامل. الجودة استثنائية والفريق كان محترفًا طوال العملية بأكملها.",
              author: "أحمد الراشد",
              authorImage: "/images/testimonial-1.jpg",
              rating: 5,
            },
            {
              id: "2",
              text: "تجاوزت أرضية الإيبوكسي في مكتبنا جميع التوقعات. إنها جميلة ومتينة وسهلة الصيانة. أنصح بشدة!",
              author: "سارة جونسون",
              authorImage: "/images/testimonial-2.jpg",
              rating: 5,
            },
            {
              id: "3",
              text: "خدمة احترافية من البداية حتى النهاية. التصميم المخصص الذي أنشأوه لصالة عرضنا رائع تمامًا.",
              author: "محمد حسن",
              authorImage: "/images/testimonial-3.jpg",
              rating: 4,
            },
            {
              id: "4",
              text: "تجربة رائعة في العمل مع إيبوكسي مايسترو. لقد سلموا في الوقت المحدد والجودة استثنائية.",
              author: "فاطمة الزهراء",
              authorImage: "/images/testimonial-4.jpg",
              rating: 5,
            },
            {
              id: "5",
              text: "كان الفريق على دراية وساعدنا في اختيار الحل المثالي لاحتياجاتنا. راضون جدًا!",
              author: "ديفيد ويلسون",
              authorImage: "/images/testimonial-5.jpg",
              rating: 4,
            },
          ],
        },
      },
    },
  };

  // Get the base data for the requested locale
  const baseData = apiResponse.translations[locale as "en" | "ar"] || apiResponse.translations.en;
  
  // Localize projects
  const localizedProjects = baseData.featuredProjects.projects.map((project, index: number) => {
    const localeData = project.translations[locale as "en" | "ar"] || project.translations.en;
    return {
      id: project.id,
      title: localeData.title,
      image: project.images[index] || '', // Use first image from array
      description: localeData.description,
      category: localeData.category,
      images: project.images, // Images are shared across languages
    };
  });
  
  // Return localized data
  return {
    ...baseData,
    featuredProjects: {
      ...baseData.featuredProjects,
      projects: localizedProjects as any, // Type assertion for localized projects
    },
  };
}

// Get home page data (without SEO)
export async function getHomePageData(locale: string): Promise<HomePageData> {
  const fullData = await getHomePageApiResponse(locale);
  // Extract SEO and return the rest
  const { seo: _seo, ...dataWithoutSEO } = fullData;
  return dataWithoutSEO;
}

// Get SEO data for the home page
export async function getHomePageSEO(locale: string): Promise<SEOData> {
  const fullData = await getHomePageApiResponse(locale);
  return fullData.seo;
}
