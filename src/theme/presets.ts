import { PaletteOptions } from '@mui/material/styles';

export interface ColorPreset {
  name: string;
  label: string;
  primary: string;
  secondary: string;
  mode: 'light' | 'dark';
}

export const colorPresets: ColorPreset[] = [
  {
    name: 'blue',
    label: 'Blue',
    primary: '#1976d2',
    secondary: '#dc004e',
    mode: 'light',
  },
  {
    name: 'purple',
    label: 'Purple',
    primary: '#9c27b0',
    secondary: '#e91e63',
    mode: 'light',
  },
  {
    name: 'green',
    label: 'Green',
    primary: '#2e7d32',
    secondary: '#f57c00',
    mode: 'light',
  },
  {
    name: 'orange',
    label: 'Orange',
    primary: '#ed6c02',
    secondary: '#0288d1',
    mode: 'light',
  },
  {
    name: 'red',
    label: 'Red',
    primary: '#d32f2f',
    secondary: '#1976d2',
    mode: 'light',
  },
  {
    name: 'teal',
    label: 'Teal',
    primary: '#00796b',
    secondary: '#ff6f00',
    mode: 'light',
  },
  {
    name: 'indigo',
    label: 'Indigo',
    primary: '#303f9f',
    secondary: '#c2185b',
    mode: 'light',
  },
  {
    name: 'cyan',
    label: 'Cyan',
    primary: '#0097a7',
    secondary: '#ff6f00',
    mode: 'light',
  },
  {
    name: 'dark',
    label: 'Dark',
    primary: '#90caf9',
    secondary: '#f48fb1',
    mode: 'dark',
  },
];

export function getColorPreset(name: string): ColorPreset {
  return colorPresets.find((preset) => preset.name === name) || colorPresets[0];
}

export function getDefaultColorPreset(): ColorPreset {
  return colorPresets[0];
}

