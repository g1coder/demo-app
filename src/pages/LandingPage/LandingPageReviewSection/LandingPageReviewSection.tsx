import {useMemo} from 'react';
import Swiper from 'shared/Swiper';
import LandingPageSectionHeader from 'pages/LandingPage/LandingPageSectionHeader';
import {Avatar, Typography} from '@mui/material';
import {
  StyledAvatarContainer,
  StyledButtonContainer,
  StyledLandingPageReviewSection,
  StyledSectionBg,
  StyledSwiperContainer,
  StyledSwiperSlideContent,
  StyledSwiperSlideInnerContainer,
} from './LandingPageReviewSectionStyled';
import AvatarMock from './avatar1.jpg';
import {StyledMainLayoutWrapper} from 'pages/MainLayout/MainLayout';

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
  const slides = useMemo(
    () =>
      reviews.map(({name, position, text}) => (
        <StyledSwiperSlideContent elevation={8} key={name}>
          <StyledSwiperSlideInnerContainer>
            <StyledAvatarContainer>
              <Avatar src={AvatarMock} sx={{width: 100, height: 100}} />
              <div>
                <Typography variant="h5" color="primary.dark" fontWeight={600}>
                  {name}
                </Typography>
                <Typography variant="body2" color="primary.light">
                  {position}
                </Typography>
              </div>
            </StyledAvatarContainer>
            <Typography variant="h5" color="primary.dark" fontWeight={600}>
              {text}
            </Typography>
          </StyledSwiperSlideInnerContainer>
        </StyledSwiperSlideContent>
      )),
    []
  );

  return (
    <StyledLandingPageReviewSection>
      <StyledSectionBg />
      <StyledMainLayoutWrapper>
        <LandingPageSectionHeader title="What our clients say" subtitle="Testimonials" />
        <StyledSwiperContainer>
          <Swiper slides={slides} spaceBetween={50} slidesPerView={1} autoplay loop />
        </StyledSwiperContainer>
        <StyledButtonContainer title="View more" size="small" />
      </StyledMainLayoutWrapper>
    </StyledLandingPageReviewSection>
  );
};

export default LandingPageReviewSection;
