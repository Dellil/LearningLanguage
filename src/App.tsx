import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import Header from './components/Header';
import Main from './components/Main';
import StoreContext, { stores } from './stores';

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

const App: React.FC = () => {
	return (
		<StoreContext.Provider value={stores}>
			<Router>
				<Header />
				<Switch>
					{/* 로그인 됨? 안 됨? */}
					<Route path="/" exact component={Main} />
				</Switch>
			</Router>
		</StoreContext.Provider>
	);
};

export default Sentry.withProfiler(App);
