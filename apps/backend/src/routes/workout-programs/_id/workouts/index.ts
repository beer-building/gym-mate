import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

const workoutsRoute: FastifyPluginAsyncTypebox = async (server) => {
	server.get('/', (request) => {
		return 'HELLO';
	});
};

export default workoutsRoute;
