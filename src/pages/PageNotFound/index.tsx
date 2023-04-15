import {Grid, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import RouteConstants from '@shared/constants/route.constants';
import PrimaryButton from '@shared/ui/Button/PrimaryButton';
import BgImage from './404-bg.png';

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  margin: 'auto',
});

const StyledImage = styled('img')({
  width: '100%',
});

const PageNotFound = () => (
  <StyledContainer>
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid item>
        <StyledImage src={BgImage} alt="bottle picture" />
      </Grid>
      <Grid item>
        <span>
          <Typography variant="h4" component="span" color="primary.dark" sx={{marginRight: 1}}>
            Oops!
          </Typography>
          <Typography variant="h4" component="span" color="primary.light">
            Page not found!
          </Typography>
        </span>
      </Grid>
      <Grid item textAlign="center" marginTop={2}>
        <Typography variant="body1" color="primary.light">
          {`The page you are looking for was moved, removed,`}
          <br />
          {'renamed or might never existed.'}
        </Typography>
      </Grid>
      <Grid item marginTop={4}>
        <PrimaryButton title="Back" size="small" href={RouteConstants.LANDING_PAGE.url} />
      </Grid>
    </Grid>
  </StyledContainer>
);

export default PageNotFound;
