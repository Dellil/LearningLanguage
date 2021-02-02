import React from 'react';
import styled from '@emotion/styled';

import BaseButton from './BaseButton';

interface Props {
	children: React.ReactNode;
}

const BorderlessButton: React.FC<Props> = ({ children, ...props }) => {
	return <Borderless {...props}>{children}</Borderless>;
};

const Borderless = styled(BaseButton)`
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

export default BorderlessButton;
