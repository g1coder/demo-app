import {ReactElement} from 'react';
import {getMineralDetails} from '../lib';
import MineralDetailsInfoItem from './MineralDetailsItem';
import {StyledContentColumn, StyledContentContainer} from './styles';

const details = getMineralDetails();

interface IProps {
  children: ReactElement;
  dark?: boolean;
}

const MineralDetails = ({children, dark}: IProps) => (
  <StyledContentContainer>
    <StyledContentColumn align="left">
      {details.slice(0, 3).map((item) => (
        <MineralDetailsInfoItem {...item} key={item.title} dark={dark} />
      ))}
    </StyledContentColumn>
    {children}
    <StyledContentColumn align="right">
      {details.slice(3, 6).map((item) => (
        <MineralDetailsInfoItem {...item} key={item.title} dark={dark} />
      ))}
    </StyledContentColumn>
  </StyledContentContainer>
);

export default MineralDetails;
