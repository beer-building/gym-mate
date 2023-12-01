import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import { FastifyServerOptions } from 'fastify';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

export interface AppOptions extends FastifyServerOptions, Partial<AutoloadPluginOptions> {}
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsyncTypebox<AppOptions> = async (fastify, opts): Promise<void> => {
	// This loads all plugins defined in plugins
	// those should be support plugins that are reused
	// through your application
	void fastify.register(AutoLoad, {
		dir: join(__dirname, 'plugins'),
		options: opts
	});

	// This loads all plugins defined in routes
	// define your routes in one of these
	void fastify.register(AutoLoad, {
		dir: join(__dirname, 'routes'),
		options: opts,
		routeParams: true
	});
};

export default app;
export { app, options };
