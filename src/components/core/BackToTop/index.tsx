import { BsArrowUpShort } from 'react-icons/bs';
import type { FunctionComponent } from 'react';

import { Content } from './styles';

const BackToTop: FunctionComponent = () => {
	return (
		<Content onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
			<BsArrowUpShort size={35} color="#aaaaaa" />
		</Content>
	);
};

export default BackToTop;
