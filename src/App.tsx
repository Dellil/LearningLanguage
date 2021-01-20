import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import StoreContext, { stores } from './stores';

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

export default App;
