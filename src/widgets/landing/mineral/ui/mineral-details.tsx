import {ReactElement} from 'react';
import {getMineralDetails} from '../lib';
import {MineralDetailsItem} from './mineral-details-Item';
import {StyledContentColumn, StyledContentContainer} from './styles';

const details = getMineralDetails();

interface IProps {
  children: ReactElement;
  dark?: boolean;
}

export const MineralDetails = ({children, dark}: IProps) => (
  <StyledContentContainer>
    <StyledContentColumn align="left">
      {details.slice(0, 3).map((item) => (
        <MineralDetailsItem {...item} key={item.title} dark={dark} />
      ))}
    </StyledContentColumn>
    {children}
    <StyledContentColumn align="right">
      {details.slice(3, 6).map((item) => (
        <MineralDetailsItem {...item} key={item.title} dark={dark} />
      ))}
    </StyledContentColumn>
  </StyledContentContainer>
);
