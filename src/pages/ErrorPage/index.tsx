import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import {useRouteError} from 'react-router-dom';
import RouteConstants from '@shared/constants/route.constants';
import PrimaryButton from '@shared/ui/Button/PrimaryButton';

const StyledContainer = styled(Box)(({theme: {palette, spacing, breakpoints}}) => ({
  position: 'relative',
  display: 'flex',
  height: '100vh',
  width: '100%',
  backgroundColor: palette.background.default,
  [breakpoints.up('md')]: {
    padding: spacing(4, 6),
    minWidth: 480,
  },
}));

const StyledInnerContainer = styled('div')({
  margin: 'auto',
  zIndex: 1,
  textAlign: 'center',
});

type ErrorMessage = {message: string | undefined};

const isErrorWithMessage = (error: unknown): error is ErrorMessage =>
  typeof error === 'object' && !!error && 'message' in error;

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Typography variant="h4" color="primary">
          Something went wrong
        </Typography>
        <Typography variant="body2" color="primary">
          {isErrorWithMessage(error) ? error.message : ` `}
        </Typography>
        <PrimaryButton sx={{mt: 2}} href={RouteConstants.LANDING_PAGE.url} title="Back" />
      </StyledInnerContainer>
    </StyledContainer>
  );
};

export default ErrorPage;
