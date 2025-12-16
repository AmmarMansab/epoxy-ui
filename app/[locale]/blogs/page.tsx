import { Box, Container, Typography, Card, CardContent, CardMedia, Stack, Breadcrumbs, Link as MuiLink, Chip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogsPageData, getBlogsPageSEO } from '@/src/lib/api/blogs';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

interface BlogsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = await getBlogsPageSEO(locale);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
  };
}

export default async function BlogsPage({ params }: BlogsPageProps) {
  const { locale } = await params;
  const data = await getBlogsPageData(locale);

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
      <Container maxWidth="xl">
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
          <Typography color="text.primary">{locale === 'ar' ? 'المدونة' : 'Blog'}</Typography>
        </Breadcrumbs>

        {/* Page Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
            fontWeight: 700,
            mb: 2,
            color: 'text.primary',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {data.hero.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: 'text.secondary',
            mb: 6,
            maxWidth: '800px',
            lineHeight: 1.7,
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {locale === 'ar' 
            ? 'اقرأ أحدث المقالات والنصائح حول أرضيات الإيبوكسي والصيانة والتصميم.'
            : 'Read the latest articles and tips about epoxy flooring, maintenance, and design.'}
        </Typography>

        {/* Blogs Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {data.blogs.map((blog, index) => (
            <Link
              key={blog.slug}
              href={`/${locale}/blogs/${blog.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                    borderColor: 'primary.main',
                  },
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <CardMedia
                  sx={{
                    position: 'relative',
                    height: { xs: 200, md: 250 },
                    bgcolor: 'grey.200',
                  }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Chip
                    label={blog.category}
                    size="small"
                    sx={{
                      mb: 2,
                      alignSelf: 'flex-start',
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                      fontWeight: 500,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      fontWeight: 600,
                      mb: 1.5,
                      color: 'text.primary',
                      lineHeight: 1.3,
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      flexGrow: 1,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {blog.excerpt}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 'auto', pt: 2, borderTop: 1, borderColor: 'divider' }}>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <PersonIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                        {blog.author}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                        {formatDate(blog.publishedAt)}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

