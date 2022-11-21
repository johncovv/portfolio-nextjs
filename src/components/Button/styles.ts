import styled from 'styled-components';
import Link from 'next/link';

export const Content = styled(Link)`
	background-color: var(--color-orange);
	border-radius: 8px;
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
`;

export const IconContainer = styled.span`
	svg {
		fill: var(--color-dark);
		margin-right: 10px;
	}
`;
