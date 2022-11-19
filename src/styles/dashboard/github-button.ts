import styled from 'styled-components';

import { shade } from 'polished';

import { FaGithub } from 'react-icons/fa';

export const Content = styled.button`
	background-color: ${({ theme }) => theme.colors.orange};
	border-radius: 8px;
	margin-top: 25px;
	border: none;
	padding: 15px;

	display: flex;
	flex-flow: row;
	align-items: center;

	transition: transform 200ms, background-color 200ms;

	&:hover {
		transform: scale(1.03);
		background-color: ${({ theme }) => shade(0.2, theme.colors.orange)};
	}
`;

export const Text = styled.p`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.dark};
	margin-left: 10px;
`;

export const Icon = styled(FaGithub)`
	width: 25px;
	height: 25px;
	fill: ${({ theme }) => theme.colors.dark};
`;
