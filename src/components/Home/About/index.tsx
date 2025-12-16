import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import type { AboutData } from '@/src/types/api';

interface AboutProps {
  data: AboutData;
}

export function About({ data }: AboutProps) {
  return (
    <Box
      sx={{
        bgcolor: '#E3F2FD',
        py: { xs: 6, md: 15 },
        m: { xs: 2, md: 3 },
        borderRadius: 3,
      }}
    >
      <Container maxWidth="xl">
        {/* Headings at the top */}
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
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

        {/* Mobile: Stacked vertically, Desktop: Side by side */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 6 }}
          alignItems={{ xs: 'stretch', md: 'center' }}
        >

          {/* Images Container */}
          <Box
            sx={{
              flex: { xs: '0 0 auto', md: 1 },
              position: 'relative',
              height: { xs: 300, md: 500 },
              width: '100%',
              maxWidth: { xs: '100%', md: '50%' },
            }}
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Background Image (Left - Warehouse/Finished Floor) */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: { xs: '80%', md: '75%' },
                height: '100%',
                minHeight: 300,
                borderRadius: 3,
                overflow: 'hidden',
                zIndex: 1,
              }}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Image
                src={data.image1}
                alt="About warehouse"
                fill
                sizes="(max-width: 768px) 80vw, 37.5vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
            {/* Foreground Image (Right - Application Process) */}
            <Box
              sx={{
                position: 'absolute',
                right: { xs: '2%', md: '-3%' },
                bottom: { xs: '-15%', md: '-20%' },
                width: { xs: '70%', md: '6s5%' },
                minHeight: 300,
                height: '100%',
                borderRadius: 3,
                overflow: 'hidden',
                zIndex: 2,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              }}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Image
                src={data.image2}
                alt="About application"
                fill
                // sizes="(max-width: 768px) 70vw, 32.5vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>

          {/* Text Content */}
          <Box
            sx={{
              flex: { xs: '0 0 auto', md: 1 },
              width: '100%',
              maxWidth: { md: '50%' },
            }}
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: 'text.secondary',
                mb: 2,
                lineHeight: 1.6,
                textAlign: { xs: 'center', md: 'left' },
                mt: { xs: 4, md: 0 },
              }}
            >
              {data.description1}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.6,
                textAlign: { xs: 'center', md: 'left' },
                mt: { xs: 4, md: 0 },
              }}
            >
              {data.description2}
            </Typography>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Link href={data.ctaLink} style={{ textDecoration: 'none', display: 'inline-block' }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'text.primary',
                    color: 'background.paper',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    fontWeight: 400,
                    '&:hover': {
                      bgcolor: 'text.primary',
                      opacity: 0.9,
                    },
                  }}
                >
                  {data.ctaText}
                </Button>
              </Link>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

