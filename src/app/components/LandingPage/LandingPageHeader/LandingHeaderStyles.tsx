import {styled} from '@mui/material/styles';
import {Drawer, Fab, Typography} from '@mui/material';
import {
  LANDING_PAGE_HEADER_HEIGHT,
  LANDING_PAGE_HEADER_ORDER,
  LANDING_PAGE_XL_CONTAINER_WIDTH,
} from 'app/constants/constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import {IHeaderItem} from 'app/components/LandingPage/LandingPageHeader/LandingHeader';
import {Link} from 'react-router-dom';
import {DrawerProps} from '@mui/material/Drawer/Drawer';

export const StyledHeader = styled('header')(({theme: {palette, spacing, breakpoints}}) => ({
  height: LANDING_PAGE_HEADER_HEIGHT,
  padding: spacing(2, 2.5),
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  zIndex: LANDING_PAGE_HEADER_ORDER,
  backgroundColor: palette.primary.dark,
  [breakpoints.up('lg' as any)]: {
    position: 'relative',
    margin: 'auto',
    paddingTop: spacing(8),
  },
  [breakpoints.up('exl' as any)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  },
}));

export const StyledLogoContainer = styled('figure')(({theme: {breakpoints}}) => ({
  margin: 0,
  '& > a > img': {
    maxWidth: 200,
  },
  [breakpoints.up('lg')]: {
    '& > a > img': {
      maxWidth: '100%',
    },
  },
}));

export const StyledActionContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledIconContainer = styled('div')(({theme: {breakpoints, palette}}) => ({
  display: 'flex',
  alignItems: 'center',
  transition: 'color 1s ease',
  '& > svg': {
    display: 'block',
    cursor: 'pointer',
    color: '#fff',
    fontSize: 32,
    '&:hover': {
      color: palette.text.primary,
    },
  },
  [breakpoints.up('xl')]: {
    '& > svg': {
      display: 'none',
    },
  },
}));

interface ICountProps {
  count: number;
}

const StyledFabCount = styled(({count, ...rest}: ICountProps) => (
  <div {...rest}>
    <Typography variant="body1" color="primary.dark" fontWeight="bold">
      {count}
    </Typography>
  </div>
))<{count: number}>(({theme}) => ({
  position: 'absolute',
  top: -20,
  right: -10,
  backgroundColor: theme.palette.secondary.main,
  height: 28,
  width: 24,
  clipPath: 'circle(30%)',
  padding: 8,
  boxSizing: 'content-box',
}));

export const StyledCart = styled((props: any) => (
  <Fab aria-label="add" size="medium" {...props}>
    <ShoppingCartIcon />
    <StyledFabCount count={props.count} />
  </Fab>
))<{count: number}>(({theme: {palette}}) => ({
  position: 'relative',
  backgroundColor: palette.primary.light,
  color: '#fff',
  cursor: 'pointer',
  marginRight: 12,
  transition: 'color 1s ease',
  '&:hover': {
    color: palette.text.primary,
    backgroundColor: palette.primary.light,
  },
}));

interface IDrawerProps extends DrawerProps {
  items: IHeaderItem[];
  open: boolean;
  onClose: () => void;
}

const StyledNavigationMenu = styled(({items, ...rest}: Pick<IDrawerProps, 'items'>) => (
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

export const StyledNav = styled(StyledNavigationMenu)(({theme: {breakpoints}}) => ({
  marginRight: 48,
  display: 'none',
  [breakpoints.up('xl')]: {
    display: 'block',
  },
}));

const StyledDrawerNav = styled(({items, onClose, ...rest}: Pick<IDrawerProps, 'items' | 'onClose'>) => (
  <div {...rest}>
    <span>
      <CloseIcon fontSize="large" onClick={onClose} />
    </span>
    <StyledNavigationMenu items={items} />
  </div>
))(({theme: {palette, breakpoints}}) => ({
  height: '100%',
  width: '90vw',
  '& > span': {
    float: 'right',
    padding: 10,
    cursor: 'pointer',
  },
  '& > nav': {
    paddingTop: 32,
    '& > ul': {
      listStyleType: 'none',
      cursor: 'pointer',
      margin: '32px 0',
      display: 'block',
      '& > li > a': {
        transition: 'color .3s ease',
        textDecoration: 'none',
        color: palette.primary.dark,
        '&:hover': {
          textDecoration: 'underline',
          color: palette.primary.light,
        },
      },
    },
  },
  [breakpoints.up('md')]: {
    width: '50vw',
  },
}));

export const StyledDrawer = styled(({items, onClose, ...rest}: IDrawerProps) => (
  <Drawer {...rest}>
    <StyledDrawerNav items={items} onClose={onClose} />
  </Drawer>
))<IDrawerProps>(({theme: {breakpoints}}) => ({
  display: 'block',
  [breakpoints.up('xl')]: {
    display: 'none',
  },
}));
