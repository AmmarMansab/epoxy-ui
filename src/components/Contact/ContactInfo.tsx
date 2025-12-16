'use client';

import { Box, Typography, Link as MuiLink } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import type { ContactInfo as ContactInfoType } from '@/src/lib/api/contact';

interface ContactInfoProps {
  contactInfo: ContactInfoType[];
  translations: any; // Static translations for labels
  locale: string;
}

export function ContactInfo({ contactInfo, translations, locale }: ContactInfoProps) {
  const labelTranslations = translations.contactInfo;

  // Map API contact info with static translation labels
  const contactInfoWithLabels = contactInfo.map((info) => {
    const label = labelTranslations[info.type]?.label || info.type;
    return {
      ...info,
      label,
    };
  });

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gap: 3,
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 2, md: 3 },
        mb: 6,
      }}
    >
      {contactInfoWithLabels.map((info, index) => (
        <Box
          key={`${info.label}-${index}`}
          sx={{
            bgcolor: 'grey.100',
            borderRadius: 2,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'text.secondary',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {info.label}
          </Typography>
          {info.link ? (
            <MuiLink
              href={info.link}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              >
                {info.value}
              </Typography>
              <ArrowOutward sx={{ fontSize: 18 }} />
            </MuiLink>
          ) : (
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'text.primary',
              }}
            >
              {info.value}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
