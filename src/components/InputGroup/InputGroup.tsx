import { css } from '@emotion/react';

import InputGroupLabel from './InputGroupLabel';
import InputRow from './InputRow';

export type InputGroupProps = {};

const InputGroup = (props: InputGroupProps) => {
	return (
		<div css={inputGroup}>
			<InputGroupLabel />
			<InputRow />
			<InputRow />
		</div>
	);
};

const inputGroup = css`
	margin-top: 30px;
	max-height: 520px;
`;

export default InputGroup;
