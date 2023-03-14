import {useReducer} from 'react';
import {useTransition} from '@react-spring/web';
import useScrollTop from 'core/hooks/useScrollTop';
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
  StyledScrollTopButton,
} from './LandingPageMainSectionStyles';
import BottleImage from 'app/pages/LandingPage/LandingPageMainSection/presets/slider-dark-bottle.png';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import {StyledMainLayoutWrapper} from 'app/pages/MainLayout/MainLayout';

import SlideIcon1 from './presets/mountain1.jpg';
import SlideIcon2 from './presets/mountain2.jpg';
import SlideIcon3 from './presets/mountain3.jpg';
import SlideIcon4 from './presets/mountain4.jpg';
import AppRoutes from 'app/router/AppRoutes';
import SecondaryButton from 'core/components/Buttons/SecondaryButton';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';

const icons = [SlideIcon1, SlideIcon2, SlideIcon3, SlideIcon4];

const LandingPageMainSection = () => {
  const [index, setIndex] = useReducer((state) => (state + 1) % icons.length, 1);
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

  const {targetRef, isTargetHidden, onScroll} = useScrollTop();

  return (
    <StyledMainLayoutWrapper ref={targetRef}>
      <StyledSectionContainer>
        <StyledSliderContainer>
          {transitions((style, i) => (
            <StyledSlideImage style={style} bg={icons[i]} />
          ))}
          <StyledBottleImage src={BottleImage} alt="bottle image" />
        </StyledSliderContainer>

        <StyledTextContainer>
          <div>
            <StyledInnerFirstTypography variant="h2">Mineral Water</StyledInnerFirstTypography>
            <StyledInnerSecondTypography variant="h2">FOR EVERY DAY</StyledInnerSecondTypography>
            <StyledInnerSubtitleTypography variant="body1">
              <em>Our delivery service employs more than 100 professional couriers.</em>
              <br />
              <em>We will deliver water to your home.</em>
            </StyledInnerSubtitleTypography>

            <StyledInnerButtonContainer>
              <SecondaryButton title="Read more" />
              <PrimaryButton title="Make order" href={AppRoutes.CATALOG.url} />
            </StyledInnerButtonContainer>
          </div>
        </StyledTextContainer>
      </StyledSectionContainer>
      <StyledScrollTopButton isVisible={isTargetHidden} onClick={onScroll}>
        <ArrowUpwardOutlinedIcon />
      </StyledScrollTopButton>
    </StyledMainLayoutWrapper>
  );
};

export default LandingPageMainSection;
