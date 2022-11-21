import Head from 'next/head';

import { Content } from '../styles/404.styles';
import Button from '../components/Button';

export default function FourOh4() {
	return (
		<>
			<Head>
				<title>404 - Page Not Found</title>

				<link href="https://fonts.googleapis.com/css?family=Bevan&display=swap" rel="stylesheet" />
			</Head>

			<Content>
				<p>
					HTTP: <span>404</span>
				</p>

				<code>
					<span>this_page</span>.<em>not_found</em> = true;
				</code>

				<code>
					<span>if</span> (<b>you_spelt_it_wrong</b>){'{ '}
					<span>try_again()</span>;{' }'}
				</code>

				<code>
					<span>
						else if (<b>we_screwed_up</b>)
					</span>
					{'{ '}
					<em>alert</em>(<i>{`"A pagina que você esta procurando não existe."`}</i>);
					<span> window</span>.<em>location</em> = home;
					{' }'}
				</code>

				<div className="center">
					<Button text="Voltar para tela inicial" href="/" target="_self" />
				</div>
			</Content>
		</>
	);
}
