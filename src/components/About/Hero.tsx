'use client';

import { Box, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

interface HeroProps {
  heading: string;
  title: string;
  breadcrumbs: string[];
  image: string;
  locale: string;
}

export function AboutHero({ heading, title, breadcrumbs, image, locale }: HeroProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 400, md: 500 },
        width: '100%',
        borderRadius: { xs: 0, md: 3 },
        overflow: 'hidden',
        mb: 6,
      }}
    >
      <Image
        src={image}
        alt={title}
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
          variant="overline"
          sx={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'rgba(255, 255, 255, 0.9)',
            mb: 1,
            textTransform: 'uppercase',
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            mb: 2,
          }}
        >
          {title}
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
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
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
  );
}

