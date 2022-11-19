import styled from 'styled-components';
import Link from 'next/link';

import { shade } from 'polished';

import LogoSvg from '../../../assets/static/extended-logo.svg';
import MobileLogoSvg from '../../../assets/static/small-logo.svg';

export const Content = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;

	background: ${({ theme }) => theme.background.secondary};
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	height: 75px;

	/* mobile */
	@media screen and (max-width: 409px) {
		top: auto;
		bottom: 0;
	}
`;

export const Container = styled.div`
	max-width: 1000px;
	height: 100%;
	margin: 0 auto;
	padding: 0 20px;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
`;

export const LogoContainer = styled.div`
	display: block;
	margin-left: -6px;
`;

export const Logo = styled(LogoSvg)`
	transition: fill 200ms, transform 200ms;
	cursor: pointer;

	width: 10rem;
	height: 45px;

	& .extended-logo-default {
		fill: ${({ theme }) => theme.text.primary};
	}

	& .extended-logo-primary {
		fill: ${({ theme }) => theme.colors.orange};
	}

	/* mobile */
	@media screen and (max-width: 409px) {
		display: none;
	}

	/* tablet & desktop  */
	@media screen and (min-width: 410px) {
		display: block;

		@media screen and (max-width: 768px) {
			width: 8rem;
		}
	}

	&:hover {
		fill: ${({ theme }) => shade(0.2, theme.colors.orange)};
		transform: scale(1.2);
	}
`;

export const MobileLogo = styled(MobileLogoSvg)`
	transition: fill 200ms, transform 200ms;
	cursor: pointer;
	height: 45px;

	.logo-foreground-letter-J-top,
	.logo-foreground-letter-J-bottom {
		fill: ${({ theme }) => theme.colors.orange};
	}

	.logo-foreground-letter-C {
		fill: ${({ theme }) => theme.text.primary};
	}

	/* mobile */
	@media screen and (max-width: 409px) {
		display: block;
	}

	/* tablet & desktop  */
	@media screen and (min-width: 410px) {
		display: none;
	}

	&:hover {
		fill: ${({ theme }) => shade(0.2, theme.colors.orange)};
		transform: scale(1.2);
	}
`;

export const NavItems = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

export const Item = styled(Link)`
	all: unset;
	margin-right: 25px;
	cursor: pointer;
	color: ${({ theme }) => theme.text.secondary};
	height: fit-content;
`;

export const TogglerButton = styled.button`
	all: unset;
	width: fit-content;
	height: fit-content;
	cursor: pointer;

	svg {
		fill: ${({ theme }) => theme.colors.orange};
	}
`;
