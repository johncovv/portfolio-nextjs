import { BiLink } from 'react-icons/bi';
import Image from 'next/image';

import { Container, Content, Description, Skill, Title, ButtonContainer } from './styles';
import { ISkill } from '../../data/skills';
import Button from '../Button';

interface SkillsProps {
	value: Array<ISkill>;
}

export default function Skills({ value }: SkillsProps) {
	const handleClickSkill = (url: string, index: number): void => {
		if (index !== 0 && window.innerWidth >= 768) window.open(url, '_blank');
	};

	return (
		<Content>
			{value.map(({ name, url, icon, description }, index) => (
				<Skill key={name} onClick={() => handleClickSkill(url, index)}>
					<Container>
						<Title>
							<Image
								src={`/assets/icons/${icon}`}
								alt={name}
								width={25}
								height={25}
								style={{ marginRight: '0.5rem' }}
							/>

							{name}
						</Title>
						<Description>{description}</Description>

						<ButtonContainer isFirst={index === 0}>
							<Button
								text="Saiba mais"
								target="_blank"
								href={url}
								icon={BiLink}
								iconProps={{ size: 22, style: { marginRight: '0.25rem' } }}
								style={{ marginLeft: 'auto', fontSize: '12px', padding: '10px' }}
							/>
						</ButtonContainer>
					</Container>
				</Skill>
			))}
		</Content>
	);
}
