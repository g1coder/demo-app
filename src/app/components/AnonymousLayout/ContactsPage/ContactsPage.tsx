import React from 'react';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';
import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT} from 'app/constants/constants';
import GeneralOfficeInfo from 'app/components/AnonymousLayout/ContactsPage/GeneralOfficeInfo';
import {Typography} from '@mui/material';

const StyledBackground = styled('section')({
  backgroundColor: 'white',
  position: 'absolute',
  left: 0,
  right: 0,
  top: LANDING_PAGE_HEADER_HEIGHT,
  bottom: 0,
  height: `calc(100% - ${LANDING_PAGE_HEADER_HEIGHT})`,
});

const StyledTitleContainer = styled('section')({
  position: 'relative',
  maxWidth: 600,
  marginTop: 40,
});

const ContactsPage = () => {
  return (
    <StyledMainLayoutWrapper>
      <StyledBackground />
      <GeneralOfficeInfo />

      <StyledTitleContainer>
        <Typography variant="h3" color="primary.dark">
          Sale and delivery points
        </Typography>
        <Typography variant="body2" color="primary.dark" sx={{marginTop: 2}}>
          Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinartellus eget magna
          aliquet ultricies. Praesent gravida hendreritex, nec eleifend semconvallis vitae.
        </Typography>
      </StyledTitleContainer>
    </StyledMainLayoutWrapper>
  );
};

export default ContactsPage;
