import { css } from '@emotion/react';

import CreateInputButtons from './CreateInputButtons';
import CreateInputGroupLabel from './CreateInputGroupLabel';
import CreateInputRows from './CreateInputRows';

export interface CreateInputGroupProps {}

// MOBX로 상태관리 ON
const CreateInputGroup = (props: CreateInputGroupProps) => {
	return (
		<div css={InputGroupLayout}>
			<CreateInputGroupLabel />
			<CreateInputRows />
			<CreateInputButtons />
		</div>
	);
};

const InputGroupLayout = css`
	margin-top: 30px;
`;

export default CreateInputGroup;
