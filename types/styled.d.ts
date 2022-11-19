import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			orange: string;
			white: string;
			dark: string;
			red: string;
		};
		background: {
			primary: string;
			secondary: string;
		};
		text: {
			primary: string;
			secondary: string;
		};
		shadow: {
			default: string;
		};
	}
}
