export interface ISkill {
	name: string;
	url: string;
	icon: string;
	description: string;
}

const skills: Array<ISkill> = [
	{
		name: 'Next.js',
		description:
			'Next.js é um framework NodeJs de desenvolvimento front-end React de código aberto criada por Vercel, que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.',
		url: 'https://github.com/topics/nextjs',
		icon: 'nextjs.svg',
	},
	{
		name: 'ReactJs',
		url: 'https://github.com/topics/react',
		icon: 'react.svg',
		description: 'React é uma biblioteca JavaScript de código aberto com foco em criação de interfaces SPA.',
	},
	{
		name: 'NodeJs',
		url: 'https://github.com/topics/nodejs',
		icon: 'node.svg',
		description: 'Nodejs é runtime em Javascript que possíbilita execução de código a nível de backend e front-end.',
	},
	{
		name: 'Angular',
		url: 'https://github.com/topics/angular',
		icon: 'angular.svg',
		description:
			'Angular (criado pelo Google), é um framework JavasScript open-source para desenvolvimentos de aplicações web SPA.',
	},
	{
		name: 'Git',
		url: 'https://github.com/topics/git',
		icon: 'git.svg',
		description:
			'Git é o sistema de controle de versão mais usado, criado para o rastreamento e gerenciamento do código-fonte ao longo do tempo.',
	},
	{
		name: 'Github',
		url: 'https://github.com/',
		icon: 'github.svg',
		description: 'Maior plataforma de hospedagem e colaboracão de código utilizando versionamento Git. ',
	},
	{
		name: 'Javascript',
		url: 'https://github.com/topics/javascript',
		icon: 'javascript.svg',
		description:
			'JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web.',
	},
	{
		name: 'Typescript',
		url: 'https://github.com/topics/typescript',
		icon: 'typescript.svg',
		description:
			'TypeScript é uma linguagem de programação desenvolvida pela Microsoft, projetada para segurança de tipo ao JavaScript.',
	},
	{
		name: 'Scss',
		url: 'https://github.com/topics/scss',
		icon: 'scss.svg',
		description:
			'Sass(ou Scss) é a linguagem de extensão CSS de nível profissional mais madura, estável e poderosa do mundo.',
	},
	{
		name: 'Less',
		url: 'https://github.com/topics/less',
		icon: 'less.svg',
		description: 'Less (que significa Leaner Style Sheets), como a Sass, é uma extensão de linguagem para CSS.',
	},
	{
		name: 'Html5',
		url: 'https://github.com/topics/html5',
		icon: 'html.svg',
		description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.',
	},
];

export default skills;
