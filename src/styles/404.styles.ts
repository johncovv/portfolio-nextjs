import styled from 'styled-components';

export const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > p {
		font-family: 'Bevan', cursive;
		font-size: 130px;
		text-align: center;
		letter-spacing: 5px;
		background-color: black;
		color: transparent;
		text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;

		span {
			font-size: 1.2em;
		}
	}

	code {
		color: #bdbdbd;
		text-align: center;
		display: block;
		font-size: 16px;
		margin: 0 30px 25px;

		span {
			color: #ff8934;
		}

		i {
			color: #b5bd68;
		}

		em {
			color: #b294bb;
			font-style: unset;
		}

		b {
			color: #81a2be;
			font-weight: 500;
		}
	}

	@media screen and (max-width: 880px) {
		& > p {
			font-size: 14vw;
		}
	}
`;
