import { css } from '@emotion/react';
import styled from '@emotion/styled';

import palette from 'lib/palette';

export interface CreateInputRowsProps {}

const CreateInputRows = (props: CreateInputRowsProps) => {
	// 화면 하단의 + 버튼 클릭할 때만 input 나타남
	// 평소에는 div 상태에 오른쪽에 수정, 삭제 있음
	return (
		<div css={createInputRowsLayout}>
			<div css={createInputRowLayout}>
				<div css={createInput}>DIFINITION</div>
				<div css={createInput}>MEANING</div>
			</div>
			<div css={createInputRowLayout}>
				<div
					css={css`
						width: 100%;

						& > input {
							width: 100%;

							border: 1px solid ${palette.blue[600]};
							border-radius: 5px;
						}
					`}
				>
					<input type="text" placeholder="DIFINITION" />
				</div>
				<div
					css={css`
						width: 100%;

						& > input {
							width: 100%;

							border: 1px solid ${palette.blue[600]};
							border-radius: 5px;
						}
					`}
				>
					<input type="text" placeholder="MEANING" />
				</div>
			</div>
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
	background-color: ghostwhite;
`;

export default CreateInputRows;
