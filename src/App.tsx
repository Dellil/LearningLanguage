import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import AppLayout from './components/AppLayout';
import Sidebar from './components/Sidebar';

const App = () => {
	return (
		<>
			<AppLayout>
				<AppLayout.Side>
					<Sidebar />
				</AppLayout.Side>
				<AppLayout.Main>
					<div>asdf</div>
				</AppLayout.Main>
			</AppLayout>
			<Global styles={style} />
		</>
	);
};

const style = css`
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
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
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
