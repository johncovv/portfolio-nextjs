import type { AppProps } from 'next/app';

// styles
import GlobalStyles, { AppContainer } from '../styles/global.styles';

// components

import BackToTop from '../components/core/BackToTop';
import Footer from '../components/core/Footer';
import Header from '../components/core/Header';

// functions
import Loading from '../functions/loading';

export default function App({ Component, pageProps }: AppProps) {
	function toggleTheme() {
		window.dispatchEvent(new CustomEvent('theme-change'));
	}

	return (
		<>
			<GlobalStyles />

			<Header toggleTheme={toggleTheme} />

			<AppContainer>
				<Loading>
					<Component {...pageProps} />
				</Loading>
			</AppContainer>

			<Footer />

			<BackToTop />
		</>
	);
}
