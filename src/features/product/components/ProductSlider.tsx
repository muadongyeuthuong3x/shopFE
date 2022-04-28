import { Box } from '@mui/material';
import { productImages } from 'features/home/home';
import { FC, useState } from 'react';
import { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface ProductSliderProps {
  imageList?: string[];
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  direction?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
}

const ProductSlider: FC<ProductSliderProps> = ({
  imageList=[],
  flexDirection = 'row-reverse',
  direction = 'vertical',
  width = 'calc(100% - 107px)',
  height = '645px',
}) => {
  const [activeThumb, setActiveThumb] = useState<any>();

  return (
    <Box display="flex" flexDirection={flexDirection} justifyContent="space-between" height="100%">
      <Box height={height} width={width}>
        <Swiper modules={[Thumbs]} grabCursor={true} thumbs={{ swiper: activeThumb }} loop={true}>
          {imageList?.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt="product-detail"
                style={{ objectFit: 'cover' }}
                height="100%"
                width="100%"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box marginTop={direction === 'horizontal' ? '30px' : 0}>
        <Swiper
          modules={[Thumbs]}
          slidesPerView={3}
          onSwiper={setActiveThumb}
          className="product-detail-slider"
          direction={direction}
          spaceBetween={20}
        >
          {imageList.map((image, index) => (
            <SwiperSlide key={index} className="product-detail-slider-item">
              <img src={image} alt="product-detail-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ProductSlider;
