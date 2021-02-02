import React from 'react';
import { css } from '@emotion/react';

import { Size, Theme } from './type';

import FilledButton from './FilledButton';
import GhostButton from './GhostButton';
import WarningButton from './WarningButton';
import NeutralButton from './NeutralButton';
import BorderlessButton from './BorderlessButton';

export interface ButtonProps extends Size, Theme {
	/**
	 * 아시죠?
	 */
	disabled?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	children,
	theme = 'filled',
	size = 'medium',
	disabled,
	...props
}) => {
	const ThemeButton = themes[theme];
	const buttonSize = sizes[size];

	return (
		<ThemeButton css={buttonSize} {...props} size={size}>
			{children}
		</ThemeButton>
	);
};

/**
 * CSS OF SIZES
 */
const large = css`
	font-size: 16px;
	padding: 16px 24px;
	min-width: 312px;
	height: 58px;
`;

const medium = css`
	font-size: 14px;
	padding: 12px 24px;
	min-width: 91px;
	height: 47px;
`;

const small = css`
	font-size: 14px;
	padding: 8px 16px;
	min-width: 82px;
	height: 39px;
`;

const tiny = css`
	min-width: 61px;
	height: 28px;
	padding: 4px 12px;
`;

const themes = {
	filled: FilledButton,
	ghost: GhostButton,
	warning: WarningButton,
	neutral: NeutralButton,
	borderless: BorderlessButton,
};

const sizes = {
	large,
	medium,
	small,
	tiny,
};

export default Button;
