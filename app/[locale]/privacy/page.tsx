import { Box, Container, Typography, Paper, Stack, Divider } from '@mui/material';
import { getPrivacyPageData, getPrivacyPageSEO } from '@/src/lib/api/privacy';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = await getPrivacyPageSEO(locale);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const data = await getPrivacyPageData(locale);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 4, md: 6 },
        minHeight: '60vh',
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack spacing={4}>
            {/* Header */}
            <Box data-aos="fade-up">
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontStyle: 'italic',
                }}
              >
                Last Updated: {data.lastUpdated}
              </Typography>
            </Box>

            <Divider />

            {/* Sections */}
            <Stack spacing={4}>
              {data.sections.map((section, index) => (
                <Box 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

