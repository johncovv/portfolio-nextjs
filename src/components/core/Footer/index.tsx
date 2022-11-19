import Link from 'next/link';
import React from 'react';

import SocialMedias from '../SocialMedias';

import { Content, Info } from './styles';

const Footer: React.FunctionComponent = () => (
	<Content>
		<Info>
			<Link href="https://twitter.com/johncovv" rel="noopener noreferrer">
				@johncovv
			</Link>{' '}
			- Desenvolvido em 2020/2021
		</Info>

		<SocialMedias sizeIcons={25} showEmail />
	</Content>
);

export default Footer;
