'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '@/src/theme';
import { useThemeContext } from '@/src/contexts/ThemeContext';
import { useMemo, useEffect } from 'react';

interface MuiProviderProps {
  children: React.ReactNode;
  locale: 'en' | 'ar';
}

function MuiThemeProviderInner({ children, locale }: MuiProviderProps) {
  const { colorPreset } = useThemeContext();
  
  const theme = useMemo(
    () => getTheme({ locale, colorPreset: colorPreset.name }),
    [locale, colorPreset.name]
  );


  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export function MuiProvider({ children, locale }: MuiProviderProps) {
  return <MuiThemeProviderInner locale={locale}>{children}</MuiThemeProviderInner>;
}

