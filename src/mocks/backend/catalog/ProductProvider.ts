import {v4 as uuid} from 'uuid';
import ProductDTO from 'mocks/backend/catalog/models/ProductDTO';

const createProduct = (name, price, image, tag?, discount?) => ({
  id: uuid(),
  name,
  description: 'Duis et aliquam orci. Vivamus augue quam augue quam augue quam',
  price,
  image: `http://aquaterias.like-themes.com/wp-content/uploads/2017/09/${image}`,
  tag,
  discount,
});

const productsMock: ProductDTO[] = [
  createProduct('Bottled lemon water', 6.99, '2-300x300.jpg', 'lemon', 4.99),
  createProduct('Bottled sparkling water', 12.5, '6-300x300.jpg'),
  createProduct('Drop of water. Mineral', 6.75, '3-300x300.jpg', 'mineral'),
  createProduct('Lemon + Mineral', 4.66, '7-300x300.jpg', 'lemon'),
  createProduct('See Breeze', 5.99, '1-300x300.jpg'),
  createProduct('Three bottles of mineral water', 14, '8-300x300.jpg', 'pack'),
  createProduct('Water Set', 19.99, '5-300x300.jpg', 'pack'),
];

class ProductProvider {
  products: ProductDTO[] = [];

  constructor() {
    const productsStr = window.localStorage.getItem('products');
    if (!productsStr) {
      window.localStorage.setItem('products', JSON.stringify(productsMock));
    } else {
      this.products = JSON.parse(productsStr);
    }
  }

  getByQueryParams = (params: {tag: string | null; maxPrice: string | null; minPrice: string | null}): ProductDTO[] => {
    const {tag, minPrice, maxPrice} = params;
    return this.products.filter((p) => {
      return !((maxPrice && p.price > +maxPrice) || (minPrice && p.price < +minPrice) || (tag && p.tag !== tag));
    });
  };
}

export default new ProductProvider();
