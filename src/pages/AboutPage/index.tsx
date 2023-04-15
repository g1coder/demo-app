import {Typography, Grid} from '@mui/material';
import {styled} from '@mui/material/styles';

import {LayoutWrapper} from '@widgets/main-layout';
import {MineralDetails} from '@entities/mineral';
import ItemIcon1 from '@shared/assets/icon-blue-1.png';
import ItemIcon2 from '@shared/assets/icon-blue-2.png';
import ItemIcon3 from '@shared/assets/icon-blue-3.png';
import ItemIcon4 from '@shared/assets/icon-blue-4.png';
import {LANDING_PAGE_HEADER_HEIGHT,Routes} from '@shared/constants';
import SecondaryButton from '@shared/ui-kit/Button/SecondaryButton';
import SectionHeader from '../LandingPage/SectionHeader';
import AboutPicture from './about-us.jpg';
import GlassPicture from './mineral-glass-square.png';

const itemNames = [
  {name: 'Full Controll', icon: ItemIcon1},
  {name: 'Healthy Composition', icon: ItemIcon2},
  {name: '6 Filtration Stages', icon: ItemIcon3},
  {name: 'Quality certificates', icon: ItemIcon4},
];

const getItemAnimationSettings = (delay: number) => ({
  visibility: 'visible',
  opacity: 1,
  transition: 'all 2s ease 0s',
  animationName: 'glowing',
  animationDuration: `${delay}s`,
  animationIterationCount: 'infinity',
});

export const StyledSectionTextImageItem = styled('div')(({theme: {palette, breakpoints}}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: 'none',
  textAlign: 'center',
  width: '45%',
  margin: '32px 0',
  '& > img': {
    height: 80,
    marginBottom: 16,
  },
  [breakpoints.up('xl')]: {
    width: '25%',
    borderLeft: `1px solid ${palette.secondary.dark}`,
    '&:first-of-type': {
      border: 'none',
    },
  },
}));

const StyledBackground = styled('section')({
  backgroundColor: 'white',
  position: 'absolute',
  left: 0,
  right: 0,
  top: LANDING_PAGE_HEADER_HEIGHT,
  bottom: 0,
  height: `calc(100% - ${LANDING_PAGE_HEADER_HEIGHT})`,
});

const StyledPicture = styled('img')(({theme: {palette, spacing}}) => ({
  height: 'auto',
  maxWidth: '100%',
  borderRadius: spacing(2),
  boxShadow: `20px 20px 0 ${palette.primary.light}`,
}));

const StyledAnimatedGrid = styled(Grid)(({theme: {spacing}}) => ({
  position: 'relative',
  marginTop: spacing(14),
  '@keyframes glowing': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const StyledGlassSection = styled(Grid)(({theme: {spacing}}) => ({
  position: 'relative',
  marginTop: spacing(14),
}));

const StyledGlassPicture = styled('img')(({theme: {breakpoints}}) => ({
  width: '100%',
  maxWidth: 400,
  [breakpoints.up('md')]: {
    maxWidth: 450,
  },
  [breakpoints.up('lg')]: {
    maxWidth: 600,
  },
  [breakpoints.up('lg')]: {
    maxWidth: 750,
  },
}));

const AboutPage = () => {
  return (
    <LayoutWrapper>
      <StyledBackground />

      <Grid container sx={{position: 'relative'}} spacing={3} justifyContent="center">
        <Grid item xs={11} md={10} lg={6}>
          <Typography variant="body1" color="primary.light">
            About us
          </Typography>
          <Typography variant="h3" color="primary.dark">
            About our company
          </Typography>
          <Typography variant="h6" color="primary.light" fontWeight={600} sx={{margin: '24px 0'}}>
            Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet
            vestibulum ultrices mauris malesuada.
          </Typography>
          <Typography variant="body2" color="primary.dark" fontWeight={600} sx={{margin: '32px 0'}}>
            Quisque nisi ligula, tristique at turpis in, placerat posuere neque. Aliquam sed risus nulla. Proin congue
            vestibulum diam, tempor auctor libero lacinia id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elementum sem ligula. Phasellus eleifend vel justo sit amet volutpat. Duis vitae maximus ligula, nec mattis
            libero. Donec eget felis odio.
          </Typography>
          <SecondaryButton title="view products" href={Routes.CATALOG.url} />
        </Grid>
        <Grid item xs={11} md={10} lg={6}>
          <StyledPicture src={AboutPicture} />
        </Grid>
      </Grid>

      <StyledAnimatedGrid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={11} md={10} lg={4}>
          <Typography variant="h5" color="primary.dark" sx={getItemAnimationSettings(1)}>
            Our company was founded in 100 B.C.
          </Typography>
          <Typography variant="body1" color="primary.dark" sx={{marginTop: 2, ...getItemAnimationSettings(1.5)}}>
            Aquatiras is ideal for drinking, cooking, sports and even for children. The product is certified in 12
            countries.
          </Typography>
        </Grid>

        {itemNames.map(({name, icon}, index) => (
          <Grid item xs={11} md={6} lg={2}>
            <StyledSectionTextImageItem key={name} sx={{margin: 'auto', ...getItemAnimationSettings(index + 2.5)}}>
              <img src={icon} alt={name} />
              <Typography variant="body1" color="primary.dark" noWrap>
                {name}
              </Typography>
            </StyledSectionTextImageItem>
          </Grid>
        ))}
      </StyledAnimatedGrid>

      <StyledGlassSection>
        <SectionHeader title="Mineral composition" subtitle="What inside" dark />
        <MineralDetails dark>
          <StyledGlassPicture src={GlassPicture} />
        </MineralDetails>
      </StyledGlassSection>
    </LayoutWrapper>
  );
};

export default AboutPage;
