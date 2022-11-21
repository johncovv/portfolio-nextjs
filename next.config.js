/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ['tsx'],

	images: {
		domains: ['i.imgur.com', 'imgur.com'],
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgo: false,
					},
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
