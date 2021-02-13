import { css } from '@emotion/react';

export type ListProps = {};

const List = (props: ListProps) => {
	return <div css={list}>asdf</div>;
};

const list = css`
	width: 100%;
	height: 100%;
	background-color: black;
`;

export default List;
