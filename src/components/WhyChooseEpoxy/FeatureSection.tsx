'use client';

import { Box, Container, Typography, Card, Stack } from '@mui/material';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { FeatureSection as FeatureSectionType } from '@/src/lib/api/why-choose-epoxy';

interface FeatureSectionProps {
  feature: FeatureSectionType;
}

export function FeatureSection({ feature }: FeatureSectionProps) {
  const isBlueBg = feature.bgColor === 'blue';
  const isImageLeft = feature.imagePosition === 'left';

  return (
    <Box
      sx={{
        bgcolor: isBlueBg ? '#E3F2FD' : 'background.paper',
        py: { xs: 6, md: 10 },
        m: { xs: 2, md: 3 },
        borderRadius: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: isImageLeft ? 'row' : 'row-reverse' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: { xs: '1', md: '1' },
              width: { xs: '100%', md: '50%' },
              order: { xs: 1, md: isImageLeft ? 1 : 2 },
            }}
            data-aos={isImageLeft ? "fade-right" : "fade-left"}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                paddingTop: '75%',
                borderRadius: 2.5,
                overflow: 'hidden',
              }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </Box>
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              flex: { xs: '1', md: '1' },
              width: { xs: '100%', md: '50%' },
              order: { xs: 2, md: isImageLeft ? 2 : 1 },
            }}
            data-aos={isImageLeft ? "fade-left" : "fade-right"}
            data-aos-delay="200"
          >
            <Card
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2.5,
                bgcolor: 'transparent',
                border: 'none',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                {feature.title}
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
                {feature.description}
              </Typography>
              <Stack spacing={2}>
                {feature.items.map((item, index) => (
                  <Box
                    key={item}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 50}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 24,
                        color: '#E3F2FX',
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.9375rem',
                        color: 'text.primary',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

