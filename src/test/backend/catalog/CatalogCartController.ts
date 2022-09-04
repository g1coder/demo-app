import {rest} from 'msw';
import CartProvider from 'test/backend/catalog/CartProvider';

const handlers = [
  rest.get(`/api/catalog/cart`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(CartProvider.products));
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
