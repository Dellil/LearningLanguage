import { render } from '@testing-library/react';
import InputGroupLabel from './InputGroupLabel';

describe('InputGroupLabel Component', () => {
	it('Should be rendered Label', () => {
		const { getByText } = render(<InputGroupLabel />);
		const label = getByText('단어/문장과 뜻을 입력해주세요.');
		expect(label).toBeTruthy();
	});

	it('has bacground-color style into hr', () => {
		const { getByRole } = render(<InputGroupLabel />);
		const hr = getByRole('separator');

		expect(hr).toHaveStyle(`
            background-color: #1e88e5;
        `);
	});
});
