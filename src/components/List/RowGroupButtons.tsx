import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import { useStore } from 'hooks';
import palette from 'lib/palette';

export interface CreateInputButtonProps {}

const CreateInputButtons = (props: CreateInputButtonProps) => {
	const { listStore, listUIStore } = useStore();
	const onCreateClick = () => {
		listUIStore.setEdit(false);
		// TODO => 백엔드 완성되면 데이터 보내기
		console.log(toJS(listStore.getRows));
	};

	const onDefinitionCreateClick = () => {
		listUIStore.setEdit(true);
	};

	const onDefinitionFinishClick = () => {
		listUIStore.setEdit(false);
		listStore.pushRow({
			definition: listStore.rowForInputDefinition,
			meaning: listStore.rowForInputMeaning,
		});
		listStore.setRowForInputDefinition('');
		listStore.setRowForInputMeaning('');
	};

	const onDefinitionCancelClick = () => {
		listUIStore.setEdit(false);
		listStore.setRowForInputDefinition('');
		listStore.setRowForInputMeaning('');
	};

	return (
		<div css={createInputButtonLayout}>
			{!listUIStore.isEditable && (
				<DefinitionCreateButton onClick={onDefinitionCreateClick}>
					+
				</DefinitionCreateButton>
			)}
			{listUIStore.isEditable && (
				<div
					css={css`
						display: flex;
					`}
				>
					<DefinitionCreateButton onClick={onDefinitionFinishClick}>
						완료
					</DefinitionCreateButton>
					<DefinitionCreateButton onClick={onDefinitionCancelClick}>
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
