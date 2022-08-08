import React, {useCallback} from 'react';
import {
  StyledConditions,
  StyledDeliveryFormContainer,
  StyledManWithBottleImage,
  StyledInnerContainer,
  StyledTimeInfo,
  StyledWaterSeparatorImage,
} from './LandingPageDeliverySectionStyles';
import {Typography} from '@mui/material';
import CircleButton from 'core/components/Buttons/CircleButton';
import DeliverySectionForm from './DeliverySectionForm';
import {StyledPaddingSectionContainer} from 'app/components/AnonymousLayout/LandingPage/LandingPageStyles';

const bgSrc = `${process.env.PUBLIC_URL}/images/landing-page/water_separator.jpg`;
const imgSrc = `${process.env.PUBLIC_URL}/images/landing-page/delivery-man.png`;

const LandingPageDeliverySection = () => {
  const handleReadMore = useCallback(() => {}, []);

  return (
    <StyledPaddingSectionContainer>
      <StyledWaterSeparatorImage src={bgSrc} />
      <StyledInnerContainer>
        <StyledManWithBottleImage src={imgSrc} alt="delivery man" />
        <StyledConditions>
          <Typography variant="h3" color="primary.light">
            {`Delivery `}
            <Typography variant="h3" component="span">
              Service
            </Typography>
          </Typography>
          <Typography variant="body1" component="p" sx={{paddingTop: 4}}>
            Our delivery service employs more than 100 professional couriers. We will deliver water to your home for{' '}
            <Typography component="span" color="primary.light">
              1 hour
            </Typography>{' '}
            to anywhere in the city.
          </Typography>
          <StyledTimeInfo />
          <CircleButton title="Read more" onClick={handleReadMore} variant="secondary" />
        </StyledConditions>

        <StyledDeliveryFormContainer>
          <Typography variant="h5" color="primary.light" fontWeight={600}>
            Please, fill delivery form
          </Typography>
          <DeliverySectionForm />
        </StyledDeliveryFormContainer>
      </StyledInnerContainer>
    </StyledPaddingSectionContainer>
  );
};

export default LandingPageDeliverySection;
