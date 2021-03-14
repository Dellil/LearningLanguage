import React from 'react';
import UserStore from './userStore';
import ListUIStore from './ListUIStore';

type Stores = {
	userStore: UserStore;
	listUIStore: ListUIStore;
};

export const stores: Stores = {
	userStore: new UserStore(),
	listUIStore: new ListUIStore(),
};

const StoreContext = React.createContext<Stores | null>(null);

export default StoreContext;
