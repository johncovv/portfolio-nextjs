import type { IconBaseProps, IconType } from 'react-icons';
import { HTMLAttributeAnchorTarget } from 'react';

import { Content, IconContainer, Text } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
	icon?: IconType;
	iconProps?: IconBaseProps;
	text: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
}

const Button = (props: ButtonProps) => {
	const { icon: IconComponent, iconProps, href, text, target, ...rest } = props;

	function Icon() {
		if (IconComponent) {
			return (
				<IconContainer>
					<IconComponent {...(iconProps ?? { size: 25 })} />
				</IconContainer>
			);
		}

		return <></>;
	}

	return (
		<Content href={href} target={target} {...rest}>
			<Icon />

			<Text>{text}</Text>
		</Content>
	);
};

export default Button;
