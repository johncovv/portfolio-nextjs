import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	[data-theme='dark'] {
		--color-orange: rgb(255,137,52);
		--color-white: rgb(255,255,255);
		--color-dark: rgb(23,23,23);
		--color-red: rgb(255,52,52);

		--background-primary: rgb(23,23,23);
		--background-secondary: rgb(40,41,41);

		--text-primary: rgb(255,255,255);
		--text-secondary: rgb(170,170,170);

		--shadow-default: 5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.2);

		--dark-display: block;
		--light-display: none;

		--404-text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
		--404-foreground: rgb(0, 0, 0);
		--404-color: transparent;
	}

	[data-theme='light'] {
		--color-orange: rgb(255,137,52);
		--color-white: rgb(255,255,255);
		--color-dark: rgb(23,23,23);
		--color-red: rgb(255,52,52);

		--background-primary: rgb(243 240 232);
		--background-secondary: rgb(255,255,255);

		--text-primary: rgb(23,23,23);
		--text-secondary: (105,105,105);

		--shadow-default: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1);

		--dark-display: none;
		--light-display: block;

		--404-text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
		--404-foreground: rgb(255, 255, 255);
		--404-color: rgb(255, 255, 255);
	}

	::selection {
		background-color: rgba(255, 137, 52, 0.31);
	}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	#__next {
    flex-direction: column;
		min-height: 100vh;
    display: flex;
	}

	html, body {
		scroll-behavior: smooth !important;
	}

	body {
		background-color: var(--background-primary);
		color: var(--text-primary);
		font-size: 16px;
		line-height: 1.35;

		::-webkit-scrollbar {
			width: 0.75rem;
		}

		::-webkit-scrollbar-track {
			background-color: var(--background-secondary);
		}

		::-webkit-scrollbar-thumb {
			background-color: var(--color-orange);

			border-top-left-radius: 0.5rem;
			border-bottom-left-radius: 0.5rem;
		}

		#root {
			padding-top: 75px;

			/* mobile */
			@media screen and (max-width: 409px) {
				padding-top: 0px;
				padding-bottom: 75px;
			}
		}
	}

	body, button, a {
		font-family: 'JetBrains Mono', monospace;
	}

	a {
		color: var(--text-primary);
		width: fit-content;

		&:hover {
			text-decoration: underline;
		}
	}

	button, a {
		text-decoration: none;
		cursor: pointer;
	}
`;

export const AppContainer = styled.div`
	position: relative;
	flex-grow: 1;
	width: 100%;

	padding: calc(50px + 75px) 20px 0;

	/* mobile */
	@media screen and (max-width: 409px) {
		padding: calc(50px) 20px 0 !important;
	}

	/* center container */
	margin: 0 auto;
	max-width: 1000px;
	min-height: calc(100vh - (75px + (25px + 100px + 50px)));
`;
