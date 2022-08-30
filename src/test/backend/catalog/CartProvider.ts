import ProductDTO from 'test/backend/catalog/models/ProductDTO';

class CartProvider {
  products = {};

  constructor() {
    const cartStr = window.localStorage.getItem('cart');
    if (cartStr) {
      this.products = JSON.parse(cartStr);
    }
  }

  add = (productId: ProductDTO['id']) => {
    const count = this.products[productId];
    this.products[productId] = (count || 0) + 1;
    window.localStorage.setItem('cart', JSON.stringify(this.products));
    return {count: this.products[productId]};
  };

  remove = (productId: ProductDTO['id']) => {
    const count = this.products[productId];
    if (count) {
      this.products[productId] = count - 1;
    }
    window.localStorage.setItem('cart', JSON.stringify(this.products));
    return {count: this.products[productId]};
  };

  clear = () => {
    this.products = {};
    window.localStorage.removeItem('cart');
  };
}

export default new CartProvider();
