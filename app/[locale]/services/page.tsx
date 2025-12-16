import { Box, Container, Typography, Card, CardContent, CardMedia, Stack, Breadcrumbs, Link as MuiLink, Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getAllServices } from '@/src/lib/api/services';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';
import { locales } from '@/i18n';

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Services - Epoxy Maestro',
    description: 'Explore our comprehensive range of epoxy flooring services. Professional solutions for residential, commercial, and industrial applications.',
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const services = await getAllServices(locale);
  
  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    const categorySlug = service.category.slug;
    if (!acc[categorySlug]) {
      acc[categorySlug] = {
        category: service.category,
        services: [],
      };
    }
    acc[categorySlug].services.push(service);
    return acc;
  }, {} as Record<string, { category: typeof services[0]['category']; services: typeof services }>);
  
  // Convert to array and sort by category slug
  const categoryGroups = Object.values(servicesByCategory).sort((a, b) => 
    a.category.slug.localeCompare(b.category.slug)
  );

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
          <Typography color="text.primary">Services</Typography>
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
          Our Services
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
          Discover our comprehensive range of epoxy flooring solutions. From residential to commercial applications, we provide expert installation and premium quality materials.
        </Typography>

        {/* Services by Category */}
        <Stack spacing={6}>
          {categoryGroups.map((group, groupIndex) => (
            <Box 
              key={group.category.slug}
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100}
            >
              {/* Category Header */}
              <Box sx={{ mb: 4 }}>
                <Link
                  href={`/${locale}/services/${group.category.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 700,
                      mb: 1,
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s',
                    }}
                  >
                    {group.category.title}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.9375rem',
                  }}
                >
                  {group.services.length} {group.services.length === 1 ? 'service' : 'services'} available
                </Typography>
              </Box>

              {/* Services Grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                  gap: { xs: 3, md: 4 },
                }}
              >
                {group.services.map((service, serviceIndex) => (
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
                      data-aos-delay={serviceIndex * 50}
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

              {/* Divider between categories (except last) */}
              {groupIndex < categoryGroups.length - 1 && (
                <Divider sx={{ mt: 6 }} />
              )}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

