import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import StoreContext, { stores } from './stores';
import App from './App';
import './index.css';

import './firebaseInit';

ReactDOM.render(
	<React.StrictMode>
		<StoreContext.Provider value={stores}>
			<Router>
				<App />
			</Router>
		</StoreContext.Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
