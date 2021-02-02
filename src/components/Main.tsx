import React from 'react';
import { css } from '@emotion/react';

import Button from './common/Button';

// import useStore from 'store';

const Main: React.FC = () => {
	// const { userStore } = useStore();
	// if(userStore.isLogined) {}
	// Login Validation Logic

	return (
		<>
			<div
				css={css`
					background-color: red;
				`}
			>
				asdf
			</div>
			<Button>asdf</Button>
		</>
	);
};
export default Main;
