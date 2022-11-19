type TCertificateType = {
	key: string;
	name: string;
	url: string;
	proportion: [number, number];
};

export const certificates: Array<TCertificateType> = [
	{
		key: 'w3-typescript',
		name: 'W3 School typescript Certificate',
		url: 'https://drive.google.com/file/d/1prkXrVFrvE_rRmqG_75ojP0pb8ehBQui/preview',
		proportion: [1, 0.673],
	},
];
