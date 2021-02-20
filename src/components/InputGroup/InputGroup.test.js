import { render, fireEvent } from '@testing-library/react';

import InputGroup from 'components/InputGroup';

describe('InputGroup Component', () => {
	it('Should be generated New Line of InputRow', () => {
		const { getAllByRole, getByText } = render(<InputGroup />);
		const createButton = getByText('새 줄');
		fireEvent.click(createButton);
		const rows = getAllByRole('row');

		expect(rows).toHaveLength(2);
	});

	// TODO => 여러 인풋들이 만들어져있을 때, 인풋 생성버튼을 누르면 어디로 가야할까요?
	// it('Should be generated New Line after Current InputRow', () => {
	// 	const { getAllByRole, getByText, queryByText } = render(<InputGroup />);
	// 	const createButton = getByText('새 줄');
	// 	fireEvent.click(createButton);

	// 	const firstCreateButton = queryByText('새 줄');
	// 	fireEvent.click(firstCreateButton);

	// });
});
