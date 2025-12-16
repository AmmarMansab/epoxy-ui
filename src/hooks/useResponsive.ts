'use client';

import { useTheme, useMediaQuery, Breakpoint } from '@mui/material';

/**
 * Hook to check if current screen size matches a breakpoint
 */
export function useResponsive() {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const isUp = (breakpoint: Breakpoint) => useMediaQuery(theme.breakpoints.up(breakpoint));
  const isDown = (breakpoint: Breakpoint) => useMediaQuery(theme.breakpoints.down(breakpoint));
  const isBetween = (start: Breakpoint, end: Breakpoint) =>
    useMediaQuery(theme.breakpoints.between(start, end));

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isMobile,
    isTablet,
    isDesktop,
    isUp,
    isDown,
    isBetween,
  };
}

