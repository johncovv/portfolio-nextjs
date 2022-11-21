import Head from 'next/head';

import { FaGithub } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

import { About, Content, LogoTitle, OthersItem, Title } from '../styles/dashboard.styles';
import projectsList, { IProject } from '../data/projects';
import skillsList, { ISkill } from '../data/skills';
import Button from '../components/Button';
import EmailLink from '../components/EmailLink';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SocialMedias from '../components/core/SocialMedias';

interface HomeProps {
	skills: Array<ISkill>;
	projects: Array<IProject>;
}

export async function getStaticProps() {
	return {
		props: {
			projects: projectsList,
			skills: skillsList,
		},
	};
}

export default function Home(props: HomeProps) {
	return (
		<>
			<Head>
				<title>Jonathas Oliveira</title>
				<meta name="description" content="Personal portfolio of John Covv (Jonathas Oliveira)" />
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
