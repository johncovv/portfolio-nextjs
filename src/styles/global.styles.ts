import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	::selection {
		background-color: rgba(255, 137, 52, 0.31);
	}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html, body {
		scroll-behavior: smooth !important; 
	}

	body {
		background-color: ${({ theme }) => theme.background.primary};
		color: ${({ theme }) => theme.text.primary};
		font-size: 16px;
		line-height: 1.35;

		::-webkit-scrollbar {
			width: 0.75rem;
		}

		::-webkit-scrollbar-track {
			background-color: ${({ theme }) => theme.background.secondary};
		}

		::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.colors.orange};

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
		color: ${({ theme }) => theme.text.primary};
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
