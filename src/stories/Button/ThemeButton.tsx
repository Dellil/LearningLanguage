import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button';

const ButtonBase = styled.button`
	line-height: 165%;
	border-radius: 8px;
`;

const Filled = styled(ButtonBase)``;

interface Props {}

const ThemeButton: React.FC<ButtonProps> = () => {
	return <></>;
};

export default ThemeButton;
