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
				<title>Portfólio | Jonathas Oliveira</title>
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
						Desenvolvedor Sênior Full Stack, residindo em <IoLocationSharp /> São Bernardo do Campo-SP.
					</p>
				</LogoTitle>

				{/* about */}
				<About>
					Entrei na área de Desenvolvimento em 2018, neste tempo passei por várias tecnologias, como o <span>C#</span> e{' '}
					<span>PHP</span>, até que me encontrei na stack <span className="primary">Full Javascript</span>.
					<br />
					<br />
					Atualmente trabalho em projetos <span className="primary">100% Typescript</span>, onde desenvolvo aplicações
					web desde front-end com <span>React</span>, <span>Angular</span> e <span>NextJs</span>, com back-end com{' '}
					<span>NodeJs</span>.
				</About>

				<OthersItem linkTarget="_blank">
					📌 Trabalhando em conjunto com [Bnp Soluções em TI](https://www.bnpsolucoes.com.br/).
				</OthersItem>

				<Button
					text="Visite meu Github"
					icon={FaGithub}
					href="https://github.com/johncovv"
					target="_blank"
					style={{ marginTop: '1.5rem' }}
				/>

				{/* contact */}
				<Title style={{ marginTop: 25 }}>Contato</Title>
				<EmailLink mail="contact@johncovv.dev" />
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
