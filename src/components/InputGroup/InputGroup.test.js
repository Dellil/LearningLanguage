import { render } from '@testing-library/react';

import InputGroup from './InputGroup';

describe('InputGroup Component', () => {
	it('Should be rendered content Input', () => {
		const { getByPlaceholderText } = render(<InputGroup />);
		const contentInput = getByPlaceholderText('내용을 입력해주세요.');
		expect(contentInput).toBeTruthy();
	});
});
