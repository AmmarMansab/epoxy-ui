'use client';

import { Box, Container, Typography, Card } from '@mui/material';
import type { EpoxyType } from '@/src/lib/api/why-choose-epoxy';

interface EpoxyTypesProps {
  heading: string;
  types: EpoxyType[];
}

export function EpoxyTypes({ heading, types }: EpoxyTypesProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 2, md: 3 },
        m: { xs: 2, md: 3 },
        borderRadius: 3,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 6,
            textAlign: 'center',
          }}
          data-aos="fade-up"
        >
          {heading}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 3,
          }}
        >
          {types.map((type, index) => (
            <Card
              key={type.id}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2.5,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'grey.200',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
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
                {type.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.9375rem',
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {type.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

