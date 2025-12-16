'use client';

import { Box, Container, Typography, Card, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

interface VisionMissionProps {
  vision: {
    icon: string;
    title: string;
    description: string;
  };
  mission: {
    icon: string;
    title: string;
    description: string;
  };
}

export function VisionMission({ vision, mission }: VisionMissionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'vision':
        return <VisibilityIcon sx={{ fontSize: 28, color: 'white' }} />;
      case 'mission':
        return <TrackChangesIcon sx={{ fontSize: 28, color: 'white' }} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="xl">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        sx={{ mb: 8 }}
      >
        {/* Vision Card */}
        <Card
          elevation={0}
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 2.5,
            border: '1px solid',
            borderColor: 'grey.200',
            bgcolor: 'background.paper',
          }}
          data-aos="fade-right"
        >
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {getIcon(vision.icon)}
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                {vision.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                {vision.description}
              </Typography>
            </Box>
          </Stack>
        </Card>

        {/* Mission Card */}
        <Card
          elevation={0}
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 2.5,
            border: '1px solid',
            borderColor: 'grey.200',
            bgcolor: 'background.paper',
          }}
          data-aos="fade-left"
        >
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {getIcon(mission.icon)}
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                {mission.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                {mission.description}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}

