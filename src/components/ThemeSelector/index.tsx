'use client';

import { useThemeContext } from '@/src/contexts/ThemeContext';
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export function ThemeSelector() {
  const { colorPreset, setColorPreset, availablePresets } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectPreset = (presetName: string) => {
    setColorPreset(presetName);
    handleClose();
  };

  return (
    <>
      <Tooltip title="Change theme color">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'theme-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <PaletteIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="theme-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            minWidth: 200,
            mt: 1.5,
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Choose Theme
          </Typography>
        </Box>
        <Divider />
        {availablePresets.map((preset) => (
          <MenuItem
            key={preset.name}
            onClick={() => handleSelectPreset(preset.name)}
            selected={colorPreset.name === preset.name}
          >
            <ListItemIcon>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: preset.primary,
                  border: 1,
                  borderColor: 'divider',
                }}
              />
            </ListItemIcon>
            <ListItemText>{preset.label}</ListItemText>
            {colorPreset.name === preset.name && (
              <CheckIcon sx={{ ml: 2, fontSize: 20 }} />
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

