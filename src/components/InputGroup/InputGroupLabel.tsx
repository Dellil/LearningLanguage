import { css } from '@emotion/react';

import palette from 'lib/palette';

export type InputGroupLabelProps = {};

const InputGroupLabel = (props: InputGroupLabelProps) => {
	return (
		<div>
			<p css={label}>단어/문장과 뜻을 입력해주세요.</p>
			<hr css={separator} />
		</div>
	);
};

const label = css`
	font-size: 14px;

	color: ${palette.blue[600]};

	margin-bottom: 6px;
`;

const separator = css`
	width: 100%;
	height: 1px;
	background-color: ${palette.blue[600]};
	border: 0;
`;

export default InputGroupLabel;
