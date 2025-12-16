'use client';

import { useState } from 'react';
import { Box, Tabs, Tab, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import type { ServicesData } from '@/src/types/api';

interface ServicesClientProps {
  data: ServicesData;
}

export function ServicesClient({ data }: ServicesClientProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const currentServices = data.services[data.tabs[activeTab]] || [];

  return (
    <>
      {/* Tabs */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            '& .MuiTabs-indicator': {
              bgcolor: '#64B5F6',
              height: 3,
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'text.secondary',
              minWidth: { xs: 120, md: 180 },
              '&.Mui-selected': {
                color: '#64B5F6',
              },
            },
          }}
        >
          {data.tabs.map((tab) => (
            <Tab key={tab} label={tab} />
          ))}
        </Tabs>
      </Box>

      {/* Service Cards Grid - 2x2 Layout */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 3,
        }}
      >
        {currentServices.map((service, index) => (
          <Card
            key={service.id}
            elevation={0}
            sx={{
              height: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              border: 'none',
              position: 'relative',
              minHeight: { xs: 250, md: 300 },
              '&:hover': {
                transition: 'all 0.3s ease',
              },
            }}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <CardMedia
              sx={{
                height: { xs: 250, md: 300 },
                minHeight: { xs: 250, md: 300 },
                position: 'relative',
                bgcolor: 'grey.300',
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              {/* Semi-transparent dark overlay at bottom */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
                }}
              />
            </CardMedia>
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                color: 'white',
                p: 3,
                zIndex: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontWeight: 600,
                  mb: 1,
                  color: 'white',
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.8rem', md: '0.875rem' },
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                }}
              >
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

