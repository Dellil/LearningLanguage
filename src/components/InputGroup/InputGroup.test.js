import { render } from '@testing-library/react';

import InputGroup from 'components/InputGroup';

describe('InputGroup Component', () => {
	it('Should be rendered content Input', () => {
		const { getByPlaceholderText } = render(<InputGroup />);
		const contentInput = getByPlaceholderText('내용을 입력해주세요.');

		expect(contentInput).toBeTruthy();
	});

	it('Should be rendered meaning Input', () => {
		const { getByPlaceholderText } = render(<InputGroup />);

		const meaningInput = getByPlaceholderText('뜻을 입력해주세요.');
		expect(meaningInput).toBeTruthy();
	});
});
