import styled from '@emotion/styled';

import Input from 'components/Input';
import CreateInputGroup from './CreateInputGroup';

export interface CreateListFormProps {}

const CreateListForm = (props: CreateListFormProps) => {
	return (
		<div>
			<CreateForm onSubmit={e => e.preventDefault()}>
				<div>
					<Input label="리스트 제목" placeholder="제목을 입력해주세요." />
				</div>
				<CreateInputGroup />
			</CreateForm>
		</div>
	);
};

const CreateForm = styled.form`
	margin-top: 54px;
`;

export default CreateListForm;