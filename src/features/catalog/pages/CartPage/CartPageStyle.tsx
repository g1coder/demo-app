import {styled} from '@mui/material/styles';
import {alpha, Grid, GridProps, Typography} from '@mui/material';
import React from 'react';
import IBaseProduct from '../../models/IBaseProduct';

export const StyledContainer = styled('section')(() => ({}));

export const StyledSummaryTitle = styled(Typography)(({theme: {palette}}) => ({
  color: palette.primary.dark,
  textTransform: 'uppercase',
}));

// PRODUCT TABLE HEADER
export const StyledProductTitleContainer = styled(Grid)(({theme: {palette}}) => ({
  borderBottom: `1px solid ${alpha(palette.primary.dark, 0.24)}`,
  borderTop: `1px solid ${alpha(palette.primary.dark, 0.24)}`,
}));

export const StyledProductTitle = styled((props: GridProps & {title: string}) => (
  <Grid item {...props} spacing={1}>
    <Typography variant="body1" color="primary.light">
      {props.title}
    </Typography>
  </Grid>
))<{title: string}>(({theme: {spacing}}) => ({
  '& > *': {
    paddingBottom: spacing(2),
    textTransform: 'uppercase',
  },
}));

// PRODUCT ITEM UI

export const StyledProductContainer = styled(Grid)(({theme: {palette}}) => ({
  borderBottom: `1px solid ${alpha(palette.primary.dark, 0.24)}`,
}));

export const StyledProductImage = styled('img')(({theme: {spacing}}) => ({
  padding: spacing(2, 2, 2, 0),
  height: 120,
}));

export const StyledProductItem = styled(
  ({product, count, ...rest}: GridProps & {product: IBaseProduct; count: number}) => (
    <StyledProductTitleContainer {...rest} item container justifyContent="space-between" spacing={2}>
      <Grid item xs={6}>
        <StyledProductImage src={product.image} />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" color="primary.light">
          {product.price}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" color="primary.light">
          {count}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" color="primary.light">
          {product.price * count}
        </Typography>
      </Grid>
    </StyledProductTitleContainer>
  )
)(() => ({}));
