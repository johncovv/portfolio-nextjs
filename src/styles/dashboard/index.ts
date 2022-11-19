import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';

export const Content = styled.div`
	position: relative;
`;

export const LogoTitle = styled.div`
	& > p {
		font-size: 18px;
	}

	& > p.primary {
		font-size: 55px;
		font-family: 'JetBrains Mono', monospace;
		font-weight: 700;

		@media (max-width: 767px) {
			display: flex;
			flex-flow: column nowrap;

			& > span {
				margin-left: 0 !important;
				margin-bottom: 10px;
			}
		}

		& > span {
			font-size: 18px;
			color: ${({ theme }) => theme.colors.orange};
			margin-left: 10px;
		}
	}

	margin-bottom: 50px;
`;

export const About = styled.p`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;
	font-size: 18px;

	color: ${({ theme }) => theme.text.secondary};
	margin-bottom: 30px;

	span {
		color: ${({ theme }) => theme.text.primary};
	}

	span.primary {
		color: ${({ theme }) => theme.colors.orange};
	}
`;

type ITitleProps = {
	paddingTop?: number;
	marginTop?: number;
};

export const Title = styled.p<ITitleProps>`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;
	font-size: 22px;

	padding-top: ${(props) => `${props.paddingTop}px` ?? 0};
	margin-top: ${(props) => `${props.marginTop}px` ?? '25px'};

	/* mobile */
	@media screen and (max-width: 409px) {
		padding-top: 4rem !important;
	}
`;

export const OthersItem = styled(ReactMarkdown)`
	p {
		color: ${({ theme }) => theme.text.secondary};
	}

	font-family: 'JetBrains Mono', monospace;
`;
