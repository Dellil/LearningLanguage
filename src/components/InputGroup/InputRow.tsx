import { css } from '@emotion/react';

import Input from 'components/Input';
import palette from 'lib/palette';

export type InputRowProps = {};

const InputRow = (props: InputRowProps) => {
	return (
		<div css={rowLayout}>
			<Input css={rowInput} placeholder="단어 혹은 문장을 입력해주세요." />
			<Input css={rowInput} placeholder="뜻을 입력해주세요." />
			<div css={buttons}>
				<button css={button}>새 줄</button>
				<button css={button}>새 뜻</button>
				<button css={button}>삭제</button>
			</div>
		</div>
	);
};

const rowLayout = css`
	margin-top: 16px;

	display: flex;
`;

const rowInput = css`
	width: 500px;

	margin-right: 10px;
`;

const buttons = css`
	display: flex;
	flex: 1;
	border: 1px solid ${palette.blue[600]};
	border-radius: 5px;
`;

const button = css`
	width: 100%;
	display: block;

	color: ${palette.blue[800]};

	&:not(:last-of-type) {
		border-right: 1px solid ${palette.blue[600]};
	}

	transition: color, background-color 0.15s;
	&:hover {
		color: ${palette.white};
		background-color: ${palette.blue.a400};
	}

	&:active {
		color: ${palette.white};
		background-color: ${palette.blue[900]};
	}
`;

export default InputRow;
