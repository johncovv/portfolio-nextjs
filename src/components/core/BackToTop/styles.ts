import styled from 'styled-components';

import { shade } from 'polished';

export const Content = styled.div`
	position: fixed;
	bottom: -3px;
	right: -3px;

	padding: 15px 10px 10px 15px;
	border-top-left-radius: 50px;
	background-color: ${({ theme }) => theme.background.secondary};

	box-shadow: ${({ theme }) => theme.shadow.default};

	transition: background-color 200ms;
	cursor: pointer;

	&:active {
		background-color: ${({ theme }) => shade(0.2, theme.background.secondary)};
	}

	/* mobile */
	@media screen and (max-width: 409px) {
		bottom: calc(-3px + 75px);
	}
`;
