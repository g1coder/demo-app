import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';

export const StyledContainer = styled(Grid)({
    position: 'relative',
    zIndex: 2,
});

export const StyledNav = styled('nav')({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
});

export const StyledFormContainer = styled('div')({
    maxWidth: 450,
    width: '100%',
    margin: 'auto',
});

export const StyledLi = styled('li')(({theme: {palette}}) => ({
    display: 'inline-block',
    margin: '0 6px',
    '& > a:hover': {
        backgroundColor: palette.secondary.main,
    },
}));
