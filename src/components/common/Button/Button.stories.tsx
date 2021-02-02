import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import DesignedButton, { ButtonProps } from './Button';

export default {
	title: 'Button',
	component: DesignedButton,
	argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = args => <DesignedButton {...args} />;

export const Button = Template.bind({});

Button.args = {
	children: "I'M BUTTON!",
	size: 'large',
};

export const WarningButton = Template.bind({});

WarningButton.args = {
	children: "I'M BUTTON!",
	theme: 'warning',
	size: 'small',
};
