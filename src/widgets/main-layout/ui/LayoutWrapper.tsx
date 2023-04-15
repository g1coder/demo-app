import {ForwardedRef, forwardRef, ReactNode} from 'react';
import {styled} from '@mui/material/styles';
import { Box, Breakpoint } from "@mui/material";
import {LANDING_PAGE_XL_CONTAINER_WIDTH} from '@shared/constants';

const StyledLayoutWrapper = styled(Box)(({theme: {breakpoints, spacing}}) => ({
  padding: spacing(5, 2),
  height: `100%`,
  [breakpoints.up('lg')]: {
    margin: 'auto',
    padding: spacing(5, 4),
  },
  [breakpoints.up('exl' as Breakpoint)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  },
}));

interface IProps {
  children: ReactNode;
}

const LayoutWrapper = forwardRef((props: IProps, ref: ForwardedRef<HTMLElement>) => {
  return <StyledLayoutWrapper ref={ref}>{props.children}</StyledLayoutWrapper>;
});

export default LayoutWrapper;
