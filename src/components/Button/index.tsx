import { HTMLAttributeAnchorTarget } from 'react';
import { IconType } from 'react-icons';

import { Content, IconContainer, Text } from './styles';

interface ButtonProps {
	icon?: IconType;
	text: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
}

const Button = (props: ButtonProps) => {
	function Icon() {
		if (props.icon) {
			return (
				<IconContainer>
					<props.icon />
				</IconContainer>
			);
		}

		return <></>;
	}

	return (
		<Content href={props.href} target={props.target}>
			<Icon />

			<Text>{props.text}</Text>
		</Content>
	);
};

export default Button;
