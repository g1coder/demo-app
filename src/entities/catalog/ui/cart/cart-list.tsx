import {Divider, Grid} from '@mui/material';
import Spinner from '@shared/ui/Spinner';
import IBaseProduct from '@entities/catalog/model/IBaseProduct';
import CartListItem from './cart-list-item';
import {StyledHeader} from './styles';
import {memo} from 'react';

interface IProps {
  items: Array<{product: IBaseProduct; count: number}>;
  loading: boolean;
}
const CartList = ({items, loading}: IProps) => {
  return (
    <Grid item xs={12} xl={8} sx={{padding: 2}}>
      <Grid
        item
        container
        justifyContent="space-between"
        spacing={2}
        display={{xs: 'none', md: 'flex'}}
        columns={{md: 12, xl: 12}}
      >
        <StyledHeader title="Product" xs={6} textAlign="left" />
        <StyledHeader title="Price" xs={2} />
        <StyledHeader title="Count" xs={2} />
        <StyledHeader title="Total" xs={2} />
      </Grid>
      <Divider />
      {loading ? (
        <Spinner />
      ) : (
        items.map(({product, count}) => <CartListItem key={product.id} item={product} count={count} />)
      )}
    </Grid>
  );
};
export default memo(CartList);
