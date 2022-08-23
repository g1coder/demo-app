import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Card from 'features/catalog/components/ProductCard/ProductCard';
import IBaseProduct from 'features/catalog/models/IBaseProduct';

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
