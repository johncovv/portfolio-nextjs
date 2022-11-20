import { useRouter } from 'next/router';
import React from 'react';

import { IoMdMoon, IoMdSunny } from 'react-icons/io';

import { Container, Content, Item, Logo, LogoContainer, MobileLogo, NavItems, TogglerButton } from './styles';

interface HeaderProps {
	isDark: boolean;
	toggleTheme(): void;
}

const Header: React.FunctionComponent<HeaderProps> = ({ isDark, toggleTheme }: HeaderProps) => {
	const router = useRouter();

	const handleLogoClick = (): void => {
		router.push('/');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Content>
			<Container>
				<LogoContainer>
					<Logo onClick={handleLogoClick} />
					<MobileLogo onClick={handleLogoClick} />
				</LogoContainer>

				<NavItems>
					<Item href={{ pathname: '/', hash: 'skills' }}>Skills</Item>
					<Item href={{ pathname: '/', hash: 'projects' }}>Projetos</Item>

					<TogglerButton onClick={toggleTheme}>
						{isDark ? <IoMdSunny size={29} /> : <IoMdMoon size={29} />}
					</TogglerButton>
				</NavItems>
			</Container>
		</Content>
	);
};

export default Header;
