import React from 'react';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';
import {styled} from '@mui/material/styles';

const StyledContainer = styled('section')({
  backgroundColor: 'white',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
});

const ContactsPage = () => {
  return (
    <StyledMainLayoutWrapper>
      <StyledContainer>
        <div style={{flex: '1 1 auto'}}>Z</div>
      </StyledContainer>
    </StyledMainLayoutWrapper>
  );
};

export default ContactsPage;
