import React from 'react';
import styled from '@emotion/styled';

import BaseButton from './BaseButton';

interface Props {
	children: React.ReactNode;
}

const GhostButton: React.FC<Props> = ({ children, ...props }) => {
	return <Ghost {...props}>{children}</Ghost>;
};

const Ghost = styled(BaseButton)`
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

export default GhostButton;
