import {ComponentStory, ComponentMeta} from '@storybook/react';
import IBaseProduct from 'shared/model/IBaseProduct';
import {ProductCard as Card} from 'entities/product';

const product: IBaseProduct = {
  name: 'Product 1',
  description: 'product description',
  price: 4.99,
  image: 'http://aquaterias.like-themes.com/wp-content/uploads/2017/09/4-300x300.jpg',
  id: 'uid1',
};

export default {
  title: 'catalog/components/ProductCard',
  component: Card,
} as ComponentMeta<typeof Card>;

export const ProductCard: ComponentStory<typeof Card> = (args) => (
  <div style={{display: 'inline-block'}}>
    <Card {...args} product={product} />
  </div>
);
