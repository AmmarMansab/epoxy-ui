'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ColorPreset, colorPresets, getColorPreset, getDefaultColorPreset } from '@/src/theme/presets';

interface ThemeContextType {
  colorPreset: ColorPreset;
  setColorPreset: (presetName: string) => void;
  availablePresets: ColorPreset[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'epoxy-ui-theme-preset';

export function ThemeProvider({ 
  children,
  initialPreset,
}: { 
  children: React.ReactNode;
  initialPreset?: string;
}) {
  // Initialize with default preset to avoid hydration mismatch
  // We'll update it in useEffect on client side
  const [colorPreset, setColorPresetState] = useState<ColorPreset>(() => {
    // Always start with default on server and initial render
    if (initialPreset) {
      const preset = getColorPreset(initialPreset);
      if (preset) return preset;
    }
    return getDefaultColorPreset();
  });

  // Update from localStorage only on client side after mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored) {
        const preset = getColorPreset(stored);
        if (preset) {
          setColorPresetState(preset);
        }
      }
    }
  }, []);

  const setColorPreset = useCallback((presetName: string) => {
    const preset = getColorPreset(presetName);
    if (preset) {
      setColorPresetState(preset);
      if (typeof window !== 'undefined') {
        localStorage.setItem(THEME_STORAGE_KEY, presetName);
      }
    }
  }, []);

  // Sync with localStorage changes (for multi-tab support)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY && e.newValue) {
        const preset = getColorPreset(e.newValue);
        if (preset) {
          setColorPresetState(preset);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colorPreset,
        setColorPreset,
        availablePresets: colorPresets,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}

