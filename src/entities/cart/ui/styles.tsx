import {Grid, GridProps, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

export const StyledHeader = styled((props: GridProps & {title: string}) => (
  <Grid item textAlign="right" {...props}>
    <Typography variant="h5" color="primary.light">
      {props.title}
    </Typography>
  </Grid>
))<{title: string}>(({theme: {spacing}}) => ({
  '& > *': {
    paddingBottom: spacing(2),
    textTransform: 'uppercase',
  },
}));

export const StyledSubheader = styled(Typography)(({theme: {palette}}) => ({
  color: palette.primary.dark,
  textTransform: 'uppercase',
}));

export const StyledProductImage = styled('img')(({theme: {spacing}}) => ({
  padding: spacing(2, 2, 2, 0),
  height: 120,
}));
