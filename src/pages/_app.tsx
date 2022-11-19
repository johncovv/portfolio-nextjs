import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { useState } from 'react';

// themes
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

// styles
import GlobalStyles, { AppContainer } from '../styles/global.styles';

// components
import BackToTop from '../components/core/BackToTop';
import Footer from '../components/core/Footer';
import Header from '../components/core/Header';

enum ETheme {
	DARK = 'DARK',
	LIGHT = 'LIGHT',
}

export default function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useState<ETheme>(ETheme.DARK);

	function toggleTheme() {
		setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);
	}

	return (
		<ThemeProvider theme={theme === ETheme.DARK ? darkTheme : lightTheme}>
			<GlobalStyles />

			<Header isDark={theme === ETheme.DARK} toggleTheme={toggleTheme} />

			<AppContainer>
				<Component {...pageProps} />
			</AppContainer>

			<Footer />

			<BackToTop />
		</ThemeProvider>
	);
}

