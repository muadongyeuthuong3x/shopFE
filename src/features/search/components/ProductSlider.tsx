import { productImages } from 'features/home/home';
import { FC, useState } from 'react';
import { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface ProductSliderProps {
  imageList?: string[];
}

const ProductSlider: FC<ProductSliderProps> = ({ imageList }) => {
  const [activeThumb, setActiveThumb] = useState<any>();

  return (
    <>
      <Swiper modules={[Thumbs]} loop={true} grabCursor={true} thumbs={{ swiper: activeThumb }}>
        {imageList?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="home-product" width="100%" height="100%" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        slidesPerView={3}
        spaceBetween={10}
        onSwiper={setActiveThumb}
        className="home-product-slider"
      >
        {imageList?.map((image, index) => (
          <SwiperSlide key={index} className="home-product-slider-item">
            <img src={image} alt="home-product-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
