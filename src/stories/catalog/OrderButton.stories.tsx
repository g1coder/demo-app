import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from 'features/catalog/components/OrderButton/OrderButton';

export default {
  title: 'catalog/components',
  component: Button,
} as ComponentMeta<typeof Button>;

export const OrderButton: ComponentStory<typeof Button> = (args) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <div style={{display: 'inline-block'}}>
      <Button {...args} value={value} onChange={setValue} />
    </div>
  );
};
