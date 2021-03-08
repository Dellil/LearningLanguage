import { MouseEvent } from 'react';
import { css } from '@emotion/react';

import palette from 'lib/palette';
import Input from 'components/Input';
import MeaningInputList from './MeaningInputList';
import { inputType } from './InputGroup';

export type InputRowProps = {
	row: inputType;
	onCreateClick: (e: MouseEvent<HTMLButtonElement>) => void;
	onCreateMeaningClick: (
		id: number,
	) => (e: MouseEvent<HTMLButtonElement>) => void;
};

const InputRow = ({
	row,
	onCreateClick,
	onCreateMeaningClick,
}: InputRowProps) => {
	return (
		<div css={rowLayout} role="row">
			<Input
				css={rowInput}
				value={row.content}
				onChange={() => console.log('asdf')}
				placeholder="단어 혹은 문장을 입력해주세요."
			/>
			<div css={[rowInput, meaningInputs]}>
				<MeaningInputList meanings={row.meanings} />
			</div>
			<div css={buttons}>
				<button onClick={onCreateClick} css={button}>
					새 정의
				</button>
				<button onClick={onCreateMeaningClick(row.id)} css={button}>
					새 뜻
				</button>
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

const meaningInputs = css`
	& div:not(:first-of-type) {
		margin-top: 8px;
	}
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
	&:focus {
		color: ${palette.white};
		background-color: ${palette.blue.a400};
	}

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
