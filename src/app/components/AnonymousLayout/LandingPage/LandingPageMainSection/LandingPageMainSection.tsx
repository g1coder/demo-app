import React, {useCallback, useReducer} from 'react';
import {useTransition} from '@react-spring/web';
import {
  StyledInnerFirstTypography,
  StyledInnerSecondTypography,
  StyledSlideImage,
  StyledSectionContainer,
  StyledInnerSubtitleTypography,
  StyledInnerButtonContainer,
  StyledBottleImage,
  StyledSliderContainer,
  StyledTextContainer,
  StyledTextInnerContainer,
  StyledScrollTopButton,
} from './LandingPageMainSectionStyles';
import CircleButton from 'core/components/Buttons/CircleButton';
import {StyledSectionPaddingWrapper} from 'app/components/AnonymousLayout/LandingPage/LandingPageStyles';
import BottleImage from './slider-dark-bottle.png';
import useScrollTop from 'core/hooks/useScrollTop';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const slides = [1, 2, 3, 4].map((index) => `${process.env.PUBLIC_URL}/images/landing-page/mountain${index}.jpg`);

const LandingPageMainSection = () => {
  const [index, setIndex] = useReducer((state) => (state + 1) % slides.length, 1);
  const transitions = useTransition(index, {
    key: index,
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {duration: 4000},
    onRest: (_a, _b, item) => {
      if (index === item) {
        setIndex();
      }
    },
  });

  const handleReadMore = useCallback(() => {}, []);
  const handleMakeOrder = useCallback(() => {}, []);

  const {targetRef, isTargetHidden, onScroll} = useScrollTop();

  return (
    <StyledSectionPaddingWrapper ref={targetRef}>
      <StyledSectionContainer>
        <StyledSliderContainer>
          {transitions((style, i) => (
            <StyledSlideImage style={style} bg={slides[i]} />
          ))}
          <StyledBottleImage src={BottleImage} alt="bottle image" />
        </StyledSliderContainer>

        <StyledTextContainer>
          <StyledTextInnerContainer>
            <StyledInnerFirstTypography variant="h3">Mineral Water</StyledInnerFirstTypography>
            <StyledInnerSecondTypography variant="h3">FOR EVERY DAY</StyledInnerSecondTypography>
            <StyledInnerSubtitleTypography variant="body1">
              <em>Our delivery service employs more than 100 professional couriers.</em>
              <br />
              <em>We will deliver water to your home.</em>
            </StyledInnerSubtitleTypography>

            <StyledInnerButtonContainer>
              <CircleButton title="Read more" onClick={handleReadMore} variant="secondary" />
              <CircleButton title="Make order" onClick={handleMakeOrder} />
            </StyledInnerButtonContainer>
          </StyledTextInnerContainer>
        </StyledTextContainer>
      </StyledSectionContainer>
      <StyledScrollTopButton isVisible={isTargetHidden} onClick={onScroll}>
        <ArrowUpwardOutlinedIcon />
      </StyledScrollTopButton>
    </StyledSectionPaddingWrapper>
  );
};

export default LandingPageMainSection;
