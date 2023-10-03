import type { GetStaticPropsContext } from 'next';
import type { FunctionComponent } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { IoIosAlert, IoLogoGithub } from 'react-icons/io';
import type { IconBaseProps } from 'react-icons';
import { DiPhotoshop } from 'react-icons/di';
import { SiAdobexd } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { BiLink } from 'react-icons/bi';

import projectsList, { IProject } from '../../data/projects';
import ProjectGallery from '../../components/Gallery';
import Button from '../../components/Button';
import {
	About,
	Alert,
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

	const renderUiIcon: FunctionComponent<IconBaseProps> = (props: IconBaseProps) => {
		switch (project.uiDesign?.type) {
			case 'Figma':
				return <CgFigma {...props} />;
			case 'Photoshop':
				return <DiPhotoshop {...props} />;
			case 'Adobe XD':
				return <SiAdobexd {...props} />;
			default:
				return <></>;
		}
	};

	return (
		<>
			<Head>
				<title>{`${project.name} | Portfólio - Jonathas Oliveira`}</title>
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
						<Button
							text="Visualizar"
							target="_blank"
							icon={BiLink}
							href={project.url}
							iconProps={{ size: 22, color: '#282929', style: { marginRight: '0.25rem' } }}
							style={{ fontSize: '12px', padding: '10px' }}
						/>
					)}

					{project.github && (
						<Button
							text="Abrir Projeto"
							target="_blank"
							icon={IoLogoGithub}
							href={project.github}
							iconProps={{ size: 22, color: '#282929', style: { marginRight: '0.25rem' } }}
							style={{ fontSize: '12px', padding: '10px' }}
						/>
					)}

					{project.uiDesign && (
						<Button
							text={`Abrir ${project.uiDesign.type}`}
							target="_blank"
							href={project.uiDesign.url}
							iconFunc={renderUiIcon}
							iconProps={{ size: 22, color: '#282929', style: { marginRight: '0.25rem' } }}
							style={{ fontSize: '12px', padding: '10px' }}
						/>
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
