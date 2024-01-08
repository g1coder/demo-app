import {ForwardedRef, forwardRef, ReactNode} from 'react';
import {StyledLayoutWrapper} from './styles';

interface IProps {
  children: ReactNode;
}

export const LayoutWrapper = forwardRef((props: IProps, ref: ForwardedRef<HTMLElement>) => {
  return <StyledLayoutWrapper ref={ref}>{props.children}</StyledLayoutWrapper>;
});
