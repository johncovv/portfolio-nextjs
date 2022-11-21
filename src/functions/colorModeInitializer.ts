export function colorModeInitializer(): void {
	function setTheme(newTheme: 'dark' | 'light') {
		window.document.body.setAttribute('data-theme', newTheme);
		window.localStorage.setItem('johncovv@theme', newTheme);
	}

	function getTheme(): 'dark' | 'light' {
		const savedTheme = localStorage.getItem('johncovv@theme') as 'dark' | 'light' | null;
		return savedTheme ?? 'dark';
	}

	setTheme(getTheme());

	window.addEventListener('theme-change', () => {
		const currentTheme = getTheme();

		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	});
}
