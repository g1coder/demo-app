import {styled} from '@mui/material/styles';
import {Divider, Grid, GridProps, Typography} from '@mui/material';
import React from 'react';
import IBaseProduct from 'features/catalog/models/IBaseProduct';

export const StyledContainer = styled('section')(({theme: {spacing}}) => ({
  padding: spacing(4, 0),
}));

export const StyledSummaryTitle = styled(Typography)(({theme: {palette}}) => ({
  color: palette.primary.dark,
  textTransform: 'uppercase',
}));

// PRODUCT TABLE HEADER
export const StyledProductTitle = styled((props: GridProps & {title: string}) => (
  <Grid item textAlign="right" spacing={1} {...props}>
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

// PRODUCT ITEM UI
export const StyledProductImage = styled('img')(({theme: {spacing}}) => ({
  padding: spacing(2, 2, 2, 0),
  height: 120,
}));

export const StyledProductItem = styled(
  ({product, count, ...rest}: GridProps & {product: IBaseProduct; count: number}) => (
    <>
      <Grid
        {...rest}
        item
        container
        justifyContent="space-between"
        spacing={2}
        columns={{xs: 12, sm: 12, md: 12, xl: 12}}
      >
        <Grid item xs={3} sm={6} container>
          <Grid item xs={3}>
            <StyledProductImage src={product.image} />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{margin: 'auto 0', flexFlow: 'row wrap'}}
            textAlign="left"
            padding={1}
            display={{xs: 'none', md: 'flex'}}
          >
            <Typography variant="h6" color="primary.dark">
              {product.name}
            </Typography>
            <Typography variant="body1" color="primary.light" display={{xs: 'none', xl: 'flex'}}>
              {product.description}
            </Typography>
          </Grid>
        </Grid>

        {[`$${product.price}`, count, `$${(product.price * count).toFixed(2)}`].map((value, index) => (
          <Grid key={`${index}-${value}`} item xs={2} textAlign="right" margin="auto">
            <Typography variant="h6" color="primary.dark">
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Divider />
    </>
  )
)(() => ({}));
