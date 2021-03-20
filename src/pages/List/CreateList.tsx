import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CreateListForm from 'components/List/CreateListForm';

import palette from 'lib/palette';

export interface CreateListProps {}

const CreateList = (props: CreateListProps) => {
	return (
		<div css={listContainer}>
			<FormLayout>
				<FormTitle>리스트 생성하기</FormTitle>
				<FormDescription>단어/문장과 뜻을 채워 넣으세요</FormDescription>
				<FormDescription>
					키보드 만으로 편하게 작성할 수 있습니다.(예정)
				</FormDescription>
				<CreateListForm />
			</FormLayout>
		</div>
	);
};

const listContainer = css`
	max-width: 1180px;
	height: 100%;
	margin: 0 auto;
	padding: 50px 0;
`;

const FormLayout = styled.div`
	width: 100%;
`;

const FormTitle = styled.h1`
	color: ${palette.blueGrey[900]};

	margin-bottom: 20px;
`;

const FormDescription = styled.h4`
	color: ${palette.blueGrey[500]};
`;

export default CreateList;
