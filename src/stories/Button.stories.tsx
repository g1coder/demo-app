import {ComponentStory, ComponentMeta} from '@storybook/react';
import PrimaryButton from '@shared/ui/Button/PrimaryButton';
import SecondaryButton from '@shared/ui/Button/SecondaryButton';

export default {
  title: 'api/components/CircleButton',
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
