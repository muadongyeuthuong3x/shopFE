import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const sliderImages = [require('assets/image/banner.png'), require('assets/image/banner1.png')];

const Banner: FC = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      loop={true}
      grabCursor={true}
      className="banner-slider"
    >
      {sliderImages.map((image, index) => (
        <SwiperSlide key={index}>
          <Box position="relative">
            <img src={image} alt="" height={700} width="100%" />
            <Box
              sx={{ position: 'absolute', left: '12%', top: '50%', transform: 'translateY(-50%)' }}
            >
              <Typography
                variant="subtitle1"
                component="h3"
                letterSpacing="4px"
                paddingBottom="15px"
              >
                Điểm đến phong cách
              </Typography>
              <Typography
                fontSize="60px"
                fontWeight="600"
                variant="h3"
                letterSpacing="2px"
                paddingBottom="15px"
              >
                Bộ sưu tập giày
              </Typography>
              <Button
                variant="contained"
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.main,
                  letterSpacing: '2px',
                  border: `1px solid ${theme.palette.primary.main}`,
                  padding: '10px 40px',
                  marginTop: '30px',

                  '&:hover': {
                    backgroundColor: theme.palette.primary.contrastText,
                    border: `1px solid ${theme.palette.primary.contrastText}`,
                    color: theme.palette.primary.main,
                  },
                })}
              >
                Shop now
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
