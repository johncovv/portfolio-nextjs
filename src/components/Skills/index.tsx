import { BiLink } from 'react-icons/bi';

import { Button, Container, Content, Description, Skill, Title } from './styles';
import { ISkill } from '../../data/skills';
import Image from 'next/image';

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

						<Button type="button" isFirst={!!(index === 0)} onClick={() => window.open(url, '_blank')}>
							<BiLink size={22} color="#282929" />
							Saiba mais
						</Button>
					</Container>
				</Skill>
			))}
		</Content>
	);
}
