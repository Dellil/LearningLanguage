import { useReducer, useCallback, MouseEvent } from 'react';
import { css } from '@emotion/react';

import InputGroupLabel from './InputGroupLabel';
import InputRow from './InputRow';

type State = inputType[];

export type inputType = {
	id: number;
	content: string;
	meanings: string[];
};

type Action =
	| {
			type: 'CREATE_ROW';
	  }
	| {
			type: 'CREATE_MEANING';
			id: number;
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
		case 'CREATE_MEANING': {
			const currentRow = { ...state[action.id] };
			currentRow.meanings = [...currentRow.meanings, ''];
			const leftRows = state.slice(0, action.id);
			const rightRows = state.slice(action.id + 1, state.length);

			return [...leftRows, currentRow, ...rightRows];
		}
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

	const onCreateMeaningClick = (id: number) => (
		e: MouseEvent<HTMLButtonElement>,
	) => {
		dispatch({ type: 'CREATE_MEANING', id });
	};

	return (
		<div css={inputGroup}>
			<InputGroupLabel />
			{rows.map(row => (
				<InputRow
					key={row.id}
					row={row}
					onCreateClick={onCreateClick}
					onCreateMeaningClick={onCreateMeaningClick}
				/>
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
