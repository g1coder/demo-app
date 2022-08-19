import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import CircleButton from '/src/core/components/Buttons/CircleButton';

export default {
  title: 'core/components/CircleButton',
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => <CircleButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Read more',
};
