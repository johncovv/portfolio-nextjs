import { IconBaseProps } from 'react-icons/lib';
import loadable from '@loadable/component';

interface IPropsIcon {
	nameIcon: string;
	propsIcon?: IconBaseProps;
}

export default function LoadableIcon({ nameIcon, propsIcon }: IPropsIcon): JSX.Element {
	const lib = nameIcon
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.split(' ')[0]
		.toLocaleLowerCase();

	const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
		resolveComponent: (el: JSX.Element) => el[nameIcon as keyof JSX.Element],
	});

	return <ElementIcon {...propsIcon} />;
}
