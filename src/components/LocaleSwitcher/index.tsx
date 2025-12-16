'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { locales, type Locale } from '@/i18n';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface LocaleInfo {
  code: Locale;
  name: string;
  flagUrl: string;
}

const localeInfo: Record<Locale, LocaleInfo> = {
  en: {
    code: 'en',
    name: 'English',
    flagUrl: 'https://flagcdn.com/w40/gb.png', // UK flag
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    flagUrl: 'https://flagcdn.com/w40/sa.png', // Saudi Arabia flag
  },
};

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const switchLocale = (newLocale: Locale) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    handleClose();
  };

  const currentLocale = localeInfo[locale];

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
        sx={{
          minWidth: 'auto',
          px: 1.5,
          py: 0.75,
          textTransform: 'none',
          color: 'text.primary',
          bgcolor: 'transparent',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <Box
          component="img"
          src={currentLocale.flagUrl}
          alt={`${currentLocale.name} flag`}
          sx={{
            mr: 1,
            width: 24,
            height: 18,
            objectFit: 'cover',
            borderRadius: '2px',
            display: 'block',
          }}
          role="img"
          aria-label={`${currentLocale.name} flag`}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 180,
            borderRadius: 2,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            '& .MuiMenuItem-root': {
              px: 2,
              py: 1,
              '&:hover': {
                bgcolor: 'action.hover',
              },
            },
          },
        }}
      >
        {locales.map((loc) => {
          const info = localeInfo[loc];
          const isSelected = locale === loc;
          return (
            <MenuItem
              key={loc}
              onClick={() => switchLocale(loc)}
              selected={isSelected}
              sx={{
                bgcolor: isSelected ? 'action.selected' : 'transparent',
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                  '&:hover': {
                    bgcolor: 'action.selected',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Box
                  component="img"
                  src={info.flagUrl}
                  alt={`${info.name} flag`}
                  sx={{
                    width: 24,
                    height: 18,
                    objectFit: 'cover',
                    borderRadius: '2px',
                    display: 'block',
                  }}
                  role="img"
                  aria-label={`${info.name} flag`}
                />
              </ListItemIcon>
              <ListItemText
                primary={info.name}
                primaryTypographyProps={{
                  sx: {
                    fontSize: '0.9375rem',
                    fontWeight: isSelected ? 500 : 400,
                  },
                }}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
