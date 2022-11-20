import Head from 'next/head';

import { IoLocationSharp } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';

import { About, Content, LogoTitle, OthersItem, Title } from '../styles/dashboard';
import SocialMedias from '../components/core/SocialMedias';
import EmailLink from '../components/dashboard/EmailLink';
import Projects from '../components/dashboard/Projects';
import Skills from '../components/dashboard/Skills';
import Button from '../components/Button';

import projectsList from '../data/projects';
import skillsList from '../data/skills';

export async function getStaticProps() {
	return {
		props: {
			projects: projectsList,
			skills: skillsList,
		},
	};
}

export default function Home(props: any) {
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
						sou Desenvolvedor Web Full Stack, de <IoLocationSharp /> Guariba-SP.
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

				<Button text="Visite meu Github" icon={FaGithub}></Button>

				{/* contact */}
				<Title style={{ marginTop: 25 }}>Contato</Title>
				<EmailLink mail="contato@johncovv.com" />
				<SocialMedias style={{ marginTop: 15 }} />

				{/* skills */}
				<Title paddingTop={130} id="skills">
					Skills
				</Title>

				<Skills value={props.skills} />

				{/* projects */}
				<Title paddingTop={130} id="projects">
					Projetos
				</Title>

				<Projects value={props.projects} />
			</Content>
		</>
	);
}

