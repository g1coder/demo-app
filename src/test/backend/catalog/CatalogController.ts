import {rest} from 'msw';
import ProductDb from 'test/backend/catalog/ProductProvider';
import CartProvider from 'test/backend/catalog/CartProvider';

const handlers = [
  rest.get(`api/catalog/products`, async (req, res, ctx) => {
    const tag = req.url.searchParams.get('tag');
    const maxPrice = req.url.searchParams.get('max');
    const minPrice = req.url.searchParams.get('min');

    return res(
      ctx.status(200),
      ctx.delay(1500),
      ctx.json({
        objects: ProductDb.getByQueryParams({tag, minPrice, maxPrice}),
        $meta: {
          limit: 10,
          offset: 0,
          total_count: ProductDb.products.length,
        },
      })
    );
  }),

  rest.get(`api/catalog/cart`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(CartProvider.products));
  }),

  rest.post(`api/catalog/cart/add`, (req, res, ctx) => {
    const {productId} = req.body as any;
    return res(ctx.status(201), ctx.delay(1000), ctx.json(CartProvider.add(productId)));
  }),

  rest.post(`api/catalog/cart/remove`, (req, res, ctx) => {
    const {productId} = req.body as any;
    return res(ctx.status(201), ctx.delay(1000), ctx.json(CartProvider.remove(productId)));
  }),
];

export default handlers;
