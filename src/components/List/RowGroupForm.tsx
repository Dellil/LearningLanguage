import { css } from '@emotion/react';

import RowGroupLabel from './RowGroupLabel';
import RowGroup from './RowGroup';
import InputRowForTyping from './InputRowForTyping';
import RowGroupButtons from './RowGroupButtons';

export interface RowGroupFormProps {}

const RowGroupForm = (props: RowGroupFormProps) => {
	return (
		<div css={InputGroupLayout}>
			<RowGroupLabel />
			<RowGroup />
			<InputRowForTyping />
			<RowGroupButtons />
		</div>
	);
};

const InputGroupLayout = css`
	margin-top: 30px;
`;

export default RowGroupForm;
