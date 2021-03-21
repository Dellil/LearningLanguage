import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks';
import QuestionList from './QuestionList';

export interface QuestionListGroupProps {}

const QuestionListGroup = (props: QuestionListGroupProps) => {
	const { listStore } = useStore();

	return (
		<div css={questionListGroup}>
			{listStore.getListGroup.map(list => (
				<QuestionList list={list} />
			))}
		</div>
	);
};

const questionListGroup = css`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	height: 100%;
	padding-bottom: 95px;
	overflow-y: auto;
`;

export default observer(QuestionListGroup);
