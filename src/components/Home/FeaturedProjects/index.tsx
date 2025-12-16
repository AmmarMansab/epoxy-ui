import { Box, Container, Typography, Card, CardMedia } from '@mui/material';
import Image from 'next/image';
import type { FeaturedProjectsData } from '@/src/types/api';

interface FeaturedProjectsProps {
  data: FeaturedProjectsData;
}

export function FeaturedProjects({ data }: FeaturedProjectsProps) {
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
              mb: 3,
            }}
          >
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              color: 'text.secondary',
              maxWidth: '80%',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {data.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            width: '100%',
            // Mobile: Horizontal scrollable slider
            overflowX: { xs: 'auto', md: 'visible' },
            overflowY: 'hidden',
            pb: { xs: 2, md: 0 },
            scrollbarWidth: { xs: 'none', md: 'auto' },
            '&::-webkit-scrollbar': {
              display: { xs: 'none', md: 'block' },
            },
            '& > *': {
              flexShrink: { xs: 0, md: 1 },
            },
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {data.projects.map((project, index) => (
            <Card
              key={project.id}
              elevation={0}
              sx={{
                // Mobile: Fixed width for slider
                width: { xs: 280, md: 'auto' },
                // Desktop: Flex layout
                flex: { xs: 'none', md: 1 },
                minWidth: { xs: 280, md: 0 },
                height: { xs: 300, md: 400 },
                borderRadius: 3,
                overflow: 'hidden',
                border: 'none',
                cursor: 'pointer',
                transition: { xs: 'box-shadow 0.3s ease-in-out', md: 'flex 0.3s ease-in-out, box-shadow 0.3s ease-in-out' },
                '&:hover': {
                  flex: { xs: 'none', md: 2 },
                  zIndex: 1,
                },
              }}
            >
              <CardMedia
                sx={{
                  height: '100%',
                  position: 'relative',
                  bgcolor: 'grey.300',
                }}
              >
                <Image
                  src={project.images[index]}
                  alt={project.description ?? ''}
                  fill
                  sizes="(max-width: 600px) 280px, 20vw"
                  style={{ objectFit: 'cover' }}
                />
              </CardMedia>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

