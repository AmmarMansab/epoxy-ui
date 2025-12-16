'use client';

import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Paper, Stack } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { ServiceDetailData } from '@/src/types/api';

interface ServiceDetailProps {
  data: ServiceDetailData;
  locale: string;
}

export function ServiceDetail({ data, locale }: ServiceDetailProps) {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 400, md: 500 },
          width: '100%',
          borderRadius: { xs: 0, md: 3 },
          overflow: 'hidden',
          mb: 6,
        }}
      >
        <Image
          src={data.hero.image}
          alt={data.hero.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: 3,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              mb: 2,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {data.hero.title}
          </Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              '& .MuiBreadcrumbs-ol': {
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
              '& .MuiBreadcrumbs-li': {
                color: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            {data.hero.breadcrumbs.map((crumb, index) => {
              const isLast = index === data.hero.breadcrumbs.length - 1;
              const crumbKey = `${crumb}-${index}`;
              return isLast ? (
                <Typography key={crumbKey} sx={{ color: 'white', fontWeight: 500 }}>
                  {crumb}
                </Typography>
              ) : (
                <MuiLink
                  key={crumbKey}
                  component={NextLink}
                  href={index === 0 ? `/${locale}` : '#'}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {crumb}
                </MuiLink>
              );
            })}
          </Breadcrumbs>
        </Box>
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 4,
          }}
        >
          {/* Main Content */}
          <Box sx={{ flex: { xs: '1 1 100%', lg: '1 1 66.666%' }, minWidth: 0 }}>
            {/* Intro Paragraphs */}
            <Box 
              sx={{ mb: 5 }}
              data-aos="fade-up"
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: 'text.primary',
                  lineHeight: 1.8,
                  mb: 2.5,
                }}
              >
                {data.intro.paragraph1}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: 'text.primary',
                  lineHeight: 1.8,
                }}
              >
                {data.intro.paragraph2}
              </Typography>
            </Box>

            {/* Applications Section */}
            <Box 
              sx={{ mb: 5 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3.5,
                }}
              >
                {data.applications.heading}
              </Typography>
              <Stack spacing={3.5}>
                {data.applications.items.map((application, index) => (
                  <Box 
                    key={`${application.title}-${index}`}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 50}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1.5,
                      }}
                    >
                      {application.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.0625rem' },
                        color: 'text.primary',
                        lineHeight: 1.75,
                      }}
                    >
                      {application.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Benefits Section */}
            <Box 
              sx={{ mb: 5 }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3.5,
                }}
              >
                {data.benefits.heading}
              </Typography>
              <Stack spacing={2.5}>
                {data.benefits.items.map((benefit, index) => (
                  <Box
                    key={`benefit-${index}-${benefit.substring(0, 20)}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                    data-aos="fade-right"
                    data-aos-delay={500 + index * 50}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'primary.main',
                        fontSize: { xs: 22, md: 24 },
                        mt: 0.25,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.0625rem' },
                        color: 'text.primary',
                        lineHeight: 1.75,
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Related Services Sidebar */}
          <Box 
            sx={{ flex: { xs: '1 1 100%', lg: '1 1 33.333%' }, minWidth: 0 }}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: 2.5,
                border: '1px solid',
                borderColor: 'rgba(0, 0, 0, 0.12)',
                bgcolor: 'background.paper',
                position: 'sticky',
                top: 100,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                {data.relatedServices.heading}
              </Typography>
              <Stack spacing={2.5}>
                {data.relatedServices.services.map((service, index) => (
                  <MuiLink
                    key={service.id}
                    component={NextLink}
                    href={`/${locale}${service.link}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      textDecoration: 'none',
                      color: 'text.primary',
                      transition: 'opacity 0.2s',
                      '&:hover': {
                        opacity: 0.8,
                      },
                    }}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 50}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        overflow: 'hidden',
                        flexShrink: 0,
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="100px"
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0, pt: 0.5 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'text.primary',
                          fontSize: { xs: '0.9375rem', md: '1rem' },
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{
                          color: 'primary.main',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          display: 'inline-block',
                        }}
                      >
                        Read More
                      </Typography>
                    </Box>
                  </MuiLink>
                ))}
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

