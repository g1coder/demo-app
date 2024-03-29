import {Divider, Grid} from '@mui/material';
import {Spinner} from '@shared/ui-kit';
import {ICartItem} from '../types';
import {CartListItem} from './cart-list-item';
import {StyledHeader} from './styles';

interface IProps {
  items: ICartItem[];
  loading: boolean;
}

export const CartList = ({items, loading}: IProps) => {
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
      {loading ? <Spinner /> : items.map((item) => <CartListItem key={item.id} item={item} />)}
    </Grid>
  );
};
