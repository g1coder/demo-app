import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {memo} from 'react';
import HeadingBg from './presets/heading-bg.png';

interface IProps {
  title: string;
  subtitle: string;
  dark?: boolean;
}

const StyledSectionHeader = styled('div')(({theme: {spacing}}) => ({
  margin: 'auto',
  textAlign: 'center',
  backgroundImage: `url(${HeadingBg})`,
  backgroundPosition: '50% 100%',
  backgroundRepeat: 'no-repeat',
  padding: spacing(0, 0, 3),
}));

const SectionHeader = ({title, subtitle, dark}: IProps) => {
  return (
    <StyledSectionHeader>
      <Typography variant="subtitle1" color={dark ? 'primary.light' : '#fff'}>
        {subtitle}
      </Typography>
      <Typography variant="h3" color={dark ? 'primary.dark' : '#fff'}>
        {title}
      </Typography>
    </StyledSectionHeader>
  );
};

export default memo(SectionHeader);
