import styled from '@emotion/styled';

const BaseButton = styled.button`
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

export default BaseButton;
