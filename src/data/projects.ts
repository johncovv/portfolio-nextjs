export interface IProject {
	id: string;
	name: string;
	alias?: string;
	icon?: { alt?: string; source: string };
	url?: string;
	uiDesign?: { type: 'Figma' | 'Adobe XD' | 'Photoshop'; url: string };
	github?: string;
	alert?: { type: 'error' | 'warning' | 'success'; message: string };
	description: string;
	images?: Array<{ title?: string; url: string }>;
	technologies?: Array<{ name: string; url: string }>;
	partners?: Array<{ name: string; url: string; job?: string }>;
}

const list: Array<IProject> = [];

// Proac Expresso
list.push({
	id: 'proac-expresso',
	name: 'Proac Expresso (2021, 2022 e 2023)',
	alias: 'Proac',
	icon: {
		source: 'https://i.imgur.com/0eK9bs0.png',
		alt: 'Governo do estado de São Paulo',
	},
	url: 'https://www.proacexpresso.sp.gov.br',
	description: `Projeto financiado pela secretaria cultural do **[Governo estadual de São Paulo](https://www.saopaulo.sp.gov.br/)**.\n\n*Programa de Ação Cultural(Proac) é uma legislação de incentivo à cultura do Estado de São Paulo criada em 2006 através da Lei nº 12.268/2006.*\n\nO intuito do desenvolvimento da plataforma **Proac Expresso** é de atualizar o antigo sistema de inscrições públicas ao incentivo cultural.
	`,
	partners: [
		{
			job: 'Desenvolvimento de infra, backend e frontend.',
			name: 'BNP Soluções',
			url: 'https://www.bnpsolucoes.com.br/',
		},
	],
	images: [
		{
			title: 'Login',
			url: 'https://i.imgur.com/2JwFZ9P.png',
		},
		{
			title: 'Registrar-se',
			url: 'https://i.imgur.com/n6oWV7M.png',
		},
		{
			title: 'Registrar-se - (E-mail válido)',
			url: 'https://i.imgur.com/phFM1kJ.png',
		},
		{
			title: 'Registrar-se - (E-mail já cadastrado)',
			url: 'https://i.imgur.com/qlLGncI.png',
		},
		{
			title: 'Esqueci minha senha',
			url: 'https://i.imgur.com/0pmMFd9.png',
		},
		{
			title: 'Painel inicial',
			url: 'https://i.imgur.com/3n1Y9SF.png',
		},
		{
			title: 'Meus projetos',
			url: 'https://i.imgur.com/k1Q3nA2.png',
		},
		{
			title: 'Meus projetos - (Vazio)',
			url: 'https://i.imgur.com/NfPjFvp.png',
		},
		{
			title: 'Meus proponentes',
			url: 'https://i.imgur.com/qQ4P6CB.png',
		},
		{
			title: 'Criar ou editar proponente',
			url: 'https://i.imgur.com/OJZeGXI.png',
		},
		{
			title: 'Criar ou buscar cooperativa',
			url: 'https://i.imgur.com/GpDL5Sy.png',
		},
		{
			title: 'Lista de editais',
			url: 'https://i.imgur.com/l8uXNtL.png',
		},
		{
			title: 'Descrição do edital (Modalidades)',
			url: 'https://i.imgur.com/Ch2P4FX.png',
		},
		{
			title: 'Inscrição no edital',
			url: 'https://i.imgur.com/H4WJjej.png',
		},
	],
	technologies: [
		{ name: 'Typescript', url: 'https://www.typescriptlang.org/docs/' },
		{ name: 'NodeJs', url: 'https://nodejs.org/en/docs/' },
		{ name: 'Angular', url: 'https://angular.io/docs' },
		{ name: 'Ng Ant Design', url: 'https://ng.ant.design/docs/introduce/en' },
	],
});

// LPG GOVSP
list.push({
	id: 'lpg-sp-gov',
	name: 'SPGOV - Lei Paulo Gustavo',
	icon: {
		source: 'https://i.imgur.com/CyQYX8h.png',
		alt: 'Logo Lei Paulo Gustavo',
	},
	url: 'https://leipaulogustavo.sp.gov.br',
	description: `Projeto financiado pela secretaria cultural do **[Governo estadual de São Paulo](https://www.saopaulo.sp.gov.br/)**.\n\nO projeto **Lei Paulo Gustavo** foi criado para a **[Secretaria de Cultura e Economia Criativa do Estado de São Paulo](https://www.cultura.sp.gov.br/)**.\n\nO objetivo do projeto é de criar uma plataforma para inscrição de projetos culturais para o incentivo da lei.`,
	technologies: [
		{ name: 'Typescript', url: 'https://www.typescriptlang.org/docs/' },
		{ name: 'NodeJs', url: 'https://nodejs.org/en/docs/' },
		{ name: 'Angular', url: 'https://angular.io/docs' },
		{ name: 'Ng Ant Design', url: 'https://ng.ant.design/docs/introduce/en' },
	],
	partners: [
		{
			name: 'BNP Soluções',
			url: 'https://www.bnpsolucoes.com.br/',
		},
	],

	images: [],
});

// LPG SP CITY
list.push({
	id: 'smc-lpg-sp',
	name: 'SMC/SP - Lei Paulo Gustavo',
	icon: {
		source: 'https://i.imgur.com/OyROerg.png',
		alt: 'Logo Lei Paulo Gustavo SMC',
	},
	url: 'https://leipaulogustavo.sp.gov.br',
	description: `Projeto financiado pela secretaria municipal de **[São Paulo](https://www.capital.sp.gov.br/)**.\n\nProjeto criado para a **[Secretaria Municipal de Cultura de São Paulo](https://www.prefeitura.sp.gov.br/cidade/secretarias/cultura/)**.\n\nO objetivo do projeto é de criar uma plataforma para inscrição de projetos culturais para o incentivo da lei.`,
	technologies: [
		{ name: 'Typescript', url: 'https://www.typescriptlang.org/docs/' },
		{ name: 'NodeJs', url: 'https://nodejs.org/en/docs/' },
		{ name: 'Angular', url: 'https://angular.io/docs' },
		{ name: 'Ng Ant Design', url: 'https://ng.ant.design/docs/introduce/en' },
	],
	partners: [
		{
			name: 'BNP Soluções',
			url: 'https://www.bnpsolucoes.com.br/',
		},
	],

	images: [],
});

// SMC
list.push({
	id: 'smc',
	name: 'SMC - Capac/SisContrat ',
	icon: {
		source: 'https://i.imgur.com/XFB8yhM.png',
		alt: 'Brasão da cidade de São Paulo',
	},
	alert: { type: 'warning', message: 'Projeto em desenvolvimento.' },
	description: `Sistema criado para gestão de contratos da **[Secretaria cultural do município de São Paulo](https://www.prefeitura.sp.gov.br/cidade/secretarias/cultura/)**.`,
	technologies: [
		{
			name: 'Typescript',
			url: 'https://www.typescriptlang.org/docs/',
		},
		{
			name: 'NextJs',
			url: 'https://nextjs.org/docs',
		},
	],
	partners: [
		{
			job: 'Desenvolvimento conjunto de frontend.',
			name: 'Alexandre Hideki Siroma',
			url: 'https://github.com/Hidekih',
		},
		{
			job: 'Desenvolvimento de infra e backend.',
			name: 'BNP Soluções',
			url: 'https://www.bnpsolucoes.com.br/',
		},
	],

	images: [],
});

// ExReality
list.push({
	id: 'exreality',
	name: 'ExReality',
	icon: { source: 'https://i.imgur.com/ojFVFQB.png', alt: 'ExReality Logo' },
	alert: {
		type: 'error',
		message: 'Este projeto saiu do ar em Dezembro de 2020!',
	},
	url: 'https://www.teatroportoseguro.com.br/programacao/realizados/exreality.html',
	github: '',
	description:
		'O projecto **ExReality** foi criado para apresentação de uma peça de teatro online em meio a pandemia de 2020.\n\nO objetivo do projeto era apresentar a peça onde o público tivesse **acesso 24h/s por dia** a interações com os atores via Chat e Enquetes, tento impacto direto na apresentação.\n\nEste projeto também contou com a tecnologia **PWA** disponível no React, onde é possível **instalar o site como um aplicativo(desktop e mobile)**, também foi integrado o envio de **notificações** para o usuário, onde se notificava eventos na peça teatral.',
	images: [
		{ title: 'Tela de login', url: 'https://i.imgur.com/hjzitqQ.png' },
		{
			title: 'Tela "Esqueci minha senha"',
			url: 'https://i.imgur.com/uj6ZRSj.png',
		},
		{ title: 'Tela pré cadastro', url: 'https://i.imgur.com/FDyP3yA.png' },
		{ title: 'Tela de cadastro', url: 'https://i.imgur.com/9hm4QXd.png' },
		{
			title: 'Dashbord - pagina principal',
			url: 'https://i.imgur.com/pw2h2rr.png',
		},
		{
			title: 'Dashbord - pagina principal',
			url: 'https://i.imgur.com/zG1nmGp.png',
		},
		{
			title: 'Dashbord - pagina principal',
			url: 'https://i.imgur.com/UVeMdlJ.png',
		},
		{
			title: 'Tela de configurações do usuário',
			url: 'https://i.imgur.com/7YkA9fY.png',
		},
	],
	partners: [
		{
			name: 'BNP Soluções',
			url: 'https://bnpsolucoes.com.br/',
			job: 'Desenvolvimento de infra e backend em NodeJs.',
		},
	],
	technologies: [
		{ name: 'React', url: 'https://pt-br.reactjs.org/' },
		{ name: 'PWA (React)', url: 'https://github.com/topics/pwa' },
		{
			name: 'React Icons',
			url: 'https://react-icons.github.io/react-icons/',
		},
		{
			name: 'Axios',
			url: 'https://github.com/axios/axios',
		},
		{
			name: 'Styled Components',
			url: 'https://styled-components.com/',
		},
	],
});

// Devian Bot
list.push({
	id: 'devian-bot',
	name: 'Devian Bot',
	alias: 'Devian',
	icon: { source: 'https://i.imgur.com/RzEpatd.png', alt: 'Devian Logo' },
	alert: { type: 'warning', message: 'Projeto em desenvolvimento!' },
	url: 'https://devian.johncovv.com',
	uiDesign: {
		type: 'Figma',
		url: 'https://www.figma.com/file/tOYHJHpGJ9s4vBL6sqbRnG/Devian-Frontend?node-id=1%3A21',
	},
	github: 'https://github.com/johncovv/devian/',
	description:
		'Este é um projeto **pessoal**, onde o objetivo inicial era aprender a desenvolver um bot para **Discord** rodando em **Nodejs**.\nApós terminar os comandos básicos, decidi criar também um correspondente web, onde os administradores de servidores(Discord) poderiam configurar o bot facilmente pela plataforma.',
	images: [
		{
			title: 'Site completo com menus fechados',
			url: 'https://i.imgur.com/BBHW1TL.png',
		},
		{
			title: 'Site completo com menus abertos',
			url: 'https://i.imgur.com/otW2X59.png',
		},
		{ title: 'Painel de convite', url: 'https://i.imgur.com/QzUrDFu.png' },
		{
			title: 'Menu grupo de comandos',
			url: 'https://i.imgur.com/nTWj6uC.png',
		},
		{
			title: 'Output no terminal',
			url: 'https://i.imgur.com/4Tvscnq.png',
		},
	],
	technologies: [
		{ name: 'React', url: 'https://pt-br.reactjs.org/' },
		{
			name: 'React Icons',
			url: 'https://react-icons.github.io/react-icons/',
		},
		{
			name: 'Axios',
			url: 'https://github.com/axios/axios',
		},
		{
			name: 'Styled Components',
			url: 'https://styled-components.com/',
		},
	],
});

// Mp Auth
list.push({
	id: 'mp-auto',
	name: 'Mp Auto',
	alias: 'MpAuto',
	icon: { source: 'https://i.imgur.com/WY82uIw.png', alt: 'Mp Auto Logo' },
	url: 'https://mpauto.com.br',
	github: '',
	description:
		'Neste projeto o objetivo era montar uma plataforma para apresentação de veículos da concessionária **Mp Auto** estabelecida na cidade de **Cotia - SP**.\n\nA plataforma tem ferramentas avançadas como pesquisa com filtros, galeria de fotos com carrossel, criação dinâmica de panfleto com informações do veículo para download e etc.',
	images: [
		{ title: 'Pagina Home', url: 'https://i.imgur.com/n3i8Zop.png' },
		{
			title: 'Detalhes do veículo (popup)',
			url: 'https://i.imgur.com/GGqbcBA.png',
		},
		{
			title: 'Pesquisa de veículos (popup)',
			url: 'https://i.imgur.com/dZgd4Fb.png',
		},
		{ title: 'Pagina de estoque', url: 'https://i.imgur.com/RFQFyRm.png' },
		{ title: 'Pagina de notícias', url: 'https://i.imgur.com/i0aVEXU.png' },
		{ title: 'Notícia aberta', url: 'https://i.imgur.com/QY0fu8m.png' },
	],
	partners: [
		{
			name: 'Lucas Nicolau',
			url: 'https://ndev.cf/',
			job: 'Desenvolveu Back-End do sistema em PHP.',
		},
	],
	technologies: [
		{ name: 'Html5', url: 'https://github.com/topics/html5' },
		{
			name: 'Javascript',
			url: 'https://github.com/topics/javascript',
		},
		{
			name: 'Scss (Sass)',
			url: 'https://sass-lang.com/',
		},
		{
			name: 'Carousel Slick',
			url: 'https://kenwheeler.github.io/slick/',
		},
	],
});

export default list;
