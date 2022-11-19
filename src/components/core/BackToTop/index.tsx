import React from 'react';

import { BsArrowUpShort } from 'react-icons/bs';

import { Content } from './styles';

const BackToTop: React.FunctionComponent = () => {
	return (
		<Content onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
			<BsArrowUpShort size={35} color="#aaaaaa" />
		</Content>
	);
};

export default BackToTop;
