import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
			<div
				css={css`
					display: flex;
					align-items: center;
				`}
			>
				<div>
					<Icon
						name="list"
						css={css`
							width: 28px;
							height: 28px;
							fill: ${palette.blueGrey[900]};
						`}
					/>
				</div>
				<div
					css={css`
						margin-left: 12px;
						font-size: 24px;
						font-weight: bold;
						color: ${palette.blueGrey[900]};
					`}
				>
					{list.title}
				</div>
			</div>
			{/* Description of QuestionList */}
			<div
				css={css`
					margin-top: 24px;
					color: ${palette.blueGrey[500]};
					font-size: 18px;
					height: 98px;
				`}
			>
				{list.description}
			</div>
			{/* Bottom of QuestionList */}
			<div
				css={css`
					display: flex;
					justify-content: space-between;
					align-items: center;
				`}
			>
				<p
					css={css`
						color: ${palette.blueGrey[900]};
					`}
				>
					{list.createdAt}
				</p>
				<div
					css={css`
						& svg {
							fill: ${palette.yellow[600]};
						}
					`}
				>
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

export default QuestionList;
