import { css, SerializedStyles } from '@emotion/react';

import palette from 'lib/palette';

export type InputProps = {
	label?: string;
	type?: string;
	css?: SerializedStyles;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	placeholder?: string;
};

const Input = (props: InputProps) => {
	const {
		label,
		type = 'text',
		placeholder,
		value,
		onChange,
		onBlur,
		css: styling,
	} = props;
	return (
		<div css={[inputLayout, styling]}>
			{label && <span css={inputLabel}>{label}</span>}
			<input
				type={type}
				css={input}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</div>
	);
};

const inputLayout = css`
	display: flex;
	flex-direction: column;
`;

const inputLabel = css`
	color: ${palette.blue[600]};
	font-size: 14px;
	line-height: 16.8px;

	margin-bottom: 6px;
`;

const input = css`
	min-width: 350px;
	padding: 0px 15px;
	height: 50px;

	font-size: 15px;

	border: 1px solid ${palette.blue[600]};
	border-radius: 5px;

	&:focus {
		box-shadow: 0px 0px 0px 2px ${palette.blue[100]};
	}
`;

export default Input;
