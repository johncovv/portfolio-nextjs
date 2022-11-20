import { IconType } from 'react-icons';

import { Content, IconContainer, Text } from './styles';

interface ButtonProps {
	icon?: IconType;
	text: string;
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
		<Content href="https://github.com/johncovv" target="_blank">
			<Icon />

			<Text>{props.text}</Text>
		</Content>
	);
};

export default Button;
