import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {memo} from 'react';
import {Link} from 'react-router-dom';

interface IProps {
  items: Array<{name: string; url: string}>;
}

const StyledNavigationMenu = styled(({items, ...rest}: IProps) => (
  <nav {...rest}>
    {items.map((item) => (
      <ul key={item.name}>
        <li>
          <Typography variant="body1" fontWeight={900} component={Link} to={item.url}>
            {item.name}
          </Typography>
        </li>
      </ul>
    ))}
  </nav>
))(({theme: {palette}}) => ({
  '& > ul': {
    display: 'inline-block',
    listStyleType: 'none',
    cursor: 'pointer',
    '& > li > a': {
      transition: 'color .3s ease',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: palette.primary.light,
      },
    },
  },
}));

const HeaderNavigation = ({items}: IProps) => {
  return <StyledNavigationMenu items={items} />;
};

export default memo(HeaderNavigation);
