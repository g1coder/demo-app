import {ReactElement} from 'react';
import {Autoplay} from 'swiper';
import {Swiper as ReactSwiper, SwiperSlide} from 'swiper/react';
import {SwiperProps} from 'swiper/react/swiper-react';
import SwiperButton from './swiper-button';

import 'swiper/css';
import 'swiper/css/autoplay';

interface IProps extends SwiperProps {
  slides: ReactElement[];
}

// This wrapper was created because:
// 1. swiper does not allow customize prev/next buttons
// 2. swiper does not support autoplay with prev/next buttons

export const Swiper = (props: IProps) => {
  const {slides, ...rest} = props;
  if (rest.autoplay) {
    rest.modules = [...(rest.modules || []), Autoplay];
  }
  return (
    <ReactSwiper {...rest}>
      <SwiperButton type="prev" />
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
      <SwiperButton type="next" />
    </ReactSwiper>
  );
};
