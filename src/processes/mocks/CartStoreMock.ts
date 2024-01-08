// eslint-disable-next-line
import {CartStore} from '@entities/cart/model/cart-store';

const getCartStoreMock = (initial?: {products?: typeof CartStore.prototype.products}) => {
  const cartStoreMock = new CartStore();
  if (initial?.products) {
    cartStoreMock.products = initial.products;
  }
  return cartStoreMock;
};

export default {
  getCartStoreMock,
};
