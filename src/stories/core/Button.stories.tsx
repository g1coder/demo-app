import {ComponentStory, ComponentMeta} from '@storybook/react';
import PrimaryButton from 'shared/Button/PrimaryButton';
import SecondaryButton from 'shared/Button/SecondaryButton';

export default {
  title: 'core/components/CircleButton',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const PrimaryTemplate: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;
export const Primary = PrimaryTemplate.bind({});

const SecondaryTemplate: ComponentStory<typeof SecondaryButton> = (args) => <SecondaryButton {...args} />;
export const Secondary = SecondaryTemplate.bind({});

Primary.args = {
  title: 'Read more',
};

Secondary.args = {
  title: 'Read more',
};
