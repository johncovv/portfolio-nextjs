import styled from 'styled-components';

import { IoMdMail } from 'react-icons/io';

export const Content = styled.a`
	margin-top: 15px;
	width: fit-content;

	display: flex;
	flex-flow: row;
	align-items: center;

	transition: transform 200ms;
	color: ${({ theme }) => theme.text.primary};

	&:hover {
		transform: translateX(10px);
	}
`;

export const Text = styled.p`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;

	margin-left: 10px;
	font-size: 18px;
	color: ${({ theme }) => theme.text.primary};
`;

export const Icon = styled(IoMdMail)`
	height: 25px;
	width: 25px;
	fill: ${({ theme }) => theme.text.primary};
`;
