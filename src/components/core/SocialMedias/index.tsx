import { FunctionComponent, HtmlHTMLAttributes } from 'react';

import {
	Content,
	DiscordButton,
	EmailButton,
	FacebookButton,
	LinkedinButton,
	TwitterButton,
	WhatsappButton,
} from './styles';

interface SocialMediasProps extends HtmlHTMLAttributes<HTMLDivElement> {
	sizeIcons?: number;
	showEmail?: boolean;
}

const SocialMedias: FunctionComponent<SocialMediasProps> = ({
	sizeIcons = 30,
	showEmail,
	...rest
}: SocialMediasProps) => {
	function handleOpenLink(link: string): void {
		window.open(link, '_blank');
	}

	return (
		<Content {...rest}>
			{showEmail && (
				<EmailButton
					size={sizeIcons}
					onClick={() => {
						handleOpenLink('mailto:contato@johncovv.com');
					}}
				/>
			)}
			<LinkedinButton
				size={sizeIcons}
				onClick={() => {
					handleOpenLink('https://www.linkedin.com/in/johncovv/');
				}}
			/>
			<TwitterButton
				size={sizeIcons}
				onClick={() => {
					handleOpenLink('https://twitter.com/johncovv');
				}}
			/>
			<DiscordButton
				size={sizeIcons}
				onClick={() => {
					handleOpenLink('https://discord.com/users/426609168217276417');
				}}
			/>
		</Content>
	);
};

export default SocialMedias;
