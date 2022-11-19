import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = ({ as, children, className, href }: any) => (
	<Link href={href} as={as} passHref>
		<a className={className}>{children}</a>
	</Link>
);

export default styled(StyledLink)``;
