import { css } from '@emotion/react';

import InputRowForTyping from './InputRowForTyping';

export interface CreateInputRowsProps {}

const CreateInputRows = (props: CreateInputRowsProps) => {
	// 화면 하단의 + 버튼 클릭할 때만 input 나타남
	// 평소에는 div 상태에 오른쪽에 수정, 삭제 있음
	return (
		<div css={createInputRowsLayout}>
			<div css={createInputRowLayout}>
				<div css={createInput}>DIFINITION</div>
				<div css={createInput}>MEANING</div>
				<div css={createInput}>
					<button>수정</button>
					<button>삭제</button>
				</div>
			</div>
			<InputRowForTyping />
		</div>
	);
};

const createInputRowsLayout = css`
	width: 100%;
`;

const createInputRowLayout = css`
	display: flex;
	justify-content: space-around;
`;

const createInput = css`
	width: 100%;
`;

export default CreateInputRows;
