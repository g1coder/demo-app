import {styled} from '@mui/material/styles';
import {ContactInfo} from '@widgets/about';
import {LayoutWrapper} from '@widgets/main-layout';
import {LANDING_PAGE_HEADER_HEIGHT} from '@shared/constants';

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
    <LayoutWrapper>
      <StyledBackground />
      <ContactInfo />
    </LayoutWrapper>
  );
};

export default ContactsPage;
