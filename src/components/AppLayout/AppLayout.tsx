import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type AppLayoutProps = {
	children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
	return <div>{children}</div>;
};

export type SideProps = {
	children: React.ReactNode;
};

const Side = ({ children }: SideProps) => {
	return <aside css={sidebarStyle}>{children}</aside>;
};

const sidebarStyle = css``;

export type MainProps = {
	children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
	return <main css={mainStyle}>{children}</main>;
};

const mainStyle = css``;

AppLayout.Side = Side;
AppLayout.Main = Main;

export default AppLayout;
