import React from 'react';
import styled, { css } from 'styled-components';

import ThemeButton from './ThemeButton';

export interface ButtonProps {
	theme?: 'filled' | 'ghost' | 'warning' | 'neutral' | 'borderless';
	size: 'large' | 'medium' | 'small' | 'tiny';
	children: React.ReactNode;
}

const large = css`
	font-size: 16px;
	padding: 16px 24px;
	width: 312px;
	height: 58px;
`;

const medium = css`
	font-size: 14px;
	padding: 12px 24px;
	width: 91px;
	height: 47px;
`;

const small = css`
	font-size: 14px;
	padding: 8px 16px;
	width: 82px;
	height: 39px;
`;

const tiny = css`
	width: 61px;
	height: 28px;
	padding: 4px 12px;
`;

const Button: React.FC<ButtonProps> = ({ children, theme, size }) => {
	// TEMP VARIABLES
	return (
		<ThemeButton theme={theme} size={size}>
			{children}
		</ThemeButton>
	);
};

export default Button;
