import {rest} from 'msw';
import CartProvider from 'test/backend/catalog/CartProvider';
import ProductProvider from 'test/backend/catalog/ProductProvider';

const handlers = [
  rest.get(`/api/catalog/cart`, (req, res, ctx) => {
    const cartIds = Object.keys(CartProvider.products);
    const productsInCart = ProductProvider.products.filter((p) => cartIds.includes(p.id));
    const totalPrice = productsInCart.reduce(
      (total, current) => total + CartProvider.products[current.id] * current.price,
      0
    );

    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        pairs: CartProvider.products,
        total_count: cartIds.length,
        total_price: totalPrice,
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
    return res(ctx.status(201), ctx.delay(1000), ctx.json(CartProvider.add(productId)));
  }),
  rest.post(`/api/catalog/cart/remove`, (req, res, ctx) => {
    const {productId} = req.body as any;
    return res(ctx.status(201), ctx.delay(1000), ctx.json(CartProvider.remove(productId)));
  }),
  rest.post(`/api/catalog/cart/submit`, (req, res, ctx) => {
    CartProvider.clear();
    return res(ctx.status(201), ctx.delay(1000));
  }),
];

export default handlers;
