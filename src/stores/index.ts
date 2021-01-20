import React from 'react';
import UserStore from './userStore';

type Stores = {
	userStore: UserStore;
};

export const stores: Stores = {
	userStore: new UserStore(),
};

const StoreContext = React.createContext<Stores | null>(null);

export default StoreContext;
