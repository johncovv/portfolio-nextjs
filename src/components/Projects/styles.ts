import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Image from 'next/image';

export const Content = styled.div`
	margin-top: 25px;

	display: grid;
	grid-template-columns: 100%;
	gap: 25px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, calc((100% / 2) - calc(25px / 2)));
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, calc((100% / 3) - calc(50px / 3)));
	}
`;

export const Project = styled.div`
	position: relative;

	background-color: var(--background-secondary);
	border-radius: 8px;
	padding: 10px;

	display: flex;
	flex-flow: column nowrap;

	&:first-child {
		@media (min-width: 768px) {
			grid-column-start: 1;
			grid-column-end: 3;
		}

		@media (min-width: 1024px) {
			grid-column-start: 1;
			grid-column-end: 3;
		}
	}
`;

export const Title = styled.p`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;

	margin-bottom: 15px;
	display: flex;
	align-items: center;
`;

export const Icon = styled(Image)`
	width: 20px;
	margin-right: 10px;
`;

export const Description = styled(ReactMarkdown)`
	font-size: 14px;
	color: var(--text-secondary);

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5; /* number of lines to show */
	-webkit-box-orient: vertical;

	white-space: pre-line;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	margin-top: auto;
`;

export const ButtonLink = styled.button`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;

	background-color: var(--color-orange);
	margin-top: 15px;
	border: none;
	color: var(--color-dark);
	border-radius: 8px;
	margin-right: 15px;
	padding: 10px;
	font-size: 12px;

	svg {
		margin-right: 5px;
	}

	display: flex;
	align-items: center;

	transition: transform 100ms, background-color 200ms;

	&:hover {
		transform: scale(1.05);
		filter: brightness(0.8);
	}
`;

export const ButtonProject = styled.button`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;

	background-color: var(--color-orange);
	margin-top: 15px;
	border: none;
	color: var(--color-dark);
	border-radius: 8px;
	padding: 10px;
	font-size: 12px;

	svg {
		margin-right: 5px;
	}

	display: flex;
	align-items: center;

	transition: transform 100ms, background-color 200ms;

	&:hover {
		transform: scale(1.05);
		filter: brightness(0.8);
	}
`;
