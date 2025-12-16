'use client';

import { Box, Container, Typography } from '@mui/material';
import { AboutHero } from '@/src/components/About/Hero';
import { FeatureSection } from './FeatureSection';
import { EpoxyTypes } from './EpoxyTypes';
import { ApplicationTechniques } from './ApplicationTechniques';
import type { WhyChooseEpoxyPageData } from '@/src/lib/api/why-choose-epoxy';

interface WhyChooseEpoxyProps {
  data: WhyChooseEpoxyPageData;
  locale: string;
}

export function WhyChooseEpoxy({ data, locale }: WhyChooseEpoxyProps) {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      {/* Hero Section */}
      <Container maxWidth="xl">
        <Box data-aos="fade-up">
          <AboutHero
            heading={data.hero.heading}
            title={data.hero.title}
            breadcrumbs={data.hero.breadcrumbs}
            image={data.hero.image}
            locale={locale}
          />
        </Box>
      </Container>

      {/* Intro Paragraphs */}
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            color: 'text.secondary',
            lineHeight: 1.8,
            mb: 2,
            textAlign: 'justify',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {data.intro.paragraph1}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            color: 'text.secondary',
            lineHeight: 1.8,
            mb: 8,
            textAlign: 'justify',
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {data.intro.paragraph2}
        </Typography>
      </Container>

      {/* Feature Sections */}
      {data.features.map((feature) => (
        <FeatureSection key={feature.title} feature={feature} />
      ))}

      {/* Additional Feature Sections */}
      {data.additionalFeatures.map((feature) => (
        <FeatureSection key={feature.title} feature={feature} />
      ))}

      {/* Epoxy Types Section */}
      <EpoxyTypes
        heading={data.epoxyTypes.heading}
        types={data.epoxyTypes.types}
      />

      {/* Application Techniques Section */}
      <ApplicationTechniques
        heading={data.applicationTechniques.heading}
        description={data.applicationTechniques.description}
        items={data.applicationTechniques.items}
        image={data.applicationTechniques.image}
      />
    </Box>
  );
}

