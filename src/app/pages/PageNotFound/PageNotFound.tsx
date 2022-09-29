import React from 'react';
import {styled} from '@mui/material/styles';
import {Grid, Typography} from '@mui/material';
import BgImage from './404-bg.png';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  margin: 'auto',
}));

const StyledImage = styled('img')({
  width: '100%'
})

interface IProps {
  redirectPath: string;
}

const PageNotFound = ({redirectPath = '/'}: IProps) => (
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
        <PrimaryButton title="Back" size="small" href={redirectPath} />
      </Grid>
    </Grid>
  </StyledContainer>
);

export default PageNotFound;
