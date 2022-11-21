import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const Content = styled.div``;

export const TitleContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

export const Title = styled.h1`
	margin-bottom: 1.5rem;
	line-break: auto;
`;

export const ProjectIcon = styled.div`
	margin-right: 0.5rem;
	width: 3rem;

	img {
		width: 100%;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-bottom: 25px;
`;

export const Button = styled.button`
	font-family: 'JetBrains Mono', monospace;
	font-weight: 700;

	background-color: var(--color-orange);
	border: none;
	color: var(--color-dark);
	border-radius: 8px;
	padding: 10px;
	font-size: 12px;
	display: flex;
	align-items: center;
	transition: transform 100ms, background-color 200ms;

	&:not(:last-child) {
		margin-right: 15px;
	}

	@media (max-width: 767px) {
		&:not(:last-child) {
			margin-bottom: 15px;
		}

		&:last-child {
			margin-bottom: auto;
		}
	}

	&:hover {
		transform: scale(1.05);
		filter: brightness(0.8);
	}

	svg {
		margin-right: 5px;
	}
`;

export const About = styled(ReactMarkdown)`
	white-space: pre-line;
	color: var(--text-secondary);

	& strong {
		color: var(--text-primary);
	}
`;

interface AlertProps {
	type: 'error' | 'warning' | 'success';
}

const alertTypes = {
	error: '#ff3434',
	warning: '#ff8934',
	success: '#34ff60',
};

export const Alert = styled.p<AlertProps>`
	font-size: 14px;
	color: ${({ type }) => alertTypes[type]};
	margin-bottom: 10px;

	display: flex;
	align-items: center;

	svg {
		margin-right: 5px;
	}
`;

// partners

export const PartnersGroup = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-top: 25px;
`;

export const PartnersGroupTitle = styled.h4``;

export const Partner = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-left: 15px;
	margin-top: 10px;
`;

export const PartnerName = styled.a.attrs({
	rel: 'noopener noreferrer',
	target: '_blank',
})`
	color: var(--color-orange);
`;

export const PartnerJob = styled.p`
	color: var(--text-secondary);
`;

// technologies

export const TechnologiesGroup = styled.div`
	display: flex;
	flex-flow: column nowrap;

	margin-top: 25px;
`;

export const TechnologiesTitle = styled.h4``;

export const Technologie = styled.a.attrs({
	rel: 'noopener noreferrer',
	target: '_blank',
})`
	color: var(--color-orange);
	margin-top: 5px;
	width: fit-content;

	transition: margin-left 200ms;

	&:hover {
		margin-left: 5px;
	}
`;
