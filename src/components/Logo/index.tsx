import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/i18n';

interface LogoProps {
  locale: Locale;
  variant?: 'default' | 'footer';
}

export function Logo({ locale, variant = 'default' }: LogoProps) {
  const isFooter = variant === 'footer';
  
  return (
    <Link
      href={`/${locale}`}
      style={{
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: isFooter ? 'common.white' : 'text.primary',
          '&:hover': {
            opacity: 0.8,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: 28, sm: 32 },
            height: { xs: 28, sm: 32 },
            flexShrink: 0,
          }}
        >
          <Image
            src="/logo.svg"
            alt="Epoxy Maestro Logo"
            fill
            style={{
              objectFit: 'contain',
              filter: isFooter ? 'brightness(0) invert(1)' : 'none',
            }}
          />
        </Box>
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.125rem', sm: '1.375rem' },
            color: isFooter ? 'common.white' : 'text.primary',
            letterSpacing: '-0.02em',
          }}
        >
          Epoxy Maestro
        </Typography>
      </Box>
    </Link>
  );
}

