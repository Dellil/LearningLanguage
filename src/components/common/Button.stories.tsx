import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const FilledButton = Template.bind({});

FilledButton.args = {
	children: 'asdf',
	size: 'large',
};

export const GhostButton = Template.bind({});

GhostButton.args = {
	children: "I'm ghost!",
	theme: 'ghost',
};
