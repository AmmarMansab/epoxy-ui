import type { BlogPost, SEOData } from '@/src/types/api';

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

// Localized blog post (for display)
export interface LocalizedBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
}

// Blogs listing page data structure
export interface BlogsPageData {
  hero: {
    title: string;
    breadcrumbs: string[];
    image: string;
  };
  blogs: LocalizedBlogPost[];
}

export interface BlogsPageDataWithSEO extends BlogsPageData {
  seo: SEOData;
}

// Blog detail page data structure
export interface BlogDetailData {
  hero: {
    title: string;
    breadcrumbs: string[];
    image: string;
  };
  content: string;
  author: string;
  publishedAt: string;
  category: string;
}

export interface BlogDetailDataWithSEO extends BlogDetailData {
  seo: SEOData;
}

// Get all blog posts (exported for static generation)
export async function getAllBlogs(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Mock blog posts data with translations
  const blogPosts: BlogPost[] = [
    {
      slug: 'ultimate-guide-epoxy-flooring',
      image: '/images/blog-epoxy-guide.jpg',
      author: 'John Smith',
      publishedAt: '2024-01-15',
      translations: {
        en: {
          title: 'The Ultimate Guide to Epoxy Flooring',
          excerpt: 'Discover everything you need to know about epoxy flooring, from installation to maintenance. Learn why it\'s the perfect choice for modern spaces.',
          content: `
            <h2>Introduction</h2>
            <p>Epoxy flooring has become one of the most popular flooring solutions for both residential and commercial spaces. Its durability, aesthetic appeal, and ease of maintenance make it an excellent choice for modern interiors.</p>
            
            <h2>What is Epoxy Flooring?</h2>
            <p>Epoxy flooring is a type of floor coating that consists of multiple layers of epoxy applied to a floor. The epoxy is a thermosetting polymer that creates a hard, durable surface when cured.</p>
            
            <h2>Benefits of Epoxy Flooring</h2>
            <ul>
              <li><strong>Durability:</strong> Epoxy floors can last for decades with proper maintenance</li>
              <li><strong>Easy Maintenance:</strong> Simple cleaning with soap and water keeps them looking new</li>
              <li><strong>Versatility:</strong> Available in various colors, patterns, and finishes</li>
              <li><strong>Cost-Effective:</strong> Long-term value with minimal upkeep costs</li>
              <li><strong>Resistant:</strong> Resistant to chemicals, stains, and heavy traffic</li>
            </ul>
            
            <h2>Installation Process</h2>
            <p>The installation of epoxy flooring involves several critical steps:</p>
            <ol>
              <li>Surface preparation and cleaning</li>
              <li>Primer application</li>
              <li>Base coat application</li>
              <li>Top coat application</li>
              <li>Curing period</li>
            </ol>
            
            <h2>Maintenance Tips</h2>
            <p>To keep your epoxy floor looking its best, follow these maintenance tips:</p>
            <ul>
              <li>Regular sweeping and mopping</li>
              <li>Avoid harsh chemicals</li>
              <li>Use protective pads under heavy furniture</li>
              <li>Address spills immediately</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Epoxy flooring offers an excellent combination of durability, aesthetics, and functionality. Whether for your home or business, it's an investment that pays off in the long run.</p>
          `,
          category: 'Installation',
        },
        ar: {
          title: 'الدليل الشامل لأرضيات الإيبوكسي',
          excerpt: 'اكتشف كل ما تحتاج معرفته عن أرضيات الإيبوكسي، من التثبيت إلى الصيانة. تعرف على سبب كونها الخيار المثالي للمساحات العصرية.',
          content: `
            <h2>مقدمة</h2>
            <p>أصبحت أرضيات الإيبوكسي واحدة من أكثر حلول الأرضيات شعبية للمساحات السكنية والتجارية. متانتها وجاذبيتها الجمالية وسهولة صيانتها تجعلها خيارًا ممتازًا للديكورات الداخلية العصرية.</p>
            
            <h2>ما هي أرضيات الإيبوكسي؟</h2>
            <p>أرضيات الإيبوكسي هي نوع من طلاء الأرضيات يتكون من طبقات متعددة من الإيبوكسي يتم تطبيقها على الأرضية. الإيبوكسي هو بوليمر حراري يخلق سطحًا صلبًا ومتينًا عند المعالجة.</p>
            
            <h2>فوائد أرضيات الإيبوكسي</h2>
            <ul>
              <li><strong>المتانة:</strong> يمكن أن تدوم أرضيات الإيبوكسي لعقود مع الصيانة المناسبة</li>
              <li><strong>سهولة الصيانة:</strong> التنظيف البسيط بالصابون والماء يحافظ على مظهرها الجديد</li>
              <li><strong>التنوع:</strong> متوفرة بألوان وأنماط ونهجات مختلفة</li>
              <li><strong>فعالة من حيث التكلفة:</strong> قيمة طويلة الأمد بتكاليف صيانة minimal</li>
              <li><strong>مقاومة:</strong> مقاومة للمواد الكيميائية والبقع والحركة الكثيفة</li>
            </ul>
          `,
          category: 'التثبيت',
        },
      },
      seo: {
        title: 'The Ultimate Guide to Epoxy Flooring - Epoxy Maestro',
        description: 'Complete guide to epoxy flooring installation, benefits, and maintenance. Learn everything about this durable flooring solution.',
        keywords: 'epoxy flooring, floor coating, epoxy installation, durable floors',
      },
    },
    {
      slug: 'choosing-right-epoxy-color',
      image: '/images/1.jpg',
      author: 'Sarah Johnson',
      publishedAt: '2024-02-20',
      translations: {
        en: {
          title: 'Choosing the Right Epoxy Color for Your Space',
          excerpt: 'Color selection is crucial for epoxy flooring. Learn how to choose the perfect color that complements your interior design and meets your functional needs.',
          content: `
            <h2>Introduction</h2>
            <p>Selecting the right color for your epoxy floor is more than just an aesthetic choice—it can impact the overall feel of your space, affect lighting, and even influence mood.</p>
            
            <h2>Factors to Consider</h2>
            <ul>
              <li><strong>Lighting:</strong> Natural and artificial lighting affects how colors appear</li>
              <li><strong>Space Size:</strong> Lighter colors can make small spaces feel larger</li>
              <li><strong>Function:</strong> Different spaces may require different color schemes</li>
              <li><strong>Maintenance:</strong> Some colors show dirt and wear more than others</li>
            </ul>
            
            <h2>Popular Color Options</h2>
            <p>From classic neutrals to bold statements, epoxy flooring offers endless color possibilities.</p>
            
            <h2>Conclusion</h2>
            <p>Take time to consider all factors before making your color choice. Consult with professionals to ensure the best result for your space.</p>
          `,
          category: 'Design',
        },
        ar: {
          title: 'اختيار اللون المناسب للإيبوكسي لمساحتك',
          excerpt: 'اختيار اللون أمر بالغ الأهمية لأرضيات الإيبوكسي. تعلم كيفية اختيار اللون المثالي الذي يكمل تصميمك الداخلي ويلبي احتياجاتك الوظيفية.',
          content: `
            <h2>مقدمة</h2>
            <p>اختيار اللون المناسب لأرضية الإيبوكسي هو أكثر من مجرد اختيار جمالي—يمكن أن يؤثر على الشعور العام لمساحتك ويؤثر على الإضاءة وحتى المزاج.</p>
            
            <h2>العوامل التي يجب مراعاتها</h2>
            <ul>
              <li><strong>الإضاءة:</strong> الإضاءة الطبيعية والاصطناعية تؤثر على كيفية ظهور الألوان</li>
              <li><strong>حجم المساحة:</strong> الألوان الفاتحة يمكن أن تجعل المساحات الصغيرة تبدو أكبر</li>
              <li><strong>الوظيفة:</strong> المساحات المختلفة قد تتطلب أنظمة ألوان مختلفة</li>
              <li><strong>الصيانة:</strong> بعض الألوان تظهر الأوساخ والاهتراء أكثر من غيرها</li>
            </ul>
          `,
          category: 'التصميم',
        },
      },
      seo: {
        title: 'Choosing the Right Epoxy Color - Epoxy Maestro',
        description: 'Expert tips on selecting the perfect epoxy floor color for your space. Consider lighting, size, and function.',
        keywords: 'epoxy colors, floor color selection, epoxy design, interior design',
      },
    },
    {
      slug: 'epoxy-vs-traditional-flooring',
      image: '/images/1.jpg',
      author: 'Michael Chen',
      publishedAt: '2024-03-10',
      translations: {
        en: {
          title: 'Epoxy vs Traditional Flooring: A Comprehensive Comparison',
          excerpt: 'Compare epoxy flooring with traditional options like tile, hardwood, and carpet. Understand the pros and cons of each to make an informed decision.',
          content: `
            <h2>Introduction</h2>
            <p>When choosing flooring for your space, it's essential to compare all available options. This comprehensive comparison will help you understand how epoxy stacks up against traditional flooring materials.</p>
            
            <h2>Epoxy Flooring</h2>
            <h3>Pros:</h3>
            <ul>
              <li>Extremely durable and long-lasting</li>
              <li>Low maintenance requirements</li>
              <li>Seamless surface</li>
              <li>Chemical and stain resistant</li>
            </ul>
            <h3>Cons:</h3>
            <ul>
              <li>Can be slippery when wet</li>
              <li>Requires professional installation</li>
              <li>Initial cost can be higher</li>
            </ul>
            
            <h2>Traditional Flooring Options</h2>
            <p>Compare epoxy with tile, hardwood, carpet, and other traditional materials.</p>
            
            <h2>Conclusion</h2>
            <p>Each flooring type has its place. Epoxy excels in durability and low maintenance, making it ideal for high-traffic areas.</p>
          `,
          category: 'Comparison',
        },
        ar: {
          title: 'الإيبوكسي مقابل الأرضيات التقليدية: مقارنة شاملة',
          excerpt: 'قارن أرضيات الإيبوكسي مع الخيارات التقليدية مثل البلاط والخشب الصلب والسجاد. افهم إيجابيات وسلبيات كل منها لاتخاذ قرار مستنير.',
          content: `
            <h2>مقدمة</h2>
            <p>عند اختيار الأرضيات لمساحتك، من الضروري مقارنة جميع الخيارات المتاحة. هذه المقارنة الشاملة ستساعدك على فهم كيفية مقارنة الإيبوكسي مع مواد الأرضيات التقليدية.</p>
            
            <h2>أرضيات الإيبوكسي</h2>
            <h3>الإيجابيات:</h3>
            <ul>
              <li>متينة للغاية وطويلة الأمد</li>
              <li>متطلبات صيانة منخفضة</li>
              <li>سطح سلس</li>
              <li>مقاومة للمواد الكيميائية والبقع</li>
            </ul>
          `,
          category: 'مقارنة',
        },
      },
      seo: {
        title: 'Epoxy vs Traditional Flooring Comparison - Epoxy Maestro',
        description: 'Compare epoxy flooring with traditional options. Learn the pros and cons of each flooring type.',
        keywords: 'epoxy vs tile, flooring comparison, epoxy benefits, floor materials',
      },
    },
    {
      slug: 'maintaining-epoxy-floors',
      image: '/images/1.jpg',
      author: 'Emily Davis',
      publishedAt: '2024-04-05',
      translations: {
        en: {
          title: 'Maintaining Your Epoxy Floors: Best Practices',
          excerpt: 'Keep your epoxy floors looking pristine with these expert maintenance tips. Learn the dos and don\'ts of epoxy floor care.',
          content: `
            <h2>Introduction</h2>
            <p>Proper maintenance is key to extending the life and beauty of your epoxy floors. Follow these best practices to keep them in excellent condition.</p>
            
            <h2>Daily Maintenance</h2>
            <ul>
              <li>Sweep or vacuum regularly to remove dirt and debris</li>
              <li>Mop with mild detergent and warm water</li>
              <li>Wipe up spills immediately</li>
            </ul>
            
            <h2>Weekly Maintenance</h2>
            <ul>
              <li>Deep clean with appropriate cleaners</li>
              <li>Inspect for any damage or wear</li>
              <li>Apply protective coatings if needed</li>
            </ul>
            
            <h2>What to Avoid</h2>
            <ul>
              <li>Harsh chemicals and abrasive cleaners</li>
              <li>Dragging heavy furniture</li>
              <li>Excessive water exposure</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>With proper care, your epoxy floors will maintain their beauty and functionality for many years.</p>
          `,
          category: 'Maintenance',
        },
        ar: {
          title: 'صيانة أرضيات الإيبوكسي: أفضل الممارسات',
          excerpt: 'حافظ على مظهر أرضيات الإيبوكسي مع هذه النصائح الخبيرة للصيانة. تعلم ما يجب فعله وما يجب تجنبه في رعاية أرضيات الإيبوكسي.',
          content: `
            <h2>مقدمة</h2>
            <p>الصيانة المناسبة هي المفتاح لإطالة عمر وجمال أرضيات الإيبوكسي. اتبع أفضل الممارسات هذه للحفاظ عليها في حالة ممتازة.</p>
            
            <h2>الصيانة اليومية</h2>
            <ul>
              <li>كنس أو تنظيف بالمكنسة الكهربائية بانتظام لإزالة الأوساخ والحطام</li>
              <li>مسح بمنظف معتدل وماء دافئ</li>
              <li>مسح الانسكابات فورًا</li>
            </ul>
          `,
          category: 'الصيانة',
        },
      },
      seo: {
        title: 'Maintaining Epoxy Floors - Best Practices - Epoxy Maestro',
        description: 'Expert tips for maintaining epoxy floors. Learn daily and weekly maintenance routines to keep your floors looking new.',
        keywords: 'epoxy maintenance, floor care, epoxy cleaning, floor maintenance',
      },
    },
  ];

  return blogPosts;
}

// Get blogs listing page data
export async function getBlogsPageData(locale: string): Promise<BlogsPageData> {
  const allBlogs = await getAllBlogs();
  
  // Localize blogs based on locale
  const blogs: LocalizedBlogPost[] = allBlogs.map((blog) => {
    const localeData = blog.translations[locale as 'en' | 'ar'] || blog.translations.en;
    return {
      slug: blog.slug,
      title: localeData.title,
      excerpt: localeData.excerpt,
      content: localeData.content,
      image: blog.image,
      author: blog.author,
      publishedAt: blog.publishedAt,
      category: localeData.category,
    };
  });
  
  // Sort by published date (newest first)
  blogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  const data: BlogsPageData = {
    hero: {
      title: locale === 'ar' ? 'المدونة' : 'Blog',
      breadcrumbs: locale === 'ar' 
        ? ['الرئيسية', 'المدونة']
        : ['Home', 'Blog'],
      image: '/images/1.jpg',
    },
    blogs,
  };

  return data;
}

// Get blogs page SEO
export async function getBlogsPageSEO(locale: string): Promise<SEOData> {
  return {
    title: locale === 'ar' 
      ? 'المدونة - إيبوكسي مايسترو'
      : 'Blog - Epoxy Maestro',
    description: locale === 'ar'
      ? 'اقرأ أحدث المقالات والنصائح حول أرضيات الإيبوكسي والصيانة والتصميم.'
      : 'Read the latest articles and tips about epoxy flooring, maintenance, and design.',
    keywords: locale === 'ar'
      ? 'مدونة إيبوكسي، مقالات أرضيات، نصائح صيانة'
      : 'epoxy blog, flooring articles, maintenance tips, epoxy guides',
  };
}

// Get blog by slug
export async function getBlogBySlug(slug: string, locale: string): Promise<BlogDetailData | null> {
  const allBlogs = await getAllBlogs();
  const blog = allBlogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return null;
  }
  
  const localeData = blog.translations[locale as 'en' | 'ar'] || blog.translations.en;
  
  return {
    hero: {
      title: localeData.title,
      breadcrumbs: locale === 'ar'
        ? ['الرئيسية', 'المدونة', localeData.title]
        : ['Home', 'Blog', localeData.title],
      image: blog.image,
    },
    content: localeData.content,
    author: blog.author,
    publishedAt: blog.publishedAt,
    category: localeData.category,
  };
}

// Get blog SEO by slug
export async function getBlogSEO(slug: string, locale: string): Promise<SEOData | null> {
  const allBlogs = await getAllBlogs();
  const blog = allBlogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return null;
  }
  
  return blog.seo;
}

