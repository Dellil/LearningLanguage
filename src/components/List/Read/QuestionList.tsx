import { css } from '@emotion/react';

import Icon from 'lib/Icon';
import palette from 'lib/palette';
import { List } from 'stores/ListStore';

export interface QuestionListProps {
	list: List;
}

const QuestionList = ({ list }: QuestionListProps) => {
	return (
		<div css={questionListLayout}>
			{/* Title of QuestionList */}
			<div css={questionTitleLayout}>
				<div>
					<Icon name="list" css={questionTitleIcon} />
				</div>
				<div css={questionTitle}>{list.title}</div>
			</div>
			{/* Description of QuestionList */}
			<div css={questionDescription}>{list.description}</div>
			{/* Bottom of QuestionList */}
			<div css={questionBottomLayout}>
				<p css={questionCreated}>{list.createdAt}</p>
				<div css={questionBottomIcon}>
					{list.isBookmarked ? (
						<Icon name="starFull" />
					) : (
						<Icon name="starBlank" />
					)}
				</div>
			</div>
		</div>
	);
};

const questionListLayout = css`
	display: flex;
	flex-direction: column;
	width: 360px;
	height: 218px;
	max-height: 218px;

	box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.1);
	border-radius: 5px;

	margin-bottom: 40px;
	margin-left: 10px;
	margin-right: 10px;

	padding: 20px;

	user-select: none;
`;

const questionTitleLayout = css`
	display: flex;
	align-items: center;
`;

const questionTitleIcon = css`
	width: 28px;
	height: 28px;
	fill: ${palette.blueGrey[900]};
`;

const questionTitle = css`
	margin-left: 12px;
	font-size: 24px;
	font-weight: bold;
	color: ${palette.blueGrey[900]};
`;

const questionDescription = css`
	margin-top: 24px;
	color: ${palette.blueGrey[500]};
	font-size: 18px;
	height: 98px;
`;

const questionBottomLayout = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const questionCreated = css`
	color: ${palette.blueGrey[900]};
`;

const questionBottomIcon = css`
	& svg {
		fill: ${palette.yellow[600]};
	}
`;

export default QuestionList;
