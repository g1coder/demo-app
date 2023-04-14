import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

export const StyledFieldLabel = styled('div')(({theme}) => ({
  marginBottom: theme.spacing(-1.5),
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledForgotPwdLink = styled(Typography)({
  textDecoration: 'underline',
  cursor: 'pointer',
});

export const StyledBtnContainer = styled('div')(({theme}) => ({
  margin: 'auto',
  marginTop: theme.spacing(2),
}));

export const StyledBackButton = styled(Typography)(({theme}) => ({
  marginTop: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));