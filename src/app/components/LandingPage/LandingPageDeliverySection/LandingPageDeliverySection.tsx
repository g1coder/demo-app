import React, {useCallback} from 'react';
import {
  StyledConditions,
  StyledContactFormContainer,
  StyledManWithBottleImage,
  StyledInnerContainer,
  StyledTimeInfo,
  StyledWaterSeparatorImage,
} from './LandingPageDeliverySectionStyles';
import {Typography} from '@mui/material';
import CircleButton from 'core/components/Buttons/CircleButton';
import DeliverySectionForm from './DeliverySectionForm';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';

import SeparatorImage from './presets/water_separator.jpg';
import ManImage from './presets/delivery-man.png';

const LandingPageDeliverySection = () => {
  const handleReadMore = useCallback(() => {}, []);

  return (
    <StyledMainLayoutWrapper>
      <StyledWaterSeparatorImage src={SeparatorImage} />
      <StyledInnerContainer>
        <StyledManWithBottleImage src={ManImage} alt="delivery man" />
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

        <StyledContactFormContainer>
          <Typography variant="h5" color="primary.light" fontWeight={600}>
            Please, fill delivery form
          </Typography>
          <DeliverySectionForm />
        </StyledContactFormContainer>
      </StyledInnerContainer>
    </StyledMainLayoutWrapper>
  );
};

export default LandingPageDeliverySection;
