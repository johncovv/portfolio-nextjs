import { IoDocumentText } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io';

import { ButtonContainer, Content, Description, Icon, Project, Title } from './styles';
import { IProject } from '../../data/projects';
import Button from '../Button';

interface ProjectsProps {
	value: Array<IProject>;
}

export default function Projects({ value }: ProjectsProps) {
	return (
		<Content>
			{value.map(({ id, name, icon, github, description }) => (
				<Project key={name}>
					<Title>
						{icon?.source && (
							<Icon
								src={'/assets/logos/' + icon.source}
								alt={icon.alt || `logo do projeto ${name}`}
								width={20}
								height={20}
							/>
						)}
						{name}
					</Title>
					<Description linkTarget="_blank">{description}</Description>

					<ButtonContainer>
						<Button
							text="Detalhes"
							href={`/project/${id}`}
							icon={IoDocumentText}
							iconProps={{ size: 22, style: { marginRight: '0.25rem' } }}
							style={{ fontSize: '12px', padding: '10px', margin: '15px 15px 0 0' }}
						/>

						{!!github?.length && (
							<Button
								text="Abrir Projeto"
								href={github}
								target="_blank"
								icon={IoLogoGithub}
								iconProps={{ size: 22, style: { marginRight: '0.25rem' } }}
								style={{ fontSize: '12px', padding: '10px', margin: '15px 15px 0 0' }}
							/>
						)}
					</ButtonContainer>
				</Project>
			))}
		</Content>
	);
}
