'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import type { Locale } from '@/i18n';
import type { CookiesPageApiData } from '@/src/lib/api/cookies';

interface CookieBannerProps {
  locale: Locale;
  data: CookiesPageApiData;
}

export function CookieBanner({ locale, data }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    if (data) {
      const prefs: Record<string, boolean> = {};
      data.categories.forEach((category) => {
        const key = category.name.toLowerCase().replace(/\s+/g, '_');
        prefs[key] = true;
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
        localStorage.setItem('cookieConsent', 'true');
      }
    }
    setShowBanner(false);
  };

  const handleDecline = () => {
    if (data) {
      const prefs: Record<string, boolean> = {};
      data.categories.forEach((category) => {
        const key = category.name.toLowerCase().replace(/\s+/g, '_');
        prefs[key] = category.required;
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
        localStorage.setItem('cookieConsent', 'true');
      }
    }
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'grey.900',
        color: 'common.white',
        py: 2,
        zIndex: 1300,
        boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 3 }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
        >
          <Typography
            variant="body2"
            sx={{
              flex: 1,
              color: 'common.white',
              lineHeight: 1.6,
              pr: { md: 2 },
            }}
          >
            {data.consentText}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{
              flexShrink: 0,
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Button
              component={Link}
              href={`/${locale}/cookies`}
              variant="outlined"
              sx={{
                borderColor: 'common.white',
                color: 'common.white',
                textTransform: 'none',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 500,
                '&:hover': {
                  borderColor: 'common.white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {data.buttons.manageCookies}
            </Button>
            <Button
              variant="contained"
              onClick={handleAcceptAll}
              sx={{
                bgcolor: 'primary.main',
                color: 'common.white',
                textTransform: 'none',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              {data.buttons.acceptAll}
            </Button>
            <Button
              variant="text"
              onClick={handleDecline}
              sx={{
                color: 'common.white',
                textTransform: 'none',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 500,
                minWidth: 'auto',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {data.buttons.decline}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

