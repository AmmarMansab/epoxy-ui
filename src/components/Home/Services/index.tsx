import { Box, Container, Typography } from '@mui/material';
import type { ServicesData } from '@/src/types/api';
import { ServicesClient } from './ServicesClient';

interface ServicesProps {
  data: ServicesData;
}

export function Services({ data }: ServicesProps) {
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
              mb: 4,
            }}
          >
            {data.title}
          </Typography>
        </Box>

        <ServicesClient data={data} />
      </Container>
    </Box>
  );
}

