import {useCallback} from 'react';
import {useSwiper} from 'swiper/react';
import {Fab} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

interface IProps {
  type: 'prev' | 'next';
}

const BUTTON_SIZE = 80;

const StyledContainer = styled('div')<{direction: IProps['type']}>(({direction}) => ({
  position: 'absolute',
  top: `calc(50% - ${BUTTON_SIZE / 2}px)`,
  right: direction === 'next' ? 0 : undefined,
  left: direction === 'prev' ? 0 : undefined,
}));

const StyledFab = styled(Fab)(({theme: {palette, breakpoints}}) => ({
  backgroundColor: palette.primary.light,
  color: '#fff',
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  '&:hover': {
    backgroundColor: '#fff',
    color: palette.primary.dark,
  },
  display: 'none',
  [breakpoints.up('lg')]: {
    display: 'block'
  }
}));

const SwiperButton = ({type}: IProps) => {
  const swiper = useSwiper();

  const handleNextSlide = useCallback(() => {
    type === 'next' ? swiper.slideNext() : swiper.slidePrev();
  }, [swiper, type]);

  return (
    <StyledContainer direction={type}>
      <StyledFab onClick={handleNextSlide} aria-label={type}>
        {type === 'next' ? <ArrowRightIcon fontSize="large" /> : <ArrowLeftIcon fontSize="large" />}
      </StyledFab>
    </StyledContainer>
  );
};

export default SwiperButton;
