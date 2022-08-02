import React, {useCallback, useReducer} from 'react';
import {useTransition} from '@react-spring/web';
import {
  StyledInnerFirstTypography,
  StyledLeftInnerContainer,
  StyledInnerSecondTypography,
  StyledSectionBackground,
  StyledSectionBackgroundImage,
  StyledSectionContainer,
  StyledInnerSubtitleTypography,
  StyledInnerButtonContainer,
  StyledBottleImage,
} from './LandingPageMainSectionStyles';
import CircleButton from 'core/components/Buttons/CircleButton';

const slides = [1, 2, 3, 4].map((num) => `${process.env.PUBLIC_URL}/images/landing-page/mountain${num}.jpg`);

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

  return (
    <StyledSectionContainer>
      <StyledSectionBackground>
        {transitions((style, i) => (
          <StyledSectionBackgroundImage style={style} src={slides[i]} />
        ))}
        <StyledBottleImage
          src={`${process.env.PUBLIC_URL}/images/landing-page/slider-dark-bottle.png`}
          alt="bottle image"
        />
      </StyledSectionBackground>
      <StyledLeftInnerContainer>
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
      </StyledLeftInnerContainer>
    </StyledSectionContainer>
  );
};

export default LandingPageMainSection;
