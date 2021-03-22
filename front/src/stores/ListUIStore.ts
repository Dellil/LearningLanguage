import { makeAutoObservable } from 'mobx';

export default class ListUIStore {
	isEditable: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	setEditable(value: boolean) {
		this.isEditable = value;
	}
}
