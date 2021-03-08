import { render, fireEvent } from '@testing-library/react';

import InputGroup from 'components/InputGroup';

describe('InputGroup Component', () => {
	it('새 정의 버튼을 클릭하면 새 정의가 생성 된다.', () => {
		const { getAllByRole, getByText } = render(<InputGroup />);
		const createButton = getByText('새 정의');
		fireEvent.click(createButton);
		const rows = getAllByRole('row');

		expect(rows).toHaveLength(2);
	});

	it('새 뜻 버튼을 클릭하면 새 뜻 인풋이 생성 된다.', () => {
		const { getAllByPlaceholderText, getByText } = render(<InputGroup />);

		const createButton = getByText('새 뜻');
		fireEvent.click(createButton);

		const meaningInputs = getAllByPlaceholderText('뜻을 입력해주세요.');
		expect(meaningInputs).toHaveLength(2);
	});
});
