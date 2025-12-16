import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SavingsIcon from '@mui/icons-material/Savings';
import EngineeringIcon from '@mui/icons-material/Engineering';
import type { WhyChooseUsData } from '@/src/types/api';

interface WhyChooseUsProps {
  data: WhyChooseUsData;
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <VerifiedUserIcon sx={{ fontSize: 48, color: '#64B5F6' }} />,
  star: <AutoAwesomeIcon sx={{ fontSize: 48, color: '#64B5F6' }} />,
  hourglass: <SavingsIcon sx={{ fontSize: 48, color: '#64B5F6' }} />,
  expert: <EngineeringIcon sx={{ fontSize: 48, color: '#64B5F6' }} />,
};

export function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            borderRadius: 3,
            p: { xs: 4, md: 6 },
            bgcolor: '#E3F2FD',
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 6 }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
          >
            {/* Left Section: Text Content and Button */}
            <Box 
              sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Typography
                variant="overline"
                sx={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                {data.heading}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                {data.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                {data.description}
              </Typography>

              <Link href={data.ctaLink} style={{ textDecoration: 'none', display: 'inline-block' }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'text.primary',
                    color: 'background.paper',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'text.primary',
                      opacity: 0.9,
                    },
                  }}
                >
                  {data.ctaText}
                </Button>
              </Link>
            </Box>

            {/* Right Section: Benefits Grid - 2x2 */}
            <Box sx={{ flex: 2 }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: { xs: 3, md: 4 },
                }}
              >
                {data.benefits.map((benefit, index) => (
                  <Box 
                    key={benefit.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Stack spacing={2} direction="row" alignItems="flex-start">
                      {/* Icon */}
                      <Box
                        sx={{
                          flexShrink: 0,
                          mt: 0.5,
                        }}
                      >
                        {iconMap[benefit.icon] || <VerifiedUserIcon sx={{ fontSize: 48, color: '#64B5F6' }} />}
                      </Box>

                      {/* Text Content */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            fontWeight: 700,
                            mb: 1,
                            color: 'text.primary',
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: '0.85rem', md: '0.9375rem' },
                            color: 'text.secondary',
                            lineHeight: 1.6,
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

