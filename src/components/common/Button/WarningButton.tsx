import React, { useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Size } from './type';

import BaseButton from './BaseButton';

interface Props extends Size {
	children: React.ReactNode;
}

const WarningButton: React.FC<Props> = ({ children, size, ...props }) => {
	const colorWhenSizeBig = css`
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

	const colorWhenSizeSmall = css`
		background-color: #fcecea;
		color: #dd3d2a;

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
	const color = useRef(colorWhenSizeBig);

	if (size === 'small' || size === 'tiny') {
		color.current = colorWhenSizeSmall;
		console.log('크앙아ㅏㄱ');
	} else {
		color.current = colorWhenSizeBig;
	}

	return (
		<Warning css={color.current} {...props}>
			{children}
		</Warning>
	);
};

const Warning = styled(BaseButton)`
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

export default WarningButton;
