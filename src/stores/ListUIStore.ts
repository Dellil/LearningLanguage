import { makeAutoObservable } from 'mobx';

export default class ListUIStore {
	isEdit = false;

	constructor() {
		makeAutoObservable(this);
	}

	setEdit(value: boolean) {
		this.isEdit = value;
	}
}
