import styled, { css } from 'styled-components';
import Image from 'next/image';

import { VscChromeClose } from 'react-icons/vsc';

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

export const Content = styled.div`
	margin-top: 50px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	gap: 25px;

	@media (min-width: 560px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

export const ImageItem = styled.div`
	height: 0;
	padding-top: 100%;
	position: relative;
	cursor: pointer;

	&:first-child {
		@media (min-width: 768px) {
			grid-column-start: 1;
			grid-column-end: 3;
			grid-row-start: 1;
			grid-row-end: 3;
		}
	}
`;

export const ImageItemContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const Source = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;

	transition: transform 200ms;

	box-shadow: ${({ theme }) => theme.shadow.default};
	border-radius: 8px;

	background-image: url('/assets/loading.gif');
	background-size: 20px;
	background-repeat: no-repeat;
	background-position: center;

	&:hover {
		transform: scale(1.05);
	}
`;

// popup image

interface PopupAttr {
	active: boolean;
}

export const PopupContent = styled.div<PopupAttr>`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10000;

	transition: 200ms;
	backdrop-filter: blur(7px);
	background-color: rgba(0, 0, 0, 0.7);

	padding: 70px 1.5rem 1.5rem;

	@media (min-width: 1240px) {
		padding: 1.5rem !important;
	}

	${({ active }) =>
		active
			? css`
					opacity: 1;
			  `
			: css`
					opacity: 0;
					pointer-events: none;
			  `}

	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column nowrap;
`;

export const PopupCloseButton = styled(VscChromeClose).attrs({
	size: 50,
})`
	top: 10px;
	right: 10px;
	z-index: 10000;
	cursor: pointer;
	position: absolute;

	transition: transform 200ms;

	fill: ${({ theme }) => theme.colors.orange};
	filter: drop-shadow(0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.75));

	&:hover {
		transform: scale(1.1);
	}
`;

export const PopupImageContainer = styled.div`
	max-width: 1024px;
	width: 100%;

	height: calc(100% - 50px - 1rem - 1.5rem - 0.5rem);
	@media (min-width: 768px) {
		height: calc(100% - 100px - 1rem - 1.5rem - 0.5rem);
	}

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	user-select: none;
`;

export const ImageScrollableContainer = styled.div`
	height: fit-content;
	max-height: 100%;

	border-radius: 8px;
	overflow-y: auto;

	position: relative;

	&::before {
		content: '';
		position: fixed;
		display: block;
		height: 20%;

		pointer-events: none;

		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1000;

		background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.4));
	}

	&::-webkit-scrollbar {
		width: 0.75rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.orange};

		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}

	&::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.background.secondary};

		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
`;

export const PopupImage = styled.img`
	max-width: 100%;
	display: block;
`;

// dots

export const DotsContainer = styled.div`
	margin-top: 1.5rem;

	display: flex;
	align-items: center;
	flex-flow: row nowrap;

	span {
		border: none;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.5);

		cursor: pointer;
		transition: box-shadow 100ms;

		&.activated {
			background-color: ${({ theme }) => theme.colors.orange};
		}

		&:hover {
			box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.orange};
		}

		&:not(:last-child) {
			margin-right: 0.3rem;
		}
	}
`;

// thumbnail

interface ArrowAttr {
	$active: boolean;
}

export const PopupArrayPrevious = styled(IoIosArrowDropleftCircle).attrs({
	size: 30,
})<ArrowAttr>`
	position: absolute;
	z-index: 1000;
	top: 50%;
	left: 0.3rem;
	transform: translateY(-50%);

	transition: fill 200ms;

	fill: ${({ theme }) => theme.colors.white};
	filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));

	${({ $active }) =>
		$active
			? css`
					cursor: pointer;
					&:hover {
						fill: ${({ theme }) => theme.colors.orange};
					}
			  `
			: css`
					opacity: 0.3;
			  `}
`;

export const PopupArrayNext = styled(IoIosArrowDroprightCircle).attrs({
	size: 30,
})<ArrowAttr>`
	position: absolute;
	z-index: 1000;
	top: 50%;
	right: 0.3rem;
	transform: translateY(-50%);

	transition: fill 200ms;

	fill: ${({ theme }) => theme.colors.white};
	filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));

	${({ $active }) =>
		$active
			? css`
					cursor: pointer;
					&:hover {
						fill: ${({ theme }) => theme.colors.orange};
					}
			  `
			: css`
					opacity: 0.3;
			  `}
`;

export const ThumbnailsMainContainer = styled.div`
	height: 50px;

	@media (min-width: 768px) {
		height: 100px;
	}

	position: relative;
	width: fit-content;

	padding: 0 2.5rem;

	margin-top: 1rem;

	display: flex;
	justify-content: center;
	flex-flow: row nowrap;
`;

export const ThumbnailsContainer = styled.div`
	height: 100%;
	width: 100%;

	display: flex;
	flex-flow: row nowrap;

	max-width: calc((75px * 3) + (1rem * 2));

	@media (min-width: 560px) {
		max-width: calc((75px * 5) + (1rem * 4));
	}

	@media (min-width: 768px) {
		max-width: calc((150px * 4) + (1rem * 3));
	}

	@media (min-width: 1024px) {
		max-width: calc((150px * 5) + (1rem * 4));
	}

	overflow-x: scroll;

	&::-webkit-scrollbar {
		display: none !important;
	}
`;

interface ThumbnailButtonAttr {
	isActivated?: boolean;
	backgroundUrl: string;
}

export const ThumbnailButton = styled.div<ThumbnailButtonAttr>`
	height: 100%;

	min-width: 75px;
	max-width: 75px;

	@media (min-width: 768px) {
		min-width: 150px;
		max-width: 150px;
	}

	cursor: pointer;

	background-image: url(${(props) => props.backgroundUrl});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	transition: box-shadow 200ms ease-in-out;

	border-radius: 8px;
	box-shadow: inset 0px 0px 0px 3px ${({ isActivated, theme }) => (isActivated ? theme.colors.orange : 'transparent')};

	&:not(:last-child) {
		margin-right: 0.5rem;
	}

	&:not(:first-child) {
		margin-left: 0.5rem;
	}
`;
