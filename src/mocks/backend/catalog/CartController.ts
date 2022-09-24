import {rest} from 'msw';
import CartProvider from 'mocks/backend/catalog/CartProvider';
import ProductProvider from 'mocks/backend/catalog/ProductProvider';

const getTotalPrice = () => {
  const productsInCart = ProductProvider.products.filter((p) => Object.keys(CartProvider.products).includes(p.id));
  return productsInCart.reduce((total, current) => total + CartProvider.products[current.id] * current.price, 0);
};

const handlers = [
  rest.get(`/api/catalog/cart`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        pairs: CartProvider.products,
        total_price: getTotalPrice(),
      })
    );
  }),
  rest.get('/api/catalog/cart-details', (req, res, ctx) => {
    const cartIds = Object.keys(CartProvider.products);
    const result = ProductProvider.products
      .filter((p) => cartIds.includes(p.id))
      .map((product) => ({product, count: CartProvider.products[product.id]}));
    return res(ctx.status(200), ctx.delay(500), ctx.json(result));
  }),
  rest.post(`/api/catalog/cart/add`, (req, res, ctx) => {
    const {productId} = req.body as any;
    return res(
      ctx.status(201),
      ctx.delay(1000),
      ctx.json({
        count: CartProvider.add(productId),
        total_price: getTotalPrice(),
      })
    );
  }),
  rest.post(`/api/catalog/cart/remove`, (req, res, ctx) => {
    const {productId} = req.body as any;
    return res(
      ctx.status(201),
      ctx.delay(1000),
      ctx.json({
        count: CartProvider.remove(productId),
        total_price: getTotalPrice(),
      })
    );
  }),
  rest.post(`/api/catalog/cart/submit`, (req, res, ctx) => {
    CartProvider.clear();
    return res(ctx.status(201), ctx.delay(1000));
  }),
];

export default handlers;
