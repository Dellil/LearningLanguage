import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

// PAGES FOLDER
import { CreateList } from 'pages/List';

// COMPONENTS FOLDER
import AppLayout from 'components/AppLayout';
import Sidebar from 'components/Sidebar';

const App = () => {
	return (
		<>
			<AppLayout>
				<AppLayout.Side>
					<Sidebar />
				</AppLayout.Side>
				<AppLayout.Main>
					<Switch>
						<Route path="/create/list" exact component={CreateList} />

						{/* For Development! */}
						<Redirect to="/create/list" />
					</Switch>
				</AppLayout.Main>
			</AppLayout>
			<Global styles={style} />
		</>
	);
};

const style = css`
	@import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html,
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-size: 16px;
		font-family: 'Spoqa Han Sans Neo' !important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Define Variables */
	#root {
		--main-width: calc(100% - 20rem);
	}

	ul,
	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input {
		font-size: inherit;
		font-family: inherit;
		color: inherit;
		outline: none;
		border: none;
		background: transparent;
		appearance: none;
		-webkit-appearance: none;
	}

	button {
		font-size: inherit;
		font-family: inherit;
		color: inherit;
		outline: none;
		border: none;
		background: transparent;
	}

	button:hover {
		cursor: pointer;
	}

	button:disabled {
		cursor: default;
	}
`;

Sentry.init({
	dsn:
		'https://9d88b00b78ea452eb1df484576a6ec0c@o358318.ingest.sentry.io/5605418',
	release: `learning-language@${process.env.npm_package_version}`,
	autoSessionTracking: true,
	integrations: [new Integrations.BrowserTracing()],

	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,
});

export default Sentry.withProfiler(App);
