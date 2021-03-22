import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';

import Icon, { Icons } from 'lib/Icon';
import palette from 'lib/palette';

export type SidebarItemProps = {
	icon: Icons;
	text: string;
	to: string | string[];
};

const SidebarItem = ({ icon, text, to }: SidebarItemProps) => {
	return (
		<li css={sidebarItemLayout}>
			<NavLink to={to} exact css={sidebarItem} activeClassName="active">
				<Icon name={icon} />
				<span>{text}</span>
			</NavLink>
		</li>
	);
};

const sidebarItemLayout = css`
	&:not(:last-of-type) {
		margin-bottom: 20px;
	}
`;

const sidebarItem = css`
	display: flex;
	width: 240px;
	height: 70px;
	border-radius: 5px;
	padding: 20px 18px;
	align-items: center;
	user-select: none;
	transition: all 0.14s;

	&.active {
		background-color: ${palette.blueGrey[500]};
	}

	&:hover {
		background-color: ${palette.blueGrey[300]};
	}

	&:active {
		background-color: ${palette.blueGrey[600]};
		transition: all 0s;
	}

	svg {
		fill: ${palette.grey[200]};

		width: 30px;
		height: 30px;

		margin-right: 10px;
	}

	span {
		color: ${palette.grey[200]};
		font-size: 22px;
		font-weight: bold;
	}
`;

export default SidebarItem;
