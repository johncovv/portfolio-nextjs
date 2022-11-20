import { IoDocumentText } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io';
import { useRouter } from 'next/router';

import { ButtonContainer, ButtonLink, ButtonProject, Content, Description, Icon, Project, Title } from './styles';
import { IProject } from '../../data/projects';

interface ProjectsProps {
	value: Array<IProject>;
}

export default function Projects({ value }: ProjectsProps) {
	const router = useRouter();

	return (
		<Content>
			{value.map(({ id, name, icon, url, detailsUrl, github, description }) => (
				<Project key={name}>
					<Title>
						{icon?.source && <Icon src={icon.source} alt={icon.alt || `logo do projeto ${name}`} />} {name}
					</Title>
					<Description linkTarget="_blank">{description}</Description>

					<ButtonContainer>
						<ButtonLink onClick={() => router.push(`/project/${id}`)}>
							<IoDocumentText size={22} color="#282929" />
							Detalhes
						</ButtonLink>

						{!!github?.length && (
							<ButtonProject onClick={() => window.open(github, '_blank')}>
								<IoLogoGithub size={22} color="#282929" />
								Abrir Projeto
							</ButtonProject>
						)}
					</ButtonContainer>
				</Project>
			))}
		</Content>
	);
}
