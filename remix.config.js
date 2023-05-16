/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/naming-convention */
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ['**/.*'],
	server:
    process.env.NETLIFY ?? process.env.NETLIFY_LOCAL ? './server.ts' : undefined,
	serverBuildPath: '.netlify/functions-internal/server.js',
	serverModuleFormat: 'cjs',
	// AppDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
	future: {
		v2_errorBoundary: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
};
