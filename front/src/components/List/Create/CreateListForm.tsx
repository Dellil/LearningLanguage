import styled from '@emotion/styled';

import TitleForm from './TitleForm';
import RowGroupForm from './RowGroupForm';

export interface CreateListFormProps {}

const CreateListForm = (props: CreateListFormProps) => {
	return (
		<div>
			<CreateForm onSubmit={e => e.preventDefault()}>
				<TitleForm />
				<RowGroupForm />
			</CreateForm>
		</div>
	);
};

const CreateForm = styled.form`
	margin-top: 54px;
`;

export default CreateListForm;
