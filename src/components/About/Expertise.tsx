'use client';

import { Box, Container, Typography, Card, Stack } from '@mui/material';
import Image from 'next/image';

interface ExpertiseProps {
  heading: string;
  intro: string;
  image: string;
  cards: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export function AboutExpertise({ heading, intro, image, cards }: ExpertiseProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'flex-start',
          }}
        >
          {/* Left Section: Title, Intro, Image */}
          <Box 
            sx={{ flex: { xs: '1', md: '1' }, width: { xs: '100%', md: '50%' } }}
            data-aos="fade-right"
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 700,
                color: 'text.primary',
                mb: 3,
              }}
            >
              {heading}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: 'text.secondary',
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              {intro}
            </Typography>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                paddingTop: '75%',
                borderRadius: 2.5,
                overflow: 'hidden',
              }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src={image}
                alt={heading}
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </Box>
          </Box>

          {/* Right Section: Cards Stacked Vertically */}
          <Box 
            sx={{ flex: { xs: '1', md: '1' }, width: { xs: '100%', md: '50%' } }}
            data-aos="fade-left"
          >
            <Stack spacing={3} sx={{ mt: { xs: 4, md: 0 } }}>
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 2.5,
                    bgcolor: 'primary.light',
                    border: 'none',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 1.5,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.9375rem',
                      color: 'text.primary',
                      lineHeight: 1.6,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Card>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

