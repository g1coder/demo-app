import {Avatar, Typography} from '@mui/material';
import {useMemo} from 'react';
import {LayoutWrapper} from '@widgets/main-layout';
import Swiper from '@shared/ui/Swiper';
import SectionHeader from '../SectionHeader';
import AvatarMock from './avatar1.jpg';
import {
  StyledAvatarContainer,
  StyledButtonContainer,
  StyledLandingPageReviewSection,
  StyledSectionBg,
  StyledSwiperContainer,
  StyledSwiperSlideContent,
  StyledSwiperSlideInnerContainer,
} from './styles';

const reviews = [
  {
    name: 'Steven Hocking',
    position: 'scientist',
    text:
      'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit ' +
      'tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. ' +
      'Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
  {
    name: 'Ivan Ivanov',
    position: 'designer',
    text:
      'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit ' +
      'tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. ' +
      'Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
  {
    name: 'Bill Gates',
    position: 'programmer',
    text:
      'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit' +
      ' amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit' +
      ' tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
  {
    name: 'Ilon Mask',
    position: 'blogger',
    text:
      'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit ' +
      'amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit ' +
      'tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
  },
  {
    name: 'Donald Trump',
    position: 'excommunicated',
    text:
      'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit a' +
      'met augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit ' +
      'tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.',
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
      <LayoutWrapper>
        <SectionHeader title="What our clients say" subtitle="Testimonials" />
        <StyledSwiperContainer>
          <Swiper slides={slides} spaceBetween={50} slidesPerView={1} autoplay loop />
        </StyledSwiperContainer>
        <StyledButtonContainer title="View more" size="small" />
      </LayoutWrapper>
    </StyledLandingPageReviewSection>
  );
};

export default LandingPageReviewSection;
