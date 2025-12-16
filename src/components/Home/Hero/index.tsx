import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import type { HeroData } from '@/src/types/api';

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  const headlineParts = data.headline.split(data.highlightedText);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          {/* Left: Text Content */}
          <Box 
            sx={{ flex: 1, maxWidth: { md: '50%' } }}
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                color: 'text.primary',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {headlineParts[0]}
              <Box
                component="span"
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0.1em',
                    left: 0,
                    right: 0,
                    height: '0.2em',
                    bgcolor: 'primary.light',
                    opacity: 0.3,
                  },
                }}
              >
                {data.highlightedText}
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.6,
                maxWidth: '90%',
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {data.description}
            </Typography>
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
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {data.ctaText}
              </Button>
            </Link>
          </Box>

          {/* Right: Image */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { md: '50%' },
              position: 'relative',
              height: { xs: 300, md: 500, lg: 600 },
              width: '100%',
              minHeight: 300,
              borderRadius: 3,
              overflow: 'hidden',
            }}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Image
              src={data.image}
              alt="Hero epoxy floor"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

