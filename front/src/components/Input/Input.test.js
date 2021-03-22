import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input Component', () => {
	it('입력 잘 받음', () => {
		const { getByPlaceholderText } = render(
			<Input value="" placeholder="input" />,
		);

		const input = getByPlaceholderText('input');
		fireEvent.change(input, {
			target: {
				value: 'll project',
			},
		});
		expect(input).toHaveValue('ll project');
	});
});
