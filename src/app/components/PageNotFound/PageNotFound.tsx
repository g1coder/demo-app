import React from 'react';
import {styled} from '@mui/material/styles';
import {Grid, Typography} from '@mui/material';
import CircleButton from 'core/components/Buttons/CircleButton';
import BgImage from './404-bg.png';


const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  margin: 'auto',
}));

interface IProps {
  redirectPath: string;
}

const PageNotFound = ({redirectPath = '/'}: IProps) => (
  <StyledContainer>
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid item>
        <img src={BgImage} />
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
        <CircleButton title="Back" size="small" variant="primary" component="a" href={redirectPath} />
      </Grid>
    </Grid>
  </StyledContainer>
);

export default PageNotFound;
