/* eslint-disable import/prefer-default-export */
import React from 'react';
import StoreContext from 'stores';

const useStore = () => {
	const stores = React.useContext(StoreContext);
	if (!stores) {
		throw new Error('There is No StoreContext');
	}
	return stores;
};

export { useStore };
