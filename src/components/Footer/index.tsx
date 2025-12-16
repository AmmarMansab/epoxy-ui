import { getStaticTranslations } from '@/src/lib/static-translations';
import { getAllServices } from '@/src/lib/api/services';
import type { Locale } from '@/i18n';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Logo } from '@/src/components/Logo';

interface FooterProps {
  locale: Locale;
}

export async function Footer({ locale }: FooterProps) {
  const footer = await getStaticTranslations(locale, 'footer');
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
  
  // Map footer translation keys to category slugs for display order
  const footerCategoryOrder = [
    {
      key: 'retailApplications' as const,
      categorySlug: 'retail-applications',
    },
    {
      key: 'corporateApplications' as const,
      categorySlug: 'corporate-applications',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
      }}
    >
      {/* Main Footer Section - Dark Background */}
      <Box
        sx={{
          bgcolor: 'grey.900',
          color: 'common.white',
          py: { xs: 6, md: 8 },
          borderRadius: { xs: 0, md: 3 },
          mx: { xs: 0, md: 2 },
          mb: 2,
          mt: 4,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 6 }}
          >
            {/* Left Column - Logo, Tagline, Social Media */}
            <Box 
              sx={{ flex: { md: '1 1 50%' } }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Box sx={{ mb: 3 }}>
                <Logo locale={locale} variant="footer" />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'grey.300',
                  mb: 3,
                  lineHeight: 1.6,
                  maxWidth: { md: '90%' },
                }}
              >
                {footer.tagline}
              </Typography>
              <Stack direction="row" spacing={1.5}>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'common.white',
                    color: 'grey.900',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'common.white',
                    color: 'grey.900',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                  aria-label="X (Twitter)"
                >
                  <XIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'common.white',
                    color: 'grey.900',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                  aria-label="Facebook"
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: 'common.white',
                    color: 'grey.900',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                  aria-label="Instagram"
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Box>

            {/* Middle Column - Services */}
            <Box 
              sx={{ flex: { md: '1 1 25%' } }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'common.white',
                }}
              >
                {footer.services?.title}
              </Typography>
              <Stack spacing={3}>
                {footerCategoryOrder
                  .map(({ key, categorySlug }) => {
                    const categoryGroup = servicesByCategory[categorySlug];
                    if (!categoryGroup || categoryGroup.services.length === 0) {
                      return null;
                    }
                    const categoryLabel = footer.services?.[key] || categoryGroup.category.title;
                    const categoryLink = `/${locale}/services/${categorySlug}`;
                    
                    return (
                      <Box key={categorySlug}>
                        <Link
                          href={categoryLink}
                          style={{ textDecoration: 'none' }}
                        >
                          <Typography
                            component="span"
                            sx={{
                              color: 'common.white',
                              textDecoration: 'none',
                              cursor: 'pointer',
                              fontWeight: 600,
                              fontSize: '0.9375rem',
                              mb: 1,
                              display: 'block',
                              '&:hover': {
                                color: 'grey.200',
                              },
                            }}
                          >
                            {categoryLabel}
                          </Typography>
                        </Link>
                        <Stack spacing={1} sx={{ pl: 1, mt: 0.5 }}>
                          {categoryGroup.services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/${locale}${service.link}`}
                              style={{ textDecoration: 'none' }}
                            >
                              <Typography
                                component="span"
                                sx={{
                                  color: 'grey.300',
                                  textDecoration: 'none',
                                  cursor: 'pointer',
                                  fontSize: '0.875rem',
                                  display: 'block',
                                  '&:hover': {
                                    color: 'common.white',
                                  },
                                }}
                              >
                                {service.title}
                              </Typography>
                            </Link>
                          ))}
                        </Stack>
                      </Box>
                    );
                  })
                  .filter((item) => item !== null)}
              </Stack>
            </Box>

            {/* Right Column - Company */}
            <Box 
              sx={{ flex: { md: '1 1 25%' } }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'common.white',
                }}
              >
                {footer.company?.title}
              </Typography>
              <Stack spacing={1.5}>
                <Link
                  href={`/${locale}/about`}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: 'grey.300',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'common.white',
                      },
                    }}
                  >
                    {footer.company?.aboutUs}
                  </Typography>
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: 'grey.300',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'common.white',
                      },
                    }}
                  >
                    {footer.company?.contactUs}
                  </Typography>
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Bottom Section - Copyright & Legal Links */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            py: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            {footer.copyright}
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              flexWrap: 'wrap',
            }}
          >
            <Link
              href={`/${locale}/privacy`}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                component="span"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'text.primary',
                  },
                }}
              >
                {footer.legal?.privacyPolicy}
              </Typography>
            </Link>
            <Link
              href={`/${locale}/cookies`}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                component="span"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'text.primary',
                  },
                }}
              >
                {footer.legal?.cookiesSettings}
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

