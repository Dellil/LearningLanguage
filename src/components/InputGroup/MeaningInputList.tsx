import { css } from '@emotion/react';
import Input from 'components/Input/Input';

export type MeaningInputListProps = {
	meanings: string[];
};

const MeaningInputList = ({ meanings }: MeaningInputListProps) => {
	return (
		<>
			{meanings.map((meaning, i) => (
				<Input
					// eslint-disable-next-line react/no-array-index-key
					key={meaning + i}
					value={meanings[i]}
					onChange={() => console.log('하와와')}
					type="text"
					placeholder="뜻을 입력해주세요."
					css={input}
				/>
			))}
		</>
	);
};

const input = css`
	width: 500px;
`;

export default MeaningInputList;
