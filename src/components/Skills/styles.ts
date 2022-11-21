import styled from 'styled-components';

export const Content = styled.div`
	margin-top: 25px;

	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto;
	gap: 25px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

export const Skill = styled.div`
	background-color: var(--background-secondary);
	border-radius: 8px;

	@media (min-width: 768px) {
		height: 0;
		padding-top: 100%;
	}

	&:first-child {
		@media (min-width: 768px) {
			grid-column-start: 1;
			grid-column-end: 3;
			grid-row-start: 1;
			grid-row-end: 3;

			& > div > p {
				font-size: 18px;
			}
		}

		@media (min-width: 1024px) {
			& > div > p {
				font-size: 16px;
			}
		}
	}

	position: relative;

	transition: transform 100ms;

	@media (min-width: 768px) {
		&:not(:first-child) {
			cursor: pointer;

			&:hover {
				transform: scale(1.03);
			}
		}
	}
`;

export const Container = styled.div`
	@media (min-width: 768px) {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	padding: 10px;

	display: flex;
	flex-flow: column nowrap;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	svg {
		margin-right: 10px;
	}
`;

export const Description = styled.p`
	color: var(--text-secondary);
	flex-grow: 1;
	white-space: pre-wrap;

	font-size: 16px;

	@media (min-width: 1024px) {
		font-size: 12px;
	}
`;

interface ButtonContainerAttr {
	isFirst: boolean;
}

export const ButtonContainer = styled.div<ButtonContainerAttr>`
	display: ${(props) => (props.isFirst ? 'flex' : 'none')};
	@media (max-width: 767px) {
		display: flex !important;
	}

	margin-top: 10px;
`;
