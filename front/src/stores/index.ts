import React from 'react';
import UserStore from './userStore';
import ListStore from './ListStore';
import ListUIStore from './ListUIStore';

type Stores = {
	userStore: UserStore;
	listStore: ListStore;
	listUIStore: ListUIStore;
};

export const stores: Stores = {
	userStore: new UserStore(),
	listStore: new ListStore(),
	listUIStore: new ListUIStore(),
};

const StoreContext = React.createContext<Stores | null>(null);

export default StoreContext;
