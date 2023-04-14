import {uniqBy, minBy, maxBy} from 'lodash';
import {rest} from 'msw';
import ProductProvider from '@processes/mocks/backend/catalog/ProductProvider';

const handlers = [
  rest.get(`/api/v1/catalog/products`, async (req, res, ctx) => {
    const tag = req.url.searchParams.get('tag');
    const maxPrice = req.url.searchParams.get('max');
    const minPrice = req.url.searchParams.get('min');

    return res(
      ctx.set('x-total-count', String(ProductProvider.products.length)),
      ctx.status(200),
      ctx.delay(1500),
      ctx.json(ProductProvider.getByQueryParams({tag, minPrice, maxPrice}))
    );
  }),
  rest.get('/api/v1/catalog/products/filters', async (req, res, ctx) => {
    const tags = uniqBy(ProductProvider.products, (o) => o.tag)
      .map((p) => p.tag)
      .filter((o) => !!o);
    const min = minBy(ProductProvider.products, (p) => p.price)?.price;
    const max = maxBy(ProductProvider.products, (p) => p.price)?.price;

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
  rest.get('/api/v1/catalog/products/favorites', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1500), ctx.json(ProductProvider.getFavorites()));
  }),

  rest.post('/api/v1/catalog/products/favorites/add', async (req, res, ctx) => {
    const {id} = req.body as any;
    return res(ctx.status(201), ctx.delay(300), ctx.json(ProductProvider.toggleFavorites(id, 'add')));
  }),

  rest.post('/api/v1/catalog/products/favorites/remove', async (req, res, ctx) => {
    const {id} = req.body as any;
    return res(ctx.status(201), ctx.delay(300), ctx.json(ProductProvider.toggleFavorites(id, 'remove')));
  }),
];

export default handlers;
