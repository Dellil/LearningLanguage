import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import { useStore } from 'hooks';

import Row from './Row';

export interface RowGroupProps {}

const RowGroup = (props: RowGroupProps) => {
	const { listStore } = useStore();
	return (
		<div css={createInputRowLayout}>
			{listStore.rows.map(row => (
				<Row row={row} />
			))}
		</div>
	);
};

const createInputRowLayout = css`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
`;

const createInput = css`
	width: 100%;
`;

export default observer(RowGroup);
