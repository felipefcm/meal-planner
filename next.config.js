const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");

module.exports = {

	async redirects() {
		return [
			{
				source: '/',
				destination: '/recipes',
				permanent: true,
			}
		];
	}
};
