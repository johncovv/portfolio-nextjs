import styled from 'styled-components';

import { IoLogoFacebook, IoLogoTwitter, IoMdMail } from 'react-icons/io';

import { FaDiscord, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	svg {
		transition: transform 200ms;

		&:hover {
			cursor: pointer;
			transform: scale(1.2);
		}

		&:not(:first-child) {
			margin-left: 10px;
		}
	}
`;

export const FacebookButton = styled(IoLogoFacebook)``;

export const TwitterButton = styled(IoLogoTwitter)``;

export const DiscordButton = styled(FaDiscord)``;

export const WhatsappButton = styled(FaWhatsapp)``;

export const LinkedinButton = styled(FaLinkedin)``;

export const EmailButton = styled(IoMdMail)``;
