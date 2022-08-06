import React, {useMemo} from 'react';
import Swiper from 'core/components/Swiper/Swiper';
import LandingPageSectionHeader from 'app/components/AnonymousLayout/LandingPage/LandingPageSectionHeader';
import {Avatar, Typography} from '@mui/material';
import {
  StyledAvatarContainer,
  StyledLandingPageReviewSection,
  StyledSwiperContainer,
  StyledSwiperSlideContent,
  StyledSwiperSlideInnerContainer,
} from './LandingPageReviewSectionStyled';
import CircleButton from 'core/components/Buttons/CircleButton';

const reviews = [
  {
    name: 'Steven Hocking',
    position: 'scientist',
    text: 'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
  {
    name: 'Ivan Ivanov',
    position: 'designer',
    text: 'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
  {
    name: 'Bill Gates',
    position: 'programmer',
    text: 'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
  {
    name: 'Ilon Mask',
    position: 'blogger',
    text: 'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
  {
    name: 'Donald Trump',
    position: 'excommunicated',
    text: 'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
];

const LandingPageReviewSection = () => {
  const slides = useMemo(() => {
    return reviews.map((review) => (
      <StyledSwiperSlideContent elevation={8}>
        <StyledSwiperSlideInnerContainer>
          <StyledAvatarContainer>
            <Avatar src={process.env.PUBLIC_URL + '/images/landing-page/avatar1.jpg'} sx={{width: 100, height: 100}} />
            <div>
              <Typography variant="h5" color="primary.dark" fontWeight={600}>
                {review.name}
              </Typography>
              <Typography variant="body2" color="primary.light">
                {review.position}
              </Typography>
            </div>
          </StyledAvatarContainer>
          <Typography variant="h5" color="primary.dark" fontWeight={600}>
            {review.text}
          </Typography>
        </StyledSwiperSlideInnerContainer>
      </StyledSwiperSlideContent>
    ));
  }, []);

  return (
    <StyledLandingPageReviewSection>
      <LandingPageSectionHeader title="What our clients say" subtitle="Testimonials" />
      <StyledSwiperContainer>
        <Swiper slides={slides} spaceBetween={50} slidesPerView={1} autoplay loop />
      </StyledSwiperContainer>
      <CircleButton title="View more" variant="secondary" sx={{marginBottom: 15}} />
    </StyledLandingPageReviewSection>
  );
};

export default LandingPageReviewSection;
