import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

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
