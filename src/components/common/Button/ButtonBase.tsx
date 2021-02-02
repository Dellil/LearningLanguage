import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {}

const ButtonBase: React.FC<Props> = () => {
	return (
		<div
			css={css`
				background-color: red;
			`}
		>
			asdfasdf
		</div>
	);
};

export default ButtonBase;
