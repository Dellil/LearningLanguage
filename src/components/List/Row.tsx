import { css } from '@emotion/react';

import { Row as RowFromParent } from 'stores/ListStore';

export interface RowProps {
	row: RowFromParent;
}

const Row = ({ row }: RowProps) => {
	return (
		<div
			css={css`
				display: flex;
			`}
		>
			<div
				css={css`
					width: 100%;
				`}
			>
				{row.definition}
			</div>
			<div
				css={css`
					width: 100%;
				`}
			>
				{row.meaning}
			</div>
			<div
				css={css`
					width: 100%;
				`}
			>
				<button>수정</button>
				<button>삭제</button>
			</div>
		</div>
	);
};

export default Row;
