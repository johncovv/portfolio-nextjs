import { Content, Icon, Text } from './styles';

interface EmailLinkProps {
	mail: string;
}

const EmailLink = (props: EmailLinkProps) => (
	<Content href={`mailto:${props.mail}`}>
		<Icon />
		<Text>{props.mail}</Text>
	</Content>
);

export default EmailLink;
