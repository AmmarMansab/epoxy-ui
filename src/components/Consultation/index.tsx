'use client';

import { Box, Container, Typography } from '@mui/material';
import { AboutHero } from '@/src/components/About/Hero';
import { ConsultationForm } from './ConsultationForm';
import { ContactInfo } from '@/src/components/Contact/ContactInfo';
import type { ConsultationPageApiData } from '@/src/lib/api/consultation';

interface ConsultationProps {
  apiData: ConsultationPageApiData;
  translations: any; // Static translations from consultation.json
  locale: string;
}

export function Consultation({ apiData, translations, locale }: ConsultationProps) {
  const heroTranslations = translations.hero;
  const breadcrumbs = [heroTranslations.breadcrumbs.home, heroTranslations.breadcrumbs.contact];

  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 4, md: 6 } }}>
      {/* Hero Section */}
      <Container maxWidth="xl">
        <Box data-aos="fade-up">
          <AboutHero
            heading={heroTranslations.heading}
            title={heroTranslations.title}
            breadcrumbs={breadcrumbs}
            image={apiData.hero.image}
            locale={locale}
          />
        </Box>
      </Container>

      {/* Intro Section */}
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 2,
            textAlign: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {translations.intro.heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            color: 'text.secondary',
            mb: 6,
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
            lineHeight: 1.8,
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {translations.intro.description}
        </Typography>
      </Container>

      {/* Form Section */}
      <Box data-aos="fade-up" data-aos-delay="400">
        <ConsultationForm translations={translations} locale={locale} />
      </Box>

      {/* Contact Info Section */}
      <Box data-aos="fade-up" data-aos-delay="500">
        <ContactInfo contactInfo={apiData.contactInfo} translations={translations} locale={locale} />
      </Box>
    </Box>
  );
}

