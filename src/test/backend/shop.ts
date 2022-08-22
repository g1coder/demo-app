import {v4 as uuid} from 'uuid';
import {rest} from 'msw';

const baseUrl = 'api/shop';

interface ProductDTO {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string;
  tag?: string;
}

const createProduct = (name, price, image, tag?, discount?) => ({
  id: uuid(),
  name,
  description: 'Duis et aliquam orci. Vivamus augue quam augue quam augue quam',
  price,
  image: `http://aquaterias.like-themes.com/wp-content/uploads/2017/09/${image}`,
  tag,
  discount,
});

const products: ProductDTO[] = [
  createProduct('Bottled lemon water', 6.99, '2-300x300.jpg', 'lemon', 4.99),
  createProduct('Bottled sparkling water', 12.5, '6-300x300.jpg'),
  createProduct('Drop of water. Mineral', 6.75, '3-300x300.jpg', 'mineral'),
  createProduct('Lemon + Mineral', 4.66, '7-300x300.jpg', 'lemon'),
  createProduct('See Breeze', 5.99, '1-300x300.jpg'),
  createProduct('Three bottles of mineral water', 14, '8-300x300.jpg', 'pack'),
  createProduct('Water Set', 19.99, '5-300x300.jpg', 'pack'),
];

const handlers = [
  rest.get(`${baseUrl}/products`, async (req, res, ctx) => {
    const tag = req.url.searchParams.get('tag');
    const maxPrice = req.url.searchParams.get('max');
    const minPrice = req.url.searchParams.get('min');

    const result = products.filter((p) => {
      return !((maxPrice && p.price > +maxPrice) || (minPrice && p.price < +minPrice) || (tag && p.tag !== tag));
    });

    return res(
      ctx.status(200),
      ctx.delay(1500),
      ctx.json({
        objects: result,
        $meta: {
          limit: 10,
          offset: 0,
          total_count: products.length,
        },
      })
    );
  }),
];

export default handlers;
