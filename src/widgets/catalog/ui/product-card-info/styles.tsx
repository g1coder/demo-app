import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import {Typography} from '@mui/material';

export const StyledContainer = styled(Card)(({theme: {spacing}}) => ({
    position: 'relative',
    margin: 'auto',
    maxWidth: 340,
    width: '100%',
    height: 600,
    borderRadius: 20,
    transition: 'all 0.3s ease',
    padding: spacing(2, 3),
    textAlign: 'center',
    cursor: 'pointer',

    '&:hover': {
        boxShadow: '0 0px 10px rgb(17 44 145 / 40%)',
        transform: 'scaleY(0.99)',
    },
}));

export const StyledSaleMark = styled((props) => (
    <div {...props}>
        <Typography variant="body1" fontWeight={900} sx={{textTransform: 'uppercase', padding: 2}}>
            Sale!
        </Typography>
    </div>
))(({theme: {palette}}) => ({
    clipPath: 'circle(30%)',
    position: 'absolute',
    padding: 16,
    top: 8,
    right: 0,
    backgroundColor: palette.primary.light,
    boxSizing: 'content-box',
}));