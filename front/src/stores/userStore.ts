import { makeObservable, computed } from 'mobx';

class UserStore {
	constructor() {
		makeObservable(this, {
			isLogined: computed,
		});
	}

	// TODO Firebase login 구현시 구현되어야함!
	get isLogined(): boolean {
		return false;
	}
}

export default UserStore;
