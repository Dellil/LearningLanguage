import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks';
import palette from 'lib/palette';

export interface InputRowForTypingProps {}

const InputRowForTyping = (props: InputRowForTypingProps) => {
	const { listStore, listUIStore } = useStore();
	const [definition, setDefinition] = useState('');
	const [meaning, setMeaning] = useState('');

	useEffect(() => {
		setDefinition('');
		setMeaning('');
	}, [listUIStore.isEditable]);

	const onDefinitionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setDefinition(value);
	};

	const onMeaningChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setMeaning(value);
	};

	const onDefinitionBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		listStore.setRowForInputDefinition(definition);
	};

	const onMeaningBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		listStore.setRowForInputMeaning(meaning);
	};

	return (
		<>
			{listUIStore.isEditable && (
				<div css={createInputRowLayout}>
					<div css={createInput}>
						<input
							type="text"
							placeholder="DEFINITION"
							value={definition}
							onChange={onDefinitionChange}
							onBlur={onDefinitionBlur}
						/>
					</div>
					<div css={createInput}>
						<input
							type="text"
							placeholder="MEANING"
							value={meaning}
							onChange={onMeaningChange}
							onBlur={onMeaningBlur}
						/>
					</div>
				</div>
			)}
		</>
	);
};

const createInputRowLayout = css`
	display: flex;
	justify-content: space-around;
`;

const createInput = css`
	width: 100%;

	& > input {
		width: 100%;
		height: 50px;
		padding: 0px 15px;
		border: 1px solid ${palette.blue[600]};
		border-radius: 5px;
	}
`;

export default observer(InputRowForTyping);
