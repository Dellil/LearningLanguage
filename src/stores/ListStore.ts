import { makeAutoObservable } from 'mobx';

export type Row = {
	definition: string;
	meaning: string;
};

export default class ListStore {
	rowForInputDefinition = '';

	rowForInputMeaning = '';

	setRowForInputDefinition(rowInputDefinition: string) {
		this.rowForInputDefinition = rowInputDefinition;
	}

	setRowForInputMeaning(rowInputMeaning: string) {
		this.rowForInputMeaning = rowInputMeaning;
	}

	rows: Row[] = [];

	get getRows() {
		return this.rows;
	}

	setRows(rows: Row[]) {
		this.rows = rows;
	}

	pushRow(row: Row) {
		this.rows.push(row);
	}

	constructor() {
		makeAutoObservable(this);
	}
}
