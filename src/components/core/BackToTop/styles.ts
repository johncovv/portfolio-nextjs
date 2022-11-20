import styled from 'styled-components';

import { shade } from 'polished';

export const Content = styled.div`
	position: fixed;
	bottom: -3px;
	right: -3px;

	padding: 15px 10px 10px 15px;
	border-top-left-radius: 50px;
	background-color: var(--background-secondary);

	box-shadow: var(--shadow-default);

	transition: background-color 200ms;
	cursor: pointer;

	&:active {
		background-color: rgba(var(--background-secondary), 0.8);
	}

	/* mobile */
	@media screen and (max-width: 409px) {
		bottom: calc(-3px + 75px);
	}
`;
