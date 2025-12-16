'use client';

import { useState } from 'react';
import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Button } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { ProjectCard } from './ProjectCard';
import { GalleryModal } from './GalleryModal';
import type { ProjectsPageData } from '@/src/lib/api/projects';
import type { Locale } from '@/i18n';

interface ProjectsClientProps {
  data: ProjectsPageData;
  locale: Locale;
}

export function ProjectsClient({ data, locale }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  
  // Initially show 9 projects, then show all when "Show More" is clicked
  const displayedProjects = showMore ? data.projects : data.projects.slice(0, 9);
  const hasMoreProjects = data.projects.length > 9;

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = selectedProject
    ? data.projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 300, md: 400 },
          width: '100%',
          borderRadius: { xs: 0, md: 3 },
          overflow: 'hidden',
          mb: 6,
        }}
        data-aos="zoom-in"
      >
        <Image
          src={data.hero.image}
          alt={data.hero.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: 3,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              mb: 2,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {data.hero.title}
          </Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              '& .MuiBreadcrumbs-ol': {
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
              '& .MuiBreadcrumbs-li': {
                color: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            {data.hero.breadcrumbs.map((crumb, index) => {
              const isLast = index === data.hero.breadcrumbs.length - 1;
              const crumbKey = `${crumb}-${index}`;
              return isLast ? (
                <Typography key={crumbKey} sx={{ color: 'white', fontWeight: 500 }}>
                  {crumb}
                </Typography>
              ) : (
                <MuiLink
                  key={crumbKey}
                  component={NextLink}
                  href={index === 0 ? `/${locale}` : '#'}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {crumb}
                </MuiLink>
              );
            })}
          </Breadcrumbs>
        </Box>
      </Box>

      <Container maxWidth="xl">
        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 3, md: 4 },
            mb: 6,
          }}
        >
          {displayedProjects.map((project, index) => (
            <Box
              key={project.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project.id)}
              />
            </Box>
          ))}
        </Box>

        {/* Show More Button */}
        {hasMoreProjects && !showMore && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Button
              variant="outlined"
              onClick={() => setShowMore(true)}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                borderColor: 'rgba(0, 0, 0, 0.12)',
                color: 'text.primary',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'action.hover',
                },
              }}
            >
              {data.showMoreText}
            </Button>
          </Box>
        )}
      </Container>

      {/* Gallery Modal */}
      {selectedProjectData && (
        <GalleryModal
          project={selectedProjectData}
          open={!!selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

