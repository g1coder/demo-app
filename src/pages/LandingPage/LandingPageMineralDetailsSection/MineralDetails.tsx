import {ReactElement} from 'react';
import MineralDetailsInfoItem from './MineralDetailsItem';
import {StyledContentColumn, StyledContentContainer} from './styles';

const details = [
  {
    title: 'Calcium+',
    subtitle: '5-12 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Magnesium',
    subtitle: '2-5 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Sodium',
    subtitle: '20-25 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Chlorine',
    subtitle: '~46 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Sourness',
    subtitle: '6,8-7,3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Mineralization',
    subtitle: '90-140 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
];

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
