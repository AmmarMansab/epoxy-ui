import type { Project, SEOData } from '@/src/types/api';

// Localized project (for display)
export interface LocalizedProject {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  images: string[];
}

// Projects page data structure
export interface ProjectsPageData {
  hero: {
    title: string;
    breadcrumbs: string[];
    image: string;
  };
  projects: LocalizedProject[];
  showMoreText: string;
}

export interface ProjectsPageDataWithSEO extends ProjectsPageData {
  seo: SEOData;
}

// Get all projects
export async function getAllProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Mock projects data with translations
  const projects: Project[] = [
    {
      id: '1',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Modern Living Room',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Residential',
        },
        ar: {
          title: 'غرفة معيشة عصرية',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'سكني',
        },
      },
    },
    {
      id: '2',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Industrial Warehouse',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Industrial',
        },
        ar: {
          title: 'مستودع صناعي',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'صناعي',
        },
      },
    },
    {
      id: '3',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Terrazzo Flooring',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Custom',
        },
        ar: {
          title: 'أرضيات تيرازو',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'مخصص',
        },
      },
    },
    {
      id: '4',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Classic Car Showroom',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Commercial',
        },
        ar: {
          title: 'صالة عرض سيارات كلاسيكية',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'تجاري',
        },
      },
    },
    {
      id: '5',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Modern Office Space',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Corporate',
        },
        ar: {
          title: 'مساحة مكتبية عصرية',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'شركات',
        },
      },
    },
    {
      id: '6',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Luxury Waiting Area',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Commercial',
        },
        ar: {
          title: 'منطقة انتظار فاخرة',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'تجاري',
        },
      },
    },
    {
      id: '7',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Minimalist Home',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Residential',
        },
        ar: {
          title: 'منزل بسيط',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'سكني',
        },
      },
    },
    {
      id: '8',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Artistic Epoxy Design',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Custom',
        },
        ar: {
          title: 'تصميم إيبوكسي فني',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'مخصص',
        },
      },
    },
    {
      id: '9',
      images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
      ],
      translations: {
        en: {
          title: 'Marble Effect Flooring',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          category: 'Residential',
        },
        ar: {
          title: 'أرضيات بتأثير الرخام',
          description: 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تيمبور',
          category: 'سكني',
        },
      },
    },
  ];

  return projects;
}

// Get projects page data
export async function getProjectsPageData(locale: string): Promise<ProjectsPageData> {
  const allProjects = await getAllProjects();
  
  // Localize projects based on locale
  const projects: LocalizedProject[] = allProjects.map((project, index: number) => {
    const localeData = project.translations[locale as 'en' | 'ar'] || project.translations.en;
    return {
      id: project.id,
      title: localeData.title,
      image: project.images[index] || '', // Use first image from array
      description: localeData.description,
      category: localeData.category,
      images: project.images, // Images are shared across languages
    };
  });
  
  const data: ProjectsPageData = {
    hero: {
      title: locale === 'ar' ? 'المشاريع' : 'Projects',
      breadcrumbs: locale === 'ar' 
        ? ['الرئيسية', 'المشاريع']
        : ['Home', 'Projects'],
      image: '/images/1.jpg',
    },
    projects,
    showMoreText: locale === 'ar' ? 'عرض المزيد' : 'Show More',
  };

  return data;
}

// Get projects page SEO
export async function getProjectsPageSEO(locale: string): Promise<SEOData> {
  return {
    title: locale === 'ar' 
      ? 'المشاريع - إيبوكسي مايسترو'
      : 'Projects - Epoxy Maestro',
    description: locale === 'ar'
      ? 'استكشف مجموعة من مشاريعنا المتميزة في أرضيات الإيبوكسي والحلول الواقية.'
      : 'Explore our portfolio of exceptional epoxy flooring and protective coating projects.',
    keywords: locale === 'ar'
      ? 'مشاريع إيبوكسي، أرضيات إيبوكسي، مشاريع سكنية، مشاريع تجارية'
      : 'epoxy projects, epoxy flooring, residential projects, commercial projects',
  };
}

// Get project by ID
export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find((p) => p.id === id) || null;
}

