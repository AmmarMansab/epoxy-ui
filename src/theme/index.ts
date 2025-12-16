import { createTheme, ThemeOptions, alpha } from '@mui/material/styles';
import { enUS, arEG } from '@mui/material/locale';
import { ColorPreset, getColorPreset, getDefaultColorPreset } from './presets';

export interface ThemeConfig {
  locale: 'en' | 'ar';
  colorPreset?: string;
}

// Helper function to generate color variations
function generateColorVariations(baseColor: string, isDark: boolean = false) {
  if (isDark) {
    // Dark mode: lighter version for light, same for dark
    return {
      main: baseColor,
      light: alpha(baseColor, 0.7),
      dark: baseColor,
      contrastText: '#fff',
    };
  }
  
  // Light mode: create lighter and darker variations
  // Light: more transparent/brighter version
  // Dark: more opaque/darker version
  return {
    main: baseColor,
    light: alpha(baseColor, 0.5),
    dark: baseColor,
    contrastText: '#fff',
  };
}

export const getTheme = (config: ThemeConfig) => {
  const { locale, colorPreset } = config;
  const isRTL = locale === 'ar';
  
  // Get color preset or use default
  const preset = colorPreset 
    ? getColorPreset(colorPreset) 
    : getDefaultColorPreset();

  const isDark = preset.mode === 'dark';

  const themeOptions: ThemeOptions = {
    direction: isRTL ? 'rtl' : 'ltr',
    palette: {
      mode: preset.mode,
      primary: generateColorVariations(preset.primary, isDark),
      secondary: generateColorVariations(preset.secondary, isDark),
      background: {
        default: isDark ? '#121212' : '#f5f5f5',
        paper: isDark ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: isDark ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
        secondary: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: '#6b6b6b #2b2b2b',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              width: 8,
              height: 8,
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: '#6b6b6b',
              minHeight: 24,
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
              backgroundColor: '#2b2b2b',
            },
          },
        },
      },
    },
  };

  return createTheme(themeOptions, isRTL ? arEG : enUS);
};

export type AppTheme = ReturnType<typeof getTheme>;

