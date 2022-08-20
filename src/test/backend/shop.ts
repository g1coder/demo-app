import {v4 as uuid} from 'uuid';
import {rest} from 'msw';

const baseUrl = 'api/shop';

interface ProductDTO {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const handlers = [
  rest.get(`${baseUrl}/products`, async (req, res, ctx) => {
    const createProduct = (name, price, image) => ({
      id: uuid(),
      name,
      description: 'Duis et aliquam orci. Vivamus augue quam augue quam augue quam',
      price,
      image: `http://aquaterias.like-themes.com/wp-content/uploads/2017/09/${image}`,
    });

    const products: ProductDTO[] = [
      createProduct('Bottled lemon water', 4.66, '2-300x300.jpg'),
      createProduct('Bottled sparkling water', 12.5, '6-300x300.jpg'),
      createProduct('Drop of water. Mineral', 6.75, '3-300x300.jpg'),
      createProduct('Lemon + Mineral', 6.99, '7-300x300.jpg'),
      createProduct('See Breeze', 5.99, '1-300x300.jpg'),
      createProduct('Three bottles of mineral water', 14, '8-300x300.jpg'),
      createProduct('Water Set', 19.99, '5-300x300.jpg'),
    ];

    return res(
      ctx.status(200),
      ctx.delay(1500),
      ctx.json({
        objects: products,
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
