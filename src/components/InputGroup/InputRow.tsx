import { css } from '@emotion/react';

import Input from 'components/Input';
import palette from 'lib/palette';

export type InputRowProps = {};

const InputRow = (props: InputRowProps) => {
	return (
		<div css={rowLayout}>
			<Input placeholder="단어 혹은 문장을 입력해주세요." />
			<Input placeholder="뜻을 입력해주세요." />
			<div css={buttons}>
				<button>새 줄</button>
				<button>새 뜻</button>
				<button>삭제</button>
			</div>
		</div>
	);
};

const rowLayout = css`
	margin-top: 16px;

	display: flex;
`;

const buttons = css`
	border: 1px solid ${palette.blue[600]};
`;

export default InputRow;
