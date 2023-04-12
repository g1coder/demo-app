import {Store} from 'widgets/cart/api/store';

const getCartStoreMock = (initial?: {products?: typeof Store.prototype.products}) => {
  const cartStoreMock = new Store();
  if (initial?.products) {
    cartStoreMock.products = initial.products;
  }
  return cartStoreMock;
};

export default {
  getCartStoreMock,
};
