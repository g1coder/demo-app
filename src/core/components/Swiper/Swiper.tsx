import React, {memo, ReactElement} from 'react';
import {Autoplay} from 'swiper';
import {Swiper as ReactSwiper, SwiperSlide} from 'swiper/react';
import {SwiperProps} from 'swiper/react/swiper-react';
import SwiperButton from 'core/components/Swiper/SwiperButton';
import 'swiper/css';
import 'swiper/css/autoplay';

interface IProps extends SwiperProps {
  slides: ReactElement[];
}

// This wrapper was created because:
// 1. swiper does not allow customize prev/next buttons
// 2. swiper does not support autoplay with prev/next buttons

const Swiper = (props: IProps) => {
  const {slides, ...rest} = props;
  if (rest.autoplay) {
    rest.modules = [...(rest.modules || []), Autoplay];
  }
  return (
    <ReactSwiper {...rest}>
      <SwiperButton type="prev" />
      {slides.map((slide) => (
        <SwiperSlide>{slide}</SwiperSlide>
      ))}
      <SwiperButton type="next" />
    </ReactSwiper>
  );
};

export default memo(Swiper);
