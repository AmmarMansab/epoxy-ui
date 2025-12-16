'use client';

import { useThemeContext } from '@/src/contexts/ThemeContext';
import {
  Box,
  Button,
  ButtonGroup,
  Tooltip,
} from '@mui/material';
import { useState } from 'react';

export function CompactThemeSelector() {
  const { colorPreset, setColorPreset, availablePresets } = useThemeContext();
  const [hoveredPreset, setHoveredPreset] = useState<string | null>(null);

  return (
    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
      {availablePresets.map((preset) => (
        <Tooltip key={preset.name} title={preset.label}>
          <Button
            variant={colorPreset.name === preset.name ? 'contained' : 'outlined'}
            size="small"
            onClick={() => setColorPreset(preset.name)}
            onMouseEnter={() => setHoveredPreset(preset.name)}
            onMouseLeave={() => setHoveredPreset(null)}
            sx={{
              minWidth: 40,
              height: 40,
              p: 0,
              bgcolor: hoveredPreset === preset.name ? preset.primary : undefined,
              borderColor: preset.primary,
              '&:hover': {
                bgcolor: preset.primary,
                borderColor: preset.primary,
              },
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                bgcolor: preset.primary,
                border: colorPreset.name === preset.name ? 2 : 1,
                borderColor: colorPreset.name === preset.name ? 'white' : preset.primary,
              }}
            />
          </Button>
        </Tooltip>
      ))}
    </Box>
  );
}

