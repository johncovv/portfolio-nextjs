import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import type { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import { Container, Content, Item, Logo, LogoContainer, MobileLogo, NavItems, TogglerButton } from './styles';

interface HeaderProps {
	toggleTheme(): void;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
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

					<TogglerButton onClick={props.toggleTheme}>
						<span className="dark-button">
							<IoMdSunny size={29} />
						</span>
						<span className="light-button">
							<IoMdMoon size={29} />
						</span>
					</TogglerButton>
				</NavItems>
			</Container>
		</Content>
	);
};

export default Header;
