import { css } from '@emotion/react';

import Input from '../Input';
// import Input from '../../components/Input';

export type InputGroupProps = {};

const InputGroup = (props: InputGroupProps) => {
	return (
		<div css={inputGroup}>
			<div
				css={css`
					display: flex;

					& > * {
						margin-right: 10px;
					}
				`}
			>
				<Input
					css={css`
						width: 500px;
					`}
					placeholder="내용을 입력해주세요."
				/>
				<Input
					css={css`
						width: 500px;
					`}
				/>
				<button
					onClick={e => {
						console.log('호고곡');
					}}
					css={css`
						background-color: black;
						width: 100%;
					`}
				>
					&nbsp;
				</button>
			</div>
		</div>
	);
};

const inputGroup = css`
	margin-top: 30px;
	max-height: 520px;
`;

export default InputGroup;
