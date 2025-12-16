'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Switch,
  FormControlLabel,
  Button,
} from '@mui/material';
import type { Locale } from '@/i18n';
import type { CookiesPageApiData } from '@/src/lib/api/cookies';
import { useRouter } from 'next/navigation';

interface CookiesPageClientProps {
  data: CookiesPageApiData;
  locale: Locale;
}

export function CookiesPageClient({ data, locale }: CookiesPageClientProps) {
  const router = useRouter();
  const [cookiePreferences, setCookiePreferences] = useState<Record<string, boolean>>(() => {
    const prefs: Record<string, boolean> = {};
    data.categories.forEach((category) => {
      const key = category.name.toLowerCase().replace(/\s+/g, '_');
      prefs[key] = category.required;
    });
    return prefs;
  });

  const handleToggle = (categoryName: string, required: boolean) => {
    if (required) return;
    const key = categoryName.toLowerCase().replace(/\s+/g, '_');
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleNecessaryOnly = () => {
    const newPrefs: Record<string, boolean> = {};
    data.categories.forEach((category) => {
      const key = category.name.toLowerCase().replace(/\s+/g, '_');
      newPrefs[key] = category.required;
    });
    setCookiePreferences(newPrefs);
    savePreferences(newPrefs);
  };

  const handleAllowSelection = () => {
    savePreferences(cookiePreferences);
  };

  const handleAcceptAll = () => {
    const newPrefs: Record<string, boolean> = {};
    data.categories.forEach((category) => {
      const key = category.name.toLowerCase().replace(/\s+/g, '_');
      newPrefs[key] = true;
    });
    setCookiePreferences(newPrefs);
    savePreferences(newPrefs);
  };

  const savePreferences = (prefs: Record<string, boolean>) => {
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
      localStorage.setItem('cookieConsent', 'true');
    }
    // In a real app, you would also send this to your backend
    router.refresh();
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 4, md: 6 },
        minHeight: '60vh',
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack spacing={4}>
            {/* Header */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'text.secondary',
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                {data.heading}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                {data.description}
              </Typography>
            </Box>

            {/* Cookie Categories with Toggles */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 3, sm: 2 }}
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              {data.categories.map((category, index) => {
                const key = category.name.toLowerCase().replace(/\s+/g, '_');
                const isEnabled = cookiePreferences[key] || false;

                return (
                  <Box
                    key={index}
                    sx={{
                      flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)', md: '1 1 calc(25% - 12px)' },
                      minWidth: { xs: '100%', sm: '200px' },
                    }}
                  >
                    <Stack spacing={1}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={isEnabled}
                            onChange={() => handleToggle(category.name, category.required)}
                            disabled={category.required}
                            sx={{
                              '& .MuiSwitch-switchBase.Mui-disabled': {
                                color: 'primary.main',
                                '& + .MuiSwitch-track': {
                                  backgroundColor: 'primary.main',
                                  opacity: 1,
                                },
                              },
                            }}
                          />
                        }
                        label={
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                            }}
                          >
                            {category.name}
                          </Typography>
                        }
                        sx={{ m: 0 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                          lineHeight: 1.5,
                          pl: 5.5,
                        }}
                      >
                        {category.description}
                      </Typography>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                pt: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Button
                variant="outlined"
                onClick={handleNecessaryOnly}
                sx={{
                  flex: 1,
                  py: 1.5,
                  borderRadius: 2,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: 'primary.dark',
                    bgcolor: 'primary.light',
                    color: 'primary.dark',
                  },
                }}
              >
                {data.buttons.necessaryOnly}
              </Button>
              <Button
                variant="outlined"
                onClick={handleAllowSelection}
                sx={{
                  flex: 1,
                  py: 1.5,
                  borderRadius: 2,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: 'primary.dark',
                    bgcolor: 'primary.light',
                    color: 'primary.dark',
                  },
                }}
              >
                {data.buttons.allowSelection}
              </Button>
              <Button
                variant="outlined"
                onClick={handleAcceptAll}
                sx={{
                  flex: 1,
                  py: 1.5,
                  borderRadius: 2,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: 'primary.dark',
                    bgcolor: 'primary.light',
                    color: 'primary.dark',
                  },
                }}
              >
                {data.buttons.acceptAll}
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
