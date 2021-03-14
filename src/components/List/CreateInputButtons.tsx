import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks';
import palette from 'lib/palette';

export interface CreateInputButtonProps {}

const CreateInputButtons = (props: CreateInputButtonProps) => {
	const { listUIStore } = useStore();
	const onCreateClick = () => {
		console.log('으아악!');
	};

	const onDefinitionCreateClick = () => {
		listUIStore.setEdit(true);
	};

	const onDefinitionFinishClick = () => {
		listUIStore.setEdit(false);
	};

	return (
		<div css={createInputButtonLayout}>
			{!listUIStore.isEdit && (
				<DefinitionCreateButton onClick={onDefinitionCreateClick}>
					+
				</DefinitionCreateButton>
			)}
			{listUIStore.isEdit && (
				<div
					css={css`
						display: flex;
					`}
				>
					<DefinitionCreateButton onClick={onDefinitionFinishClick}>
						완료
					</DefinitionCreateButton>
					<DefinitionCreateButton onClick={onDefinitionFinishClick}>
						취소
					</DefinitionCreateButton>
				</div>
			)}

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

export default observer(CreateInputButtons);
