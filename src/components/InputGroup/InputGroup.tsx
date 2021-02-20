import { useReducer, useCallback, MouseEvent } from 'react';
import { css } from '@emotion/react';

import InputGroupLabel from './InputGroupLabel';
import InputRow from './InputRow';

type State = input[];

type input = {
	id: number;
	content: string;
	meanings: string[];
};

type Action = {
	type: 'CREATE_ROW';
};

/**
 * reducer function 리턴타입 명시 안하면 에러 무엇 ㅡㅡ
 */
function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'CREATE_ROW':
			return [
				...state,
				{
					id: state.length,
					content: '',
					meanings: [''],
				},
			];
		default:
			return state;
	}
}

export type InputGroupProps = {};

const InputGroup = (props: InputGroupProps) => {
	const [rows, dispatch] = useReducer(reducer, [
		{
			id: 0,
			content: '',
			meanings: [''],
		},
	]);

	const onCreateClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		dispatch({ type: 'CREATE_ROW' });
	}, []);

	return (
		<div css={inputGroup}>
			<InputGroupLabel />
			{rows.map(row => (
				<InputRow key={row.id} row={row} onCreateClick={onCreateClick} />
			))}
		</div>
	);
};

const inputGroup = css`
	margin-top: 30px;
	max-height: 420px;

	overflow-y: auto;
`;

export default InputGroup;
