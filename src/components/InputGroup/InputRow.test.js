import { render } from '@testing-library/react';
import InputRow from './InputRow';

describe('InputRow Component', () => {
	it('has Input that can fill in the content', () => {
		const { getByPlaceholderText } = render(<InputRow />);
		const contentInput = getByPlaceholderText('단어 혹은 문장을 입력해주세요.');

		expect(contentInput).toBeTruthy();
	});

	it('has Input that can fill in the meaning', () => {
		const { getByPlaceholderText } = render(<InputRow />);
		const meaningInput = getByPlaceholderText('뜻을 입력해주세요.');

		expect(meaningInput).toBeTruthy();
	});

	it('has three Buttons', () => {
		const { getAllByRole } = render(<InputRow />);
		const buttons = getAllByRole('button');
		expect(buttons).toHaveLength(3);
	});
});
