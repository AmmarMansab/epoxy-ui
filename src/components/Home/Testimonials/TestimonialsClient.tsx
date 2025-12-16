'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import {
  Box,
  Card,
  CardContent,
  Rating,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { TestimonialsData } from '@/src/types/api';
import { Avatar } from '@/src/components/Avatar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialsClientProps {
  data: TestimonialsData;
}

export function TestimonialsClient({ data }: TestimonialsClientProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Box 
      sx={{ position: 'relative', maxWidth: 1200, mx: 'auto' }}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="testimonials-swiper"
      >
        {data.testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                border: 'none',
                p: { xs: 3, md: 4 },
                height: '100%',
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 4,
                    textAlign: 'center',
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.text}"
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ mb: 2 }}
                >
                  <Avatar
                    src={testimonial.authorImage}
                    alt={testimonial.author}
                    sx={{
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                      bgcolor: 'grey.300',
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 0.5,
                      }}
                    >
                      {testimonial.author}
                    </Typography>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#FFC107',
                        },
                      }}
                    />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: { xs: -10, md: -60 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'grey.200',
          color: 'text.primary',
          zIndex: 3,
          '&:hover': {
            bgcolor: 'text.primary',
            color: 'background.paper',
          },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: { xs: -10, md: -60 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'grey.200',
          color: 'text.primary',
          zIndex: 3,
          '&:hover': {
            bgcolor: 'text.primary',
            color: 'background.paper',
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          position: relative;
          margin-top: 24px;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e0e0e0;
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #64B5F6;
        }
      `}</style>
    </Box>
  );
}

