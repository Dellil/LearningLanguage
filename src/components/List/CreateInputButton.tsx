import { css } from '@emotion/react';
import styled from '@emotion/styled';

import palette from 'lib/palette';

export interface CreateInputButtonProps {}

const CreateInputButton = (props: CreateInputButtonProps) => {
	const onCreateClick = () => {
		console.log('TODO');
	};

	return (
		<div css={createInputButtonLayout}>
			<DefinitionCreateButton>+</DefinitionCreateButton>
			<ListCreateButton onClick={onCreateClick}>리스트 생성</ListCreateButton>
		</div>
	);
};

const createInputButtonLayout = css`
	display: flex;
	flex-direction: column;
	& > button {
		margin-top: 8px;
	}
`;

const ListCreateButton = styled.button`
	width: 100%;
	height: 50px;
	color: ${palette.grey[50]};
	border-radius: 6px;
	background-color: ${palette.blue.a400};
`;

const DefinitionCreateButton = styled(ListCreateButton)`
	color: ${palette.blue.a400};
	font-size: 24px;
	border: 1px solid ${palette.blue.a400};
	background-color: ${palette.white};
`;

export default CreateInputButton;
