import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ProductCard from '/src/features/catalog/components/ProductCard/ProductCard';

export default {
  title: 'shop/components/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
