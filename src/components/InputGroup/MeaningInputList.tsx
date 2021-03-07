import Input from 'components/Input/Input';

export type MeaningInputListProps = {
	meanings: string[];
};

const MeaningInputList = ({ meanings }: MeaningInputListProps) => {
	return (
		<>
			{meanings.map((meaning, i) => (
				// eslint-disable-next-line react/no-array-index-key
				<Input key={meaning + i} type="text" placeholder="뜻을 입력해주세요." />
			))}
		</>
	);
};

export default MeaningInputList;
