/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ButtonProps {
	theme?: 'filled' | 'ghost' | 'warning' | 'neutral' | 'borderless';
	size?: 'large' | 'medium' | 'small' | 'tiny';
	children: React.ReactNode;
}

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

const ButtonBase = styled.button`
	border: 0;

	line-height: 165%;
	border-radius: 8px;
	font-weight: 500;
	letter-spacing: -0.05em;
`;

const filled = css`
	background-color: #2784ff;
	color: #fff;

	&:hover {
		background-color: #70aeff;
	}

	&:active {
		background-color: #0066ed;
	}

	&:disabled {
		background-color: #add1ff;
	}
`;

const ghost = css`
	background-color: #fff;
	color: #2784ff;
	border: 1px solid #2784ff;

	&:hover {
		color: #70aeef;
		border: 1px solid #70aeef;
	}

	&:active {
		color: #0066ed;
		border: 1px solid #0066ed;
	}

	&:disabled {
		color: #ebebeb;
		border: 1px solid #ebebeb;
	}
`;

const warning = css`
	background-color: #dd3d2a;
	color: #fff;

	&:hover {
		background-color: #e8786a;
	}

	&:active {
		background-color: #c71500;
	}

	&:disabled {
		background-color: #f1b1aa;
	}
`;

const neutral = css`
	background-color: #fff;
	color: #707070;
	border: 1px solid #f5f5f5;

	&:hover {
		color: #a3a3a3;
	}

	&:active {
		color: #3d3d3d;
	}

	&:disabled {
		color: #e0e0e0;
	}
`;

const borderless = css`
	background-color: #fff;
	color: #a3a3a3;

	&:hover {
		color: #c2c2c2;
	}

	&:active {
		color: #3d3d3d;
	}

	&:disabled {
		color: #e0e0e0;
	}
`;

const themes = {
	filled,
	ghost,
	warning,
	neutral,
	borderless,
};

const sizes = {
	large,
	medium,
	small,
	tiny,
};

const Button: React.FC<ButtonProps> = ({
	children,
	theme = 'filled',
	size = 'medium',
}) => {
	const buttonTheme = themes[theme];
	const buttonSize = sizes[size];

	// TEMP VARIABLES
	return <ButtonBase css={buttonTheme}>{children}</ButtonBase>;
};

export default Button;
