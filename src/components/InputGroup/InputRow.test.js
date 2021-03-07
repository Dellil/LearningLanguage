import { render } from '@testing-library/react';
import InputRow from './InputRow';

describe('InputRow Component', () => {
	const ROW = {
		id: 0,
		content: '',
		meanings: [''],
	};

	it('단어 혹은 문장을 쓸 수 있는 인풋이 있다.', () => {
		const mockMeaningCreateClick = jest.fn();
		const { getByPlaceholderText } = render(
			<InputRow row={ROW} onCreateMeaningClick={mockMeaningCreateClick} />,
		);
		const contentInput = getByPlaceholderText('단어 혹은 문장을 입력해주세요.');

		expect(contentInput).toBeTruthy();
	});

	it('뜻을 입력할 수 있는 인풋이 있다.', () => {
		const mockMeaningCreateClick = jest.fn();
		const { getByPlaceholderText } = render(
			<InputRow row={ROW} onCreateMeaningClick={mockMeaningCreateClick} />,
		);
		const meaningInput = getByPlaceholderText('뜻을 입력해주세요.');

		expect(meaningInput).toBeTruthy();
	});

	it('버튼 세 개가 있다.', () => {
		const mockMeaningCreateClick = jest.fn();
		const { getByText } = render(
			<InputRow row={ROW} onCreateMeaningClick={mockMeaningCreateClick} />,
		);
		expect(getByText('새 줄')).toBeTruthy();
		expect(getByText('새 뜻')).toBeTruthy();
		expect(getByText('삭제')).toBeTruthy();
	});
});
