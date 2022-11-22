import type { FunctionComponent, HTMLAttributeAnchorTarget } from 'react';
import type { IconBaseProps, IconType } from 'react-icons';

import { Content, IconContainer, Text } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
	icon?: IconType;
	iconFunc?: FunctionComponent<IconBaseProps>;
	iconProps?: IconBaseProps;
	text: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
}

const Button = (props: ButtonProps) => {
	const { icon: IconComponent, iconFunc, iconProps, href, text, target, ...rest } = props;

	function renderIcon() {
		if (IconComponent) {
			return (
				<IconContainer>
					<IconComponent {...(iconProps ?? { size: 25 })} />
				</IconContainer>
			);
		}

		if (iconFunc) {
			return <IconContainer>{iconFunc(iconProps ?? { size: 25 })}</IconContainer>;
		}

		return <></>;
	}

	return (
		<Content href={href} target={target} {...rest} scroll={false}>
			{renderIcon()}

			<Text>{text}</Text>
		</Content>
	);
};

export default Button;
