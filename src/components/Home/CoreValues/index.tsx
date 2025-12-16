import { Box, Container, Typography, Card, CardContent, Stack } from '@mui/material';
import Image from 'next/image';
import type { CoreValuesData } from '@/src/types/api';

interface CoreValuesProps {
  data: CoreValuesData;
}

export function CoreValues({ data }: CoreValuesProps) {
  return (
    <Box
      sx={{
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
            }}
          >
            {data.heading}
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
            {data.title}
          </Typography>
        </Box>

        <Stack spacing={2} direction="column">
          {data.values.map((value, index) => (
            <Box 
              key={value.id}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 150}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  gap: { xs: 2, md: 4 },
                }}
              >
                {/* Text Content - Left Side (White Box) */}
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: 'grey.100',
                    p: { xs: 3, md: 4 },
                    borderRadius: 2,
                    minHeight: { xs: 'auto', md: 100 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',

                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      fontWeight: 700,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>

                {/* Image - Right Side (Rounded Corners) */}
                <Box
                  sx={{
                    flex: 1,
                    minHeight: { xs: 100, md: 165 },
                    maxHeight: { xs: 300, md: 350 },
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    width: { xs: '100%', md: 'auto' },
                  }}
                >
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

