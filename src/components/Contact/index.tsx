'use client';

import { Box, Container } from '@mui/material';
import { AboutHero } from '@/src/components/About/Hero';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import type { ContactUsPageApiData } from '@/src/lib/api/contact';

interface ContactProps {
  apiData: ContactUsPageApiData;
  translations: any; // Static translations from contact.json
  locale: string;
}

export function Contact({ apiData, translations, locale }: ContactProps) {
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

      {/* Form Section */}
      <Box data-aos="fade-up" data-aos-delay="200">
        <ContactForm translations={translations} locale={locale} />
      </Box>

      {/* Contact Info Section */}
      <Box data-aos="fade-up" data-aos-delay="300">
        <ContactInfo contactInfo={apiData.contactInfo} translations={translations} locale={locale} />
      </Box>
    </Box>
  );
}
