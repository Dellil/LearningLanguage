import { css } from '@emotion/react';

import palette from '../../lib/palette';

export type InputProps = {
	label?: string;
	type?: string;
};

const Input = ({ label, type = 'text' }: InputProps) => {
	return (
		<div css={inputLayout}>
			{label && <span css={inputLabel}>{label}</span>}
			<input type={type} css={input} />
		</div>
	);
};

const inputLayout = css`
	display: flex;
	flex-direction: column;
`;

const inputLabel = css`
	color: ${palette.blue[600]};
	font-weight: bold;
	font-size: 14px;
	line-height: 16.8px;

	margin-bottom: 4px;
`;

const input = css`
	width: 350px;
	padding: 0px 10px;
	height: 50px;

	font-size: 18px;

	border: 1px solid ${palette.blue[600]};
	border-radius: 5px;
`;

export default Input;
