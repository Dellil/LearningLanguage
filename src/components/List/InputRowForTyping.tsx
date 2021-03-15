import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks';
import palette from 'lib/palette';

export interface InputRowForTypingProps {}

const InputRowForTyping = (props: InputRowForTypingProps) => {
	const ref = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		console.log('TODO');
	}, []);

	const { listStore, listUIStore } = useStore();

	return (
		<>
			{listUIStore.isEditable && (
				<div css={createInputRowLayout}>
					<div css={createInput}>
						<input
							ref={ref}
							type="text"
							placeholder="DEFINITION"
							// TODO
							onBlur={() => {
								listStore.setRowForInputDefinition(ref?.current.value);
							}}
						/>
					</div>
					<div css={createInput}>
						<input type="text" placeholder="MEANING" />
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

		border: 1px solid ${palette.blue[600]};
		border-radius: 5px;
	}
`;

export default observer(InputRowForTyping);
