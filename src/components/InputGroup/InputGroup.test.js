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
});
