import styled from 'styled-components';

export const Content = styled.div`
	width: 100%;
	max-width: 1000px;
	padding: 0 20px;
	margin: 100px auto 120px;

	display: flex;
	flex-flow: column nowrap;
	font-size: 12px;

	@media (min-width: 768px) {
		flex-flow: row nowrap;
		font-size: 16px;
		justify-content: space-between;
		margin: 100px auto 50px;
	}
`;

export const Info = styled.p`
	span {
		color: var(--text-primary);
	}

	color: var(--text-secondary);

	margin-bottom: 15px;
	@media (min-width: 768px) {
		margin-bottom: 0;
	}
`;
