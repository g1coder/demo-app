import {ReactNode} from 'react';
import {styled} from '@mui/material/styles';
import {LANDING_PAGE_XL_CONTAINER_WIDTH} from 'shared/constants';

const StyledWrapper = styled('div')(({theme: {breakpoints, spacing}}) => ({
  padding: spacing(5, 2),
  height: `100%`,
  [breakpoints.up('lg')]: {
    margin: 'auto',
    padding: spacing(5, 4),
  },
  [breakpoints.up('exl' as any)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  },
}));

interface IProps {
  children: ReactNode;
}

const LayoutWrapper = ({children}: IProps) => <StyledWrapper>{children}</StyledWrapper>;

export default LayoutWrapper;
