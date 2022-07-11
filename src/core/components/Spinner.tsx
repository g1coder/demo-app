import {memo} from 'react';
import {CircularProgress as MuiCircularProgress} from '@mui/material';
import {styled} from '@mui/material/styles';

const StyledContainer = styled('div')(({theme}) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  userSelect: 'none',
  '& p': {
    color: '#aaa',
    padding: theme.spacing(),
    fontSize: 18,
  },
}));

const StyledMuiCircularProgress = styled(MuiCircularProgress)(({theme}) => ({
  color: theme.palette.primary.dark,
}));

interface IProps {
  ready?: boolean;
  children?: React.ReactNode;
}

const Spinner: React.FC<IProps> = (props) => {
  if (!props.ready) {
    return (
      <StyledContainer>
        <StyledMuiCircularProgress />
      </StyledContainer>
    );
  }

  return <div>{props.children}</div>;
};

export default memo(Spinner);
