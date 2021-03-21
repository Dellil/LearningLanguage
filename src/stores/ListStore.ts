import { makeAutoObservable } from 'mobx';

export type Row = {
	definition: string;
	meaning: string;
};

export type List = {
	title: string;
	description: string;
	isBookmarked: boolean;
	// TODO => 백엔드 만들어지면 type 바꾸기
	createdAt: string;
};

const l: List[] = [
	{
		title: 'JLPT N1',
		description: '못하는 것만 모아놓은 N1 공략본',
		isBookmarked: false,
		createdAt: '2021/03/21 일요일',
	},
	{
		title: '토익 900가자ㅏㅏㅏ',
		description: '바보같이 틀리는 것만 모아놓음',
		isBookmarked: true,
		createdAt: '2021/01/11 목요일',
	},
	{
		title: '하와와와와와',
		description: '응애애애애애애애애애애응애애애',
		isBookmarked: false,
		createdAt: '2021/02/08 화요일',
	},
	{
		title: '탐앤탐스 성남우체국점',
		description: '아메리카노 늘 마셔도 최고야 늘 짜릿해',
		isBookmarked: true,
		createdAt: '2021/04/14 수요일',
	},
	{
		title: 'JLPT N1',
		description: '못하는 것만 모아놓은 N1 공략본',
		isBookmarked: false,
		createdAt: '2021/03/21 일요일',
	},
	{
		title: '토익 900가자ㅏㅏㅏ',
		description: '바보같이 틀리는 것만 모아놓음',
		isBookmarked: true,
		createdAt: '2021/01/11 목요일',
	},
	{
		title: '하와와와와와',
		description: '응애애애애애애애애애애응애애애',
		isBookmarked: false,
		createdAt: '2021/02/08 화요일',
	},
	{
		title: '탐앤탐스 성남우체국점',
		description: '아메리카노 늘 마셔도 최고야 늘 짜릿해',
		isBookmarked: true,
		createdAt: '2021/04/14 수요일',
	},
	{
		title: '하와와와와와',
		description: '응애애애애애애애애애애응애애애',
		isBookmarked: false,
		createdAt: '2021/02/08 화요일',
	},
	{
		title: '탐앤탐스 성남우체국점',
		description: '아메리카노 늘 마셔도 최고야 늘 짜릿해',
		isBookmarked: true,
		createdAt: '2021/04/14 수요일',
	},
	{
		title: '하와와와와와',
		description: '응애애애애애애애애애애응애애애',
		isBookmarked: false,
		createdAt: '2021/02/08 화요일',
	},
	{
		title: '탐앤탐스 성남우체국점',
		description: '아메리카노 늘 마셔도 최고야 늘 짜릿해',
		isBookmarked: true,
		createdAt: '2021/04/14 수요일',
	},
	{
		title: '탐앤탐스 성남우체국점',
		description: '아메리카노 늘 마셔도 최고야 늘 짜릿해',
		isBookmarked: true,
		createdAt: '2021/04/14 수요일',
	},
	{
		title: '하와와와와와',
		description: '응애애애애애애애애애애응애애애',
		isBookmarked: false,
		createdAt: '2021/02/08 화요일',
	},
	{
		title: '탐앤탐스 성남우체국점',
		description: '아메리카노 늘 마셔도 최고야 늘 짜릿해',
		isBookmarked: true,
		createdAt: '2021/04/14 수요일',
	},
];

export default class ListStore {
	listGroup: List[] = [];

	get getListGroup() {
		return this.listGroup;
	}

	setListGroup(value: List[]) {
		this.listGroup = value;
	}

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
		this.setListGroup(l);
	}
}
