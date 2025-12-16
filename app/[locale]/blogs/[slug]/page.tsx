import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Stack, Chip, Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogBySlug, getBlogSEO, getAllBlogs } from '@/src/lib/api/blogs';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

interface BlogPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Generate static params for all blogs
export async function generateStaticParams() {
  const allParams: Array<{ locale: string; slug: string }> = [];
  
  for (const locale of locales) {
    const blogs = await getAllBlogs();
    for (const blog of blogs) {
      allParams.push({
        locale,
        slug: blog.slug,
      });
    }
  }
  
  return allParams;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const seo = await getBlogSEO(slug, locale);

  if (!seo) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale, slug } = await params;
  const data = await getBlogBySlug(slug, locale);

  if (!data) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, m: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          aria-label="breadcrumb" 
          sx={{ mb: 4 }}
          data-aos="fade-up"
        >
          <Link href={`/${locale}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <MuiLink component="span" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
              {locale === 'ar' ? 'الرئيسية' : 'Home'}
            </MuiLink>
          </Link>
          <Link href={`/${locale}/blogs`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <MuiLink component="span" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
              {locale === 'ar' ? 'المدونة' : 'Blog'}
            </MuiLink>
          </Link>
          <Typography color="text.primary">{data.hero.title}</Typography>
        </Breadcrumbs>

        {/* Hero Image */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: 300, md: 400 },
            width: '100%',
            borderRadius: { xs: 0, md: 3 },
            overflow: 'hidden',
            mb: 4,
          }}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Image
            src={data.hero.image}
            alt={data.hero.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Article Header */}
        <Box 
          sx={{ mb: 4 }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Chip
            label={data.category}
            size="small"
            sx={{
              mb: 2,
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
              fontWeight: 500,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              mb: 3,
              color: 'text.primary',
              lineHeight: 1.2,
            }}
          >
            {data.hero.title}
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PersonIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data.author}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarTodayIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {formatDate(data.publishedAt)}
              </Typography>
            </Stack>
          </Stack>
          <Divider />
        </Box>

        {/* Article Content */}
        <Box
          sx={{
            '& h2': {
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              mt: 4,
              mb: 2,
              color: 'text.primary',
            },
            '& h3': {
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 600,
              mt: 3,
              mb: 1.5,
              color: 'text.primary',
            },
            '& p': {
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.8,
              mb: 2,
              color: 'text.primary',
            },
            '& ul, & ol': {
              mb: 2,
              pl: 3,
            },
            '& li': {
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.8,
              mb: 1,
              color: 'text.primary',
            },
            '& strong': {
              fontWeight: 600,
            },
          }}
          dangerouslySetInnerHTML={{ __html: data.content }}
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </Container>
    </Box>
  );
}

