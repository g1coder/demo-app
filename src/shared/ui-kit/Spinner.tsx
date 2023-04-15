import {CircularProgress as MuiCircularProgress} from '@mui/material';
import {styled} from '@mui/material/styles';
import {memo, ReactNode, FC} from 'react';

const StyledContainer = styled('div')<{fixed?: boolean}>(({theme, fixed}) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  userSelect: 'none',

  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& p': {
    color: '#aaa',
    padding: theme.spacing(),
    fontSize: 18,
  },

  position: fixed ? 'absolute' : 'relative',
  top: 0,
  left: 0,
  right: 0,
}));

const StyledMuiCircularProgress = styled(MuiCircularProgress)(({theme}) => ({
  color: theme.palette.primary.dark,
}));

interface IProps {
  ready?: boolean;
  fixed?: boolean;
  children?: ReactNode;
}

const Spinner: FC<IProps> = (props) => {
  if (!props.ready) {
    return (
      <StyledContainer fixed={props.fixed}>
        <StyledMuiCircularProgress />
      </StyledContainer>
    );
  }

  return <div>{props.children}</div>;
};

export default memo(Spinner);
