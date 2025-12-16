import { Box, Container, Typography, Card, CardContent, CardMedia, Stack, Breadcrumbs, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getServicesByCategory, getCategoryBySlug, getAllServices } from '@/src/lib/api/services';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

interface CategoryPageProps {
  params: Promise<{ locale: string; category: string }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  const allParams: Array<{ locale: string; category: string }> = [];
  
  for (const locale of locales) {
    const services = await getAllServices(locale);
    const uniqueCategories = new Set(services.map((s) => s.category.slug));
    
    for (const categorySlug of uniqueCategories) {
      allParams.push({
        locale,
        category: categorySlug,
      });
    }
  }
  
  return allParams;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, category: categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug, locale);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.title} - Epoxy Maestro`,
    description: `Explore our ${category.title.toLowerCase()} services. Professional epoxy flooring solutions for your needs.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category: categorySlug } = await params;
  
  const category = await getCategoryBySlug(categorySlug, locale);
  const services = await getServicesByCategory(categorySlug, locale);
  
  if (!category || services.length === 0) {
    notFound();
  }

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
              Home
            </MuiLink>
          </Link>
          <Link href={`/${locale}/services`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <MuiLink component="span" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
              Services
            </MuiLink>
          </Link>
          <Typography color="text.primary">{category.title}</Typography>
        </Breadcrumbs>

        {/* Category Title */}
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
          {category.title}
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 4 },
            mt: 4,
          }}
        >
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/${locale}${service.link}`}
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
                  src="/images/hero-epoxy-floor.jpg"
                  alt={service.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 600,
                    mb: 1,
                    color: 'text.primary',
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                    mt: 2,
                  }}
                >
                  Learn More →
                </Typography>
              </CardContent>
            </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

