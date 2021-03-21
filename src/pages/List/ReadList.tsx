import { css } from '@emotion/react';
import styled from '@emotion/styled';

import palette from 'lib/palette';
import { QuestionListGroup } from 'components/List';

export interface ReadListProps {}

const ReadList = (props: ReadListProps) => {
	return (
		<div css={listContainer}>
			<ListTitle>문제 리스트</ListTitle>
			<ListDescription>어떤 문제를 풀으실건가요?</ListDescription>
			<QuestionListGroup />
		</div>
	);
};

const listContainer = css`
	max-width: 1180px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 50px 0;

	overflow-y: hidden;
`;
const ListTitle = styled.h1`
	color: ${palette.blueGrey[900]};

	margin-bottom: 20px;
`;

const ListDescription = styled.h4`
	color: ${palette.blueGrey[500]};
	margin-bottom: 95px;
`;

export default ReadList;
