import {Typography} from '@mui/material';
import {LayoutWrapper} from '@widgets/main-layout';
import {SecondaryButton} from '@shared/ui-kit';
import ManImage from './presets/delivery-man.png';
import {DeliveryOrder} from '@features/delivery';
import {
  StyledConditions,
  StyledManWithBottleImage,
  StyledInnerContainer,
  StyledTimeInfo,
  StyledWaterSeparatorImage,
} from './styles';

export const LandingPageDelivery = () => (
  <LayoutWrapper>
    <StyledWaterSeparatorImage />
    <StyledInnerContainer>
      <StyledManWithBottleImage src={ManImage} alt="delivery man" />
      <StyledConditions>
        <Typography variant="h3" color="primary.light">
          {`Delivery `}
          <Typography variant="h3" component="span">
            Service
          </Typography>
        </Typography>
        <Typography variant="body1" sx={{paddingTop: 4}}>
          Our delivery service employs more than 100 professional couriers. We will deliver water to your home for{' '}
          <Typography component="span" color="primary.light">
            1 hour
          </Typography>{' '}
          to anywhere in the city.
        </Typography>
        <StyledTimeInfo />
        <SecondaryButton title="Read more" />
      </StyledConditions>
      <DeliveryOrder />
    </StyledInnerContainer>
  </LayoutWrapper>
);
