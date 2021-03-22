import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

import palette from 'lib/palette';
import { useStore } from 'hooks';

export interface TitleFormProps {}

const TitleForm = (props: TitleFormProps) => {
	const { listStore } = useStore();
	const [title, setTitle] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setTitle(value);
	};
	const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		listStore.setTitle(title);
	};

	useEffect(() => {
		setTitle(prev => '');
	}, []);

	return (
		<div css={inputLayout}>
			<span css={inputLabel}>리스트 제목</span>
			<input
				type="text"
				placeholder="제목을 입력해주세요."
				value={title}
				css={input}
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

export default TitleForm;
