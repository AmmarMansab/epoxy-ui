'use client';

import { useState } from 'react';
import type { getStaticTranslations } from '@/src/lib/static-translations';
import type { ServiceListItem } from '@/src/lib/api/services';
import type { Locale } from '@/i18n';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { Logo } from '@/src/components/Logo';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher';

interface NavigationProps {
  locale: Locale;
  nav: Awaited<ReturnType<typeof getStaticTranslations>>;
  services: ServiceListItem[];
}

export function Navigation({ locale, nav, services }: NavigationProps) {
  const theme = useTheme();
  // Use useMediaQuery for interactive behavior, but rely on CSS for initial render
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const servicesOpen = Boolean(servicesAnchorEl);

  // Group services by category dynamically (supports any number of categories)
  const servicesByCategory = services.reduce((acc, service) => {
    const categorySlug = service.category.slug;
    if (!acc[categorySlug]) {
      acc[categorySlug] = {
        category: service.category,
        services: [],
      };
    }
    acc[categorySlug].services.push(service);
    return acc;
  }, {} as Record<string, { category: ServiceListItem['category']; services: ServiceListItem[] }>);

  // Convert to array and sort by category slug for consistent ordering
  const categoryGroups = Object.values(servicesByCategory).sort((a, b) => 
    a.category.slug.localeCompare(b.category.slug)
  );

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const navLinks = [
    { key: 'services', href: `/${locale}/services`, hasDropdown: true },
    { key: 'projects', href: `/${locale}/projects`, hasDropdown: false },
    { key: 'aboutUs', href: `/${locale}/about`, hasDropdown: false },
    { key: 'whyChooseEpoxy', href: `/${locale}/why-choose-epoxy`, hasDropdown: false },
    { key: 'blog', href: `/${locale}/blogs`, hasDropdown: false },
  ];

  const mobileMenu = (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Logo locale={locale} />
        <IconButton onClick={handleDrawerClose} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1, px: 2, py: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href={`/${locale}`}
            onClick={handleDrawerClose}
            sx={{ py: 1.5 }}
          >
            {nav.home}
          </ListItemButton>
        </ListItem>
        {navLinks.map((link) => {
          if (link.hasDropdown) {
            // Services dropdown - show all services
            return (
              <Box key={link.key}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    href={link.href}
                    onClick={handleDrawerClose}
                    sx={{ py: 1.5 }}
                  >
                    {nav[link.key as keyof typeof nav]}
                  </ListItemButton>
                </ListItem>
                {/* Dynamic Category Groups */}
                {categoryGroups.map((group) => (
                  <Box key={group.category.slug} sx={{ pl: 3, mb: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'text.secondary',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                        mb: 0.5,
                      }}
                    >
                      {group.category.title}
                    </Typography>
                    {group.services.map((service) => (
                      <ListItem key={service.slug} disablePadding>
                        <ListItemButton
                          component={Link}
                          href={`/${locale}${service.link}`}
                          onClick={handleDrawerClose}
                          sx={{ py: 1, pl: 2 }}
                        >
                          {service.title}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </Box>
                ))}
              </Box>
            );
          }
          return (
            <ListItem key={link.key} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={handleDrawerClose}
                sx={{ py: 1.5 }}
              >
                {nav[link.key as keyof typeof nav]}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          variant="outlined"
          fullWidth
          component={Link}
          href={`/${locale}/contact`}
          onClick={handleDrawerClose}
          sx={{
            borderColor: 'text.primary',
            color: 'text.primary',
            '&:hover': {
              borderColor: 'text.primary',
              bgcolor: 'action.hover',
            },
          }}
        >
          {nav.becomeVendor}
        </Button>
        <Button
          variant="contained"
          fullWidth
          component={Link}
          href={`/${locale}/consultation`}
          onClick={handleDrawerClose}
          sx={{
            bgcolor: 'text.primary',
            color: 'background.paper',
            '&:hover': {
              bgcolor: 'text.primary',
              opacity: 0.9,
            },
          }}
        >
          {nav.freeConsultation}
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <LocaleSwitcher />
        </Box>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            py: 0,
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 2, sm: 3 },
          }}
        >
          {/* Logo */}
          <Logo locale={locale} />

          {/* Desktop Navigation - Hidden on mobile via CSS */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' }, 
              gap: { sm: 2, md: 3 }, 
              ml: { sm: 3, md: 4 },
              alignItems: 'center',
            }}
          >
                <Button
                  onClick={handleServicesClick}
                  endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    color: 'text.primary',
                    textTransform: 'none',
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    px: 1,
                    py: 0.5,
                    '&:hover': {
                      bgcolor: 'transparent',
                    },
                  }}
                >
                  {nav.services}
                </Button>
                {navLinks
                  .filter((link) => !link.hasDropdown)
                  .map((link) => (
                    <Button
                      key={link.key}
                      component={Link}
                      href={link.href}
                      sx={{
                        color: 'text.primary',
                        textTransform: 'none',
                        fontSize: '0.9375rem',
                        fontWeight: 400,
                        px: 1,
                        py: 0.5,
                        '&:hover': {
                          bgcolor: 'transparent',
                        },
                      }}
                    >
                      {nav[link.key as keyof typeof nav]}
                    </Button>
                  ))}
          </Box>

          {/* Services Dropdown Menu */}
          <Menu
            anchorEl={servicesAnchorEl}
            open={servicesOpen}
            onClose={handleServicesClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: 2,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    minWidth: 280,
                  },
                }}
              >
                {categoryGroups.map((group, groupIndex) => (
                  <Box key={group.category.slug}>
                    {groupIndex > 0 && <Divider sx={{ my: 0.5 }} />}
                    <Box sx={{ px: 2, py: 1 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: 'text.secondary',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {group.category.title}
                      </Typography>
                    </Box>
                    {group.services.map((service) => (
                      <MenuItem
                        key={service.slug}
                        component={Link}
                        href={`/${locale}${service.link}`}
                        onClick={handleServicesClose}
                        sx={{
                          fontSize: '0.9375rem',
                          py: 1,
                          px: 2,
                        }}
                      >
                        {service.title}
                      </MenuItem>
                    ))}
                  </Box>
                ))}
          </Menu>

          {/* Right side buttons and locale selector - Hidden on mobile via CSS */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center', 
              gap: { sm: 1.5, md: 2 },
            }}
          >
                <LocaleSwitcher />
                <Button
                  variant="outlined"
                  component={Link}
                  href={`/${locale}/contact`}
                  sx={{
                    borderColor: 'text.primary',
                    color: 'text.primary',
                    textTransform: 'none',
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    px: 2,
                    py: 0.75,
                    borderRadius: 2,
                    borderWidth: 1,
                    '&:hover': {
                      borderColor: 'text.primary',
                      borderWidth: 1,
                      bgcolor: 'transparent',
                    },
                  }}
                >
                  {nav.becomeVendor}
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  href={`/${locale}/consultation`}
                  sx={{
                    bgcolor: 'text.primary',
                    color: 'background.paper',
                    textTransform: 'none',
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    px: 2,
                    py: 0.75,
                    borderRadius: 2,
                    '&:hover': {
                      bgcolor: 'text.primary',
                      opacity: 0.9,
                    },
                  }}
                >
                  {nav.freeConsultation}
                </Button>
          </Box>

          {/* Mobile Menu Button - Hidden on desktop via CSS */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'flex', md: 'none' }, 
              justifyContent: 'flex-end' 
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        PaperProps={{
          sx: {
            width: { xs: '85%', sm: 400 },
            bgcolor: 'background.paper',
          },
        }}
      >
        {mobileMenu}
      </Drawer>
    </AppBar>
  );
}
