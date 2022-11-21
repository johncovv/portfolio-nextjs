import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import { IoIosAlert, IoLogoGithub } from 'react-icons/io';
import { DiPhotoshop } from 'react-icons/di';
import { SiAdobexd } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { BiLink } from 'react-icons/bi';

import projectsList, { IProject } from '../../data/projects';
import ProjectGallery from '../../components/Gallery';
import {
	About,
	Alert,
	Button,
	ButtonContainer,
	Content,
	Partner,
	PartnerJob,
	PartnerName,
	PartnersGroup,
	PartnersGroupTitle,
	ProjectIcon,
	Technologie,
	TechnologiesGroup,
	TechnologiesTitle,
	Title,
	TitleContainer,
} from './styles';

interface ProjectProps {
	value: IProject;
}

export async function getStaticPaths() {
	return {
		paths: projectsList.map(({ id }) => ({ params: { id } })),
		fallback: false,
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const project = projectsList.find((project) => project.id === context.params?.id);

	if (!project) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			value: project,
		},
	};
}

export default function ProjectPage(props: ProjectProps) {
	const project = props.value;

	return (
		<>
			<Head>
				<title>{project.name} | Portfólio - Jonathas Oliveira</title>
			</Head>

			<Content>
				{project.alert && (
					<Alert type={project.alert.type}>
						<IoIosAlert size={22} /> {project.alert.message}
					</Alert>
				)}

				<TitleContainer>
					{project.icon && (
						<ProjectIcon>
							<Image src={project.icon.source} alt={project.icon.source} width={48} height={48} />
						</ProjectIcon>
					)}

					<Title>{project.name}</Title>
				</TitleContainer>

				<ButtonContainer>
					{project.url && (
						<Button onClick={() => window.open(project.url, '_blank')}>
							<BiLink size={22} color="#282929" />
							Visualizar
						</Button>
					)}

					{project.github && (
						<Button onClick={() => window.open(project.github, '_blank')}>
							<IoLogoGithub size={22} color="#282929" />
							Abrir Projeto
						</Button>
					)}

					{project.uiDesign && (
						<Button onClick={() => window.open(project.uiDesign?.url, '_blank')}>
							{project.uiDesign?.type === 'Figma' && <CgFigma size={22} color="#282929" />}
							{project.uiDesign?.type === 'Adobe XD' && <SiAdobexd size={22} color="#282929" />}
							{project.uiDesign?.type === 'Photoshop' && <DiPhotoshop size={22} color="#282929" />}
							Abrir {project.uiDesign.type}
						</Button>
					)}
				</ButtonContainer>

				<About linkTarget="_blank">{project.description.replace(/\n/g, '&NewLine;').replace(/\s/g, ' ')}</About>

				{project.technologies && project.technologies.length > 0 && (
					<TechnologiesGroup>
						<TechnologiesTitle>Tecnologias usadas:</TechnologiesTitle>

						{project.technologies.map(({ name, url }) => (
							<Technologie key={name} href={url}>
								- {name}
							</Technologie>
						))}
					</TechnologiesGroup>
				)}

				{project.partners && project.partners.length > 0 && (
					<PartnersGroup>
						<PartnersGroupTitle>Parceiros no projeto:</PartnersGroupTitle>

						{project.partners.map(({ name, url, job }) => (
							<Partner key={name}>
								<PartnerName href={url}>{name}</PartnerName>

								<PartnerJob>- {job}</PartnerJob>
							</Partner>
						))}
					</PartnersGroup>
				)}

				{project.images && <ProjectGallery images={project.images} />}
			</Content>
		</>
	);
}
