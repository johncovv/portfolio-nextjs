import darkTheme from './dark';

export default {
	colors: { ...darkTheme.colors },
	background: {
		primary: '#FFFDFC',
		secondary: '#F4F4F4',
	},
	text: {
		primary: '#171717',
		secondary: '#696969',
	},
	shadow: {
		default: '5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)',
	},
};
