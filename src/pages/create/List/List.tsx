import { css } from '@emotion/react';

import Input from '../../../components/Input';
import palette from '../../../lib/palette';

export type ListProps = {};

const List = (props: ListProps) => {
	return (
		<div css={listLayout}>
			<div css={list}>
				<h1 css={listTitle}>리스트 생성하기</h1>
				<h4 css={listCaption}>단어/문장과 뜻을 채워 넣으세요.</h4>
				<h4 css={listCaption}>키보드만으로 편하게 작성할 수 있습니다.</h4>

				<form css={form}>
					<Input label="리스트 제목" />

					{/* InputGroup */}
					<div css={inputGroup}>INPUT GROUP</div>
					<div css={listTotalCount}>1 / 3</div>
					<button css={listFormButton}>리스트 생성</button>
				</form>
			</div>
		</div>
	);
};

const listLayout = css`
	max-width: 1180px;
	height: 100%;
	margin: 0 auto;
	padding: 50px 0;
`;

const list = css`
	width: 100%;
`;

const listTitle = css`
	font-weight: bold;

	color: ${palette.blueGrey[900]};
`;
const listCaption = css`
	font-weight: bold;

	color: ${palette.blueGrey[500]};

	&:first-of-type {
		margin-top: 20px;
	}
`;

const form = css`
	margin-top: 54px;
`;

const inputGroup = css`
	margin-top: 30px;
	max-height: 520px;
`;

const listTotalCount = css`
	color: ${palette.blue[600]};
	font-weight: bold;
	font-size: 24px;
`;

const listFormButton = css`
	width: 100%;
	height: 60px;
	color: ${palette.grey[50]};
	border-radius: 10px;
	background-color: ${palette.blue.a400};
`;

export default List;
