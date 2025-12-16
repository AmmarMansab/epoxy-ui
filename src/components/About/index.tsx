'use client';

import { Box, Container, Typography } from '@mui/material';
import { AboutHero } from './Hero';
import { VisionMission } from './VisionMission';
import { AboutCoreValues } from './CoreValues';
import { AboutExpertise } from './Expertise';
import type { AboutPageData } from '@/src/lib/api/about';

interface AboutProps {
  data: AboutPageData;
  locale: string;
}

export function About({ data, locale }: AboutProps) {
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

      {/* Intro Paragraph */}
      <Container maxWidth="lg">
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
          data-aos-delay="200"
        >
          {data.intro.paragraph}
        </Typography>
      </Container>

      {/* Vision & Mission */}
      <VisionMission
        vision={data.visionMission.vision}
        mission={data.visionMission.mission}
      />

      {/* Core Values */}
      <AboutCoreValues
        heading={data.coreValues.heading}
        title={data.coreValues.title}
        values={data.coreValues.values}
      />

      {/* Expertise */}
      <AboutExpertise
        heading={data.expertise.heading}
        intro={data.expertise.intro}
        image={data.expertise.image}
        cards={data.expertise.cards}
      />
    </Box>
  );
}

