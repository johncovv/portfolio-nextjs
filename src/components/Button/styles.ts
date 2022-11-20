import styled from 'styled-components';
import Link from 'next/link';

export const Content = styled(Link)`
	background-color: var(--color-orange);
	border-radius: 8px;
	margin-top: 25px;
	border: none;
	padding: 15px;

	display: flex;
	flex-flow: row;
	align-items: center;

	transition: transform 200ms, background-color 200ms;
	color: var(--color-dark);

	&:hover {
		transform: scale(1.03);
		filter: brightness(0.8);
	}
`;

export const Text = styled.p`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;
	color: var(--color-dark);
	margin-left: 10px;
`;

export const IconContainer = styled.span`
	svg {
		width: 25px;
		height: 25px;
		fill: var(--color-dark);
	}
`;
