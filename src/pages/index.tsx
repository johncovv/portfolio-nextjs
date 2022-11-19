import Head from 'next/head';

import { About, Content, LogoTitle, OthersItem, Title } from '../styles/dashboard';

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Personal portfolio of John Covv (Jonathas Oliveira)" />

				<title>Jonathas Oliveira</title>
			</Head>

			<Content>
				{/* intro */}
				<LogoTitle>
					<p>Olá, me chamo</p>
					<p className="primary">
						Jonathas Oliveira<span>(johncovv)</span>
					</p>
					<p>
						{/* sou Desenvolvedor Web Full Stack, de <IoLocationSharp /> Guariba-SP. */}
					</p>
				</LogoTitle>

				{/* about */}
				<About>
					Trabalho na área de Desenvolvimento Web desde 2018, neste tempo passei por várias tecnologias, como{' '}
					<span>PHP</span>, <span>Vue</span> até que me encontrei na stack{' '}
					<span className="primary">Full Javascript</span>, com desenvolvimento utilizando tecnologias{' '}
					<span>Javascript</span> como <span>NodeJs</span>, <span>React</span> e <span>React Native</span>.
				</About>

				<OthersItem linkTarget="_blank">
					📌 Atualmente prestando serviços a [Bnp Soluções em TI](https://www.bnpsolucoes.com.br/).
				</OthersItem>

				{/* <GithubButton>Visite meu Github</GithubButton> */}

				{/* contact */}
				<Title style={{ marginTop: 25 }}>Contato</Title>
				{/* <EmailButton>contato@johncovv.com</EmailButton> */}

				{/* <SocialMedias style={{ marginTop: 15 }} /> */}

				{/* skills */}
				<Title paddingTop={130} id="skills">
					Skills
				</Title>

				{/* <Skills /> */}

				{/* projects */}
				<Title paddingTop={130} id="projects">
					Projetos
				</Title>

				{/* <Projects /> */}
			</Content>
		</>
	);
}

