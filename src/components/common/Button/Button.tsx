import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ButtonProps {
	/**
	 * 버튼의 종류를 결정할 수 있습니다.
	 */
	theme?: 'filled' | 'ghost' | 'warning' | 'neutral' | 'borderless';
	/**
	 * 버튼의 크기를 결정할 수 있습니다.
	 */
	size?: 'large' | 'medium' | 'small' | 'tiny';
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
}) => {
	const ThemeButton = themes[theme];
	const buttonSize = sizes[size];

	return (
		<ThemeButton css={buttonSize} disabled={disabled}>
			{children}
		</ThemeButton>
	);
};

const ButtonBase = styled.button`
	border: 0;

	line-height: 165%;
	border-radius: 8px;
	font-weight: 500;
	letter-spacing: -0.05em;

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

/**
 * Styled Component of BUTTON THEMES (EVERY Buttons extends ButtonBase!)
 */
const filled = styled(ButtonBase)`
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

const ghost = styled(ButtonBase)`
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

const warning = styled(ButtonBase)`
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

const neutral = styled(ButtonBase)`
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

const borderless = styled(ButtonBase)`
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

export default Button;
