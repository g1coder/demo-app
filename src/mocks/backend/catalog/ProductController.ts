import _ from 'lodash';
import {rest} from 'msw';
import ProductProvider from 'mocks/backend/catalog/ProductProvider';

const handlers = [
  rest.get(`/api/catalog/products`, async (req, res, ctx) => {
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
  rest.get('/api/catalog/products/filters', async (req, res, ctx) => {
    const tags = _.uniqBy(ProductProvider.products, (o) => o.tag)
      .map((p) => p.tag)
      .filter((o) => !!o);
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
];

export default handlers;
