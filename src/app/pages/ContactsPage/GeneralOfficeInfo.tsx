import {ReactElement, useCallback} from 'react';
import {styled} from '@mui/material/styles';
import {Fab, Grid, Typography} from '@mui/material';
import FeedbackForm from 'app/pages/ContactsPage/FeedbackForm';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

const StyledContainer = styled(Grid)({
  position: 'relative',
  zIndex: 2,
});

const StyledNav = styled('nav')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

const StyledFormContainer = styled('div')({
  maxWidth: 450,
  width: '100%',
  margin: 'auto',
});

const StyledLi = styled('li')(({theme: {palette}}) => ({
  display: 'inline-block',
  margin: '0 6px',
  '& > a:hover': {
    backgroundColor: palette.secondary.main,
  },
}));

const workHours = {
  Monday: '9:00 – 19:00',
  Tuesday: '9:00 – 19:00',
  Wednesday: '9:00 – 19:00',
  Thursday: '9:00 – 19:00',
  Friday: '9:00 – 19:00',
  Saturday: '10:00 – 15:00',
  Sunday: 'CLOSED',
};

const GeneralOfficeInfo = () => {
  const sendFeedback = useCallback(() => {}, []);

  const renderOfficeInfo = (icon, label) => (
    <Grid item container spacing={1} key={label} sx={{flexFlow: 'nowrap'}}>
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography variant="body1" color="primary.dark" noWrap>
          {label}
        </Typography>
      </Grid>
    </Grid>
  );

  const renderIcon = (icon: ReactElement, bgColor: string, href: string = '#') => (
    <StyledLi>
      <Fab sx={{color: '#fff', backgroundColor: bgColor}} component="a" href={href}>
        {icon}
      </Fab>
    </StyledLi>
  );

  const renderOpeningHours = (key: string, value: string) => (
    <Grid key={key} container spacing={1}>
      <Grid item xs={6}>
        <Typography variant="body1" color="primary.dark" component="span">
          <strong>{key}</strong>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1" color="primary.dark" component="span">
          {value}
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <StyledContainer container justifyContent="space-between" columns={{xs: 1, md: 6, xl: 12}} spacing={2}>
      <Grid item xs={1} md={3} xl={4}>
        <Typography variant="h5" color="primary.dark" sx={{marginBottom: 3}}>
          Central Office
        </Typography>
        <Typography variant="body1" color="primary.dark">
          Nam eu mi eget velit vulputate tempor gravida quis massa. In malesuada condimentum ultrices. Sed et mauris a
          purus fermentum elementum. Sed tristique semper enim, et gravida orci iaculis et. Nulla facilisi.
        </Typography>

        <Grid item container xs={12} spacing={1} sx={{marginTop: 4}}>
          <>
            {renderOfficeInfo(<LocalPhoneIcon color="primary" />, '0(800) 890-90-609')}
            {renderOfficeInfo(<InstagramIcon color="primary" />, 'AQUATERIAS')}
            {renderOfficeInfo(<LocationOnIcon color="primary" />, '29 NICOLAS STR, NEW YORK, 987597-50')}
          </>
        </Grid>
        <Grid item xs={12} sx={{marginTop: 4}}>
          <StyledNav>
            {renderIcon(<FacebookOutlinedIcon />, '#4f71a5')}
            {renderIcon(<TwitterIcon />, '#24b7e8')}
            {renderIcon(<YouTubeIcon />, '#c9393a')}
            {renderIcon(<InstagramIcon />, '#444444')}
          </StyledNav>
        </Grid>
      </Grid>

      <Grid item xs={1} md={2} xl={3}>
        <Typography variant="h6" color="primary.dark" fontWeight={900} sx={{marginBottom: 4}}>
          Opening Hours
        </Typography>
        {Object.entries(workHours).map(([key, value]) => renderOpeningHours(key, value))}
      </Grid>

      <Grid item xs={1} md={6} xl={4}>
        <StyledFormContainer>
          <FeedbackForm onSubmit={sendFeedback} />
        </StyledFormContainer>
      </Grid>
    </StyledContainer>
  );
};

export default GeneralOfficeInfo;
