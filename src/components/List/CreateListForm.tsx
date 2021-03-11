import { css } from '@emotion/react';
import styled from '@emotion/styled';

import palette from 'lib/palette';
import Input from 'components/Input';
import CreateInputGroup from './CreateInputGroup';

export interface CreateListFormProps {}

const CreateListForm = (props: CreateListFormProps) => {
	return (
		<div>
			<CreateForm action="" onSubmit={e => e.preventDefault()}>
				<div>
					<Input label="리스트 제목" placeholder="제목을 입력해주세요." />
				</div>
				<div>
					<CreateInputGroup />
				</div>
				<div>
					<CreateButton>리스트 생성</CreateButton>
				</div>
			</CreateForm>
		</div>
	);
};

const CreateForm = styled.form`
	margin-top: 54px;
`;

const CreateButton = styled.button`
	width: 100%;
	height: 50px;
	color: ${palette.grey[50]};
	border-radius: 10px;
	background-color: ${palette.blue.a400};
`;

export default CreateListForm;
