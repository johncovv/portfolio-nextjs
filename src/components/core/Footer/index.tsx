import type { FunctionComponent } from 'react';
import Link from 'next/link';

import SocialMedias from '../SocialMedias';

import { Content, Info } from './styles';

const Footer: FunctionComponent = () => (
	<Content>
		<Info>
			Desenvolvido por{' '}
			<Link href="https://twitter.com/johncovv" rel="noopener noreferrer">
				@johncovv
			</Link>{' '}
			- 2020 a {new Date().getFullYear()}
		</Info>

		<SocialMedias sizeIcons={25} showEmail />
	</Content>
);

export default Footer;
