'use client';

import { Box, Container, Typography, Card } from '@mui/material';

interface CoreValuesProps {
  heading: string;
  title: string;
  values: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export function AboutCoreValues({ heading, title, values }: CoreValuesProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box 
          sx={{ textAlign: 'center', mb: 6 }}
          data-aos="fade-up"
        >
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'text.secondary',
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {values.map((value, index) => (
            <Card
              key={value.id}
              elevation={0}
              sx={{
                height: '100%',
                p: 3,
                borderRadius: 2.5,
                bgcolor: 'background.paper',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                },
              }}
              data-aos="zoom-in"
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
                {value.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.9375rem',
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {value.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

