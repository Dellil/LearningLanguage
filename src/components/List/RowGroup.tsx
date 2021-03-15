import { css } from '@emotion/react';

export interface RowGroupProps {}

const RowGroup = (props: RowGroupProps) => {
	return (
		<div css={createInputRowLayout}>
			<div css={createInput}>DIFINITION</div>
			<div css={createInput}>MEANING</div>
			<div css={createInput}>
				<button>수정</button>
				<button>삭제</button>
			</div>
		</div>
	);
};

const createInputRowLayout = css`
	display: flex;
	justify-content: space-around;
`;

const createInput = css`
	width: 100%;
`;

export default RowGroup;
