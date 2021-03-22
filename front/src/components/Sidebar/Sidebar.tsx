import { css } from '@emotion/react';

import SidebarItem from 'components/SidebarItem';
import palette from 'lib/palette';

export type SidebarProps = {};

const Sidebar = (props: SidebarProps) => {
	return (
		<div css={sidebar}>
			<div css={sidebarTitle}>
				Learning
				<br />
				Language
			</div>
			<ul css={sidebarItems}>
				<SidebarItem icon="test" text="TEST" to="/" />
				<SidebarItem icon="share" text="SHARE" to="/share" />
				<SidebarItem icon="option" text="OPTIONS" to="/option" />
			</ul>
		</div>
	);
};

const sidebar = css`
	height: 100%;
	padding: 30px 20px;

	background-color: ${palette.blueGrey[900]};
	border-radius: 10px;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const sidebarTitle = css`
	font-size: 22px;
	font-weight: bold;
	line-height: 29px;
	text-transform: capitalize;
	color: ${palette.blueGrey[50]};
`;

const sidebarItems = css`
	margin-top: 6.875rem;
`;

export default Sidebar;
