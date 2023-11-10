import type { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './sign-in';

const meta: Meta<typeof SignIn> = {
  component: SignIn,
  title: 'Sign In Page',
};
export default meta;
type Story = StoryObj<typeof SignIn>;

export const Primary: Story = {
  args: {}
};
