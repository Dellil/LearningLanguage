import { makeAutoObservable } from 'mobx';

export default class ListStore {
	rowForInputDefinition = '';

	rowForInputMeaning = '';

	setRowForInputDefinition(rowInputDefinition: string) {
		this.rowForInputDefinition = rowInputDefinition;
	}

	setRowForInputMeaning(rowInputMeaning: string) {
		this.rowForInputMeaning = rowInputMeaning;
	}

	constructor() {
		makeAutoObservable(this);
	}
}
