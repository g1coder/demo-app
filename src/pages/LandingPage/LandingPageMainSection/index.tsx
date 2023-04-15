import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import {useTransition} from '@react-spring/web';
import {useReducer} from 'react';
import {LayoutWrapper} from '@widgets/main-layout';
import Routes from '@shared/constants/routes.constants';
import useScrollTop from '@shared/lib/hooks/useScrollTop';

import PrimaryButton from '@shared/ui-kit/Button/PrimaryButton';
import SecondaryButton from '@shared/ui-kit/Button/SecondaryButton';
import BottleImage from '../presets/slider-dark-bottle.png';
import SlideIcon1 from './presets/mountain1.jpg';
import SlideIcon2 from './presets/mountain2.jpg';
import SlideIcon3 from './presets/mountain3.jpg';
import SlideIcon4 from './presets/mountain4.jpg';
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
} from './styles';

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
    <LayoutWrapper ref={targetRef}>
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
              <PrimaryButton title="Make order" href={Routes.CATALOG.url} />
            </StyledInnerButtonContainer>
          </div>
        </StyledTextContainer>
      </StyledSectionContainer>
      <StyledScrollTopButton isVisible={isTargetHidden} onClick={onScroll}>
        <ArrowUpwardOutlinedIcon />
      </StyledScrollTopButton>
    </LayoutWrapper>
  );
};

export default LandingPageMainSection;
