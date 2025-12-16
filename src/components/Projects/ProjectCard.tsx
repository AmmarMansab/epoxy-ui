'use client';

import { Box, Card, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import CollectionsIcon from '@mui/icons-material/Collections';
import type { LocalizedProject } from '@/src/lib/api/projects';

interface ProjectCardProps {
  project: LocalizedProject;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const imageCount = project.images.length;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2.5,
        overflow: 'hidden',
        cursor: 'pointer',
        bgcolor: 'background.paper',
        border: 'none',
        transition: 'all 0.2s',
      }}
      onClick={onClick}
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
        <CardMedia
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'grey.300',
            borderRadius: 2.5,
            overflow: 'hidden',
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </CardMedia>
        
        {/* Image Count Badge - Bottom Right */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: 1.5,
            px: 1.5,
            py: 0.75,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            {imageCount}
          </Typography>
          <CollectionsIcon sx={{ fontSize: 16, color: 'white' }} />
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.125rem',
            fontWeight: 700,
            color: 'text.primary',
            mb: 1.5,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.9375rem',
            color: 'text.primary',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Card>
  );
}

