import { makeAutoObservable } from 'mobx';

export default class ListUIStore {
	isEditable: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	setEdit(value: boolean) {
		this.isEditable = value;
	}
}
