import {StyledMainLayoutWrapper} from 'pages/MainLayout/MainLayout';
import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT} from 'shared/constants';
import GeneralOfficeInfo from 'pages/ContactsPage/GeneralOfficeInfo';

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
