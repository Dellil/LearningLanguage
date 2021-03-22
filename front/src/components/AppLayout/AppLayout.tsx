import { css } from '@emotion/react';

export type AppLayoutProps = {
	children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
	return <div css={appStyle}>{children}</div>;
};

const appStyle = css`
	display: flex;
`;

export type SideProps = {
	children: React.ReactNode;
};

const Side = ({ children }: SideProps) => {
	return <aside css={sidebarStyle}>{children}</aside>;
};

const sidebarStyle = css`
	position: fixed;
	width: 20rem;
	height: 100%;
	padding: 30px 20px;
`;

export type MainProps = {
	children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
	return <main css={mainStyle}>{children}</main>;
};

const mainStyle = css`
	position: fixed;
	margin-left: 20rem;
	width: var(--main-width);
	height: 100%;

	padding: 30px 20px 30px 0;
`;

AppLayout.Side = Side;
AppLayout.Main = Main;

export default AppLayout;
