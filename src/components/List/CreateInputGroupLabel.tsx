import { css } from '@emotion/react';

import palette from 'lib/palette';

export interface CreateInputGroupLabelProps {}

const CreateInputGroupLabel = (props: CreateInputGroupLabelProps) => {
	return (
		<div>
			<p css={inputGroupLabel}>정의와 뜻</p>
			<hr css={inputGroupDivider} />
		</div>
	);
};

const inputGroupLabel = css`
	font-size: 14px;
	line-height: 17px;
	color: ${palette.blue[600]};
	margin-bottom: 4px;
`;

const inputGroupDivider = css`
	border: none;
	height: 1px;
	background-color: ${palette.blue[600]};
`;

export default CreateInputGroupLabel;
