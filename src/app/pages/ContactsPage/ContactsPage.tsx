import React from 'react';
import {StyledMainLayoutWrapper} from 'app/pages/MainLayout/MainLayout';
import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT} from 'app/constants/constants';
import GeneralOfficeInfo from 'app/pages/ContactsPage/GeneralOfficeInfo';

const StyledBackground = styled('section')({
  backgroundColor: 'white',
  position: 'absolute',
  left: 0,
  right: 0,
  top: LANDING_PAGE_HEADER_HEIGHT,
  bottom: 0,
  height: `calc(100% - ${LANDING_PAGE_HEADER_HEIGHT})`,
});

const ContactsPage = () => {
  return (
    <StyledMainLayoutWrapper>
      <StyledBackground />
      <GeneralOfficeInfo />
    </StyledMainLayoutWrapper>
  );
};

export default ContactsPage;
