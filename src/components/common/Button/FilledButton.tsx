import React from 'react';
import styled from '@emotion/styled';

import BaseButton from './BaseButton';

interface Props {
	children: React.ReactNode;
}

const FilledButton: React.FC<Props> = ({ children, ...props }) => {
	return <Filled {...props}>{children}</Filled>;
};

const Filled = styled(BaseButton)`
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

export default FilledButton;
