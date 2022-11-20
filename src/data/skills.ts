import { FaAngular, FaHtml5, FaLess, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { SiGit, SiJavascript, SiTypescript } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';
import { IconType } from 'react-icons';

export interface ISkill {
	name: string;
	color: string;
	url: string;
	icon: string;
	description: string;
}

const skills: Array<ISkill> = [
	{
		name: 'Angular',
		color: '#dd0031',
		url: 'https://github.com/topics/angular',
		icon: 'angular.svg',
		description:
			'Angular (criado pelo Google), é uma estrutura de design de aplicativo e plataforma de desenvolvimento para a criação de aplicativos SPA (Single-Page Application) eficientes e sofisticados.\n\nMantida pelo Google e uma enorme comunidade de desenvolvedores individuais.',
	},
	{
		name: 'ReactJs',
		color: '#61DBFB',
		url: 'https://github.com/topics/react',
		icon: 'react.svg',
		description: 'React é uma biblioteca JavaScript de código aberto com foco em criação de interfaces SPA.',
	},
	{
		name: 'NodeJs',
		color: '#8BBF3D',
		url: 'https://github.com/topics/nodejs',
		icon: 'node.svg',
		description: 'Nodejs é runtime em Javascript que possíbilita execução de código a nível de backend e front-end.',
	},
	{
		name: 'Git',
		color: '#f04f30',
		url: 'https://github.com/topics/git',
		icon: 'git.svg',
		description:
			'Git é o sistema de controle de versão mais usado, criado para o rastreamento e gerenciamento do código-fonte ao longo do tempo.',
	},
	{
		name: 'Github',
		color: '#FFFFFF',
		url: 'https://github.com/',
		icon: 'github.svg',
		description: 'Maior plataforma de hospedagem e colaboracão de código utilizando versionamento Git. ',
	},
	{
		name: 'Javascript',
		color: '#EFD81D',
		url: 'https://github.com/topics/javascript',
		icon: 'javascript.svg',
		description:
			'JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web.',
	},
	{
		name: 'Typescript',
		color: '#2f74c0',
		url: 'https://github.com/topics/typescript',
		icon: 'typescript.svg',
		description:
			'TypeScript é uma linguagem de programação desenvolvida pela Microsoft, projetada para segurança de tipo ao JavaScript.',
	},
	{
		name: 'Scss',
		color: '#C66394',
		url: 'https://github.com/topics/scss',
		icon: 'scss.svg',
		description:
			'Sass(ou Scss) é a linguagem de extensão CSS de nível profissional mais madura, estável e poderosa do mundo.',
	},
	{
		name: 'Less',
		color: '#1d365d',
		url: 'https://github.com/topics/less',
		icon: 'less.svg',
		description: 'Less (que significa Leaner Style Sheets), como a Sass, é uma extensão de linguagem para CSS.',
	},
	{
		name: 'Html5',
		color: '#DD4B25',
		url: 'https://github.com/topics/html5',
		icon: 'html.svg',
		description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.',
	},
];

export default skills;
