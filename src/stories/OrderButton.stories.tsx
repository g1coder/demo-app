import {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from 'pages/catalog/components/OrderButton/OrderButton';

export default {
  title: 'catalog/components',
  component: Button,
} as ComponentMeta<typeof Button>;

export const OrderButton: ComponentStory<typeof Button> = (args) => {
  const [value, setValue] = useState<number>(0);

  return (
    <div style={{display: 'inline-block'}}>
      <Button
        {...args}
        value={value}
        add={() => setValue((currentValue) => currentValue + 1)}
        remove={() => setValue((currentValue) => (currentValue === 1 ? 0 : currentValue - 1))}
      />
    </div>
  );
};
