import _ from 'lodash';
import {rest} from 'msw';
import ProductProvider from 'test/backend/catalog/ProductProvider';
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
        objects: ProductProvider.getByQueryParams({tag, minPrice, maxPrice}),
        $meta: {
          limit: 10,
          offset: 0,
          total_count: ProductProvider.products.length,
        },
      })
    );
  }),

  rest.get('api/catalog/products/filters', async (req, res, ctx) => {
    const tags = _.uniqBy(ProductProvider.products, (o) => o.tag).map((p) => p.tag);
    const min = _.minBy(ProductProvider.products, (p) => p.price)?.price;
    const max = _.maxBy(ProductProvider.products, (p) => p.price)?.price;

    return res(
      ctx.status(200),
      ctx.delay(1500),
      ctx.json({
        tags,
        min,
        max,
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

  rest.post(`api/catalog/cart/submit`, (req, res, ctx) => {
    CartProvider.clear();
    return res(ctx.status(201), ctx.delay(500));
  }),
];

export default handlers;
