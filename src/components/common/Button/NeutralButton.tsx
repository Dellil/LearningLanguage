import React from 'react';
import styled from '@emotion/styled';

import BaseButton from './BaseButton';

interface Props {
	children: React.ReactNode;
}

const NeutralButton: React.FC<Props> = ({ children, ...props }) => {
	return <Neutral {...props}>{children}</Neutral>;
};

const Neutral = styled(BaseButton)`
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

export default NeutralButton;
