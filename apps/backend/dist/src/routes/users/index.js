"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../schemas/users");
const services_1 = require("../../services");
const usersRoutes = async (server) => {
    const usersService = new services_1.UsersService(server);
    server.post('/', { schema: users_1.RegisterSchema }, async (request, reply) => {
        const createdUser = await usersService.registerUser(request.body);
        reply.status(201);
        return usersService.buildUserResponse(createdUser);
    });
    server.post('/login', { schema: users_1.LoginSchema }, async (request, reply) => {
        const { email, password } = request.body.user;
        const user = await usersService.loginUser(email, password);
        reply.status(200);
        return usersService.buildUserResponse(user);
    });
};
exports.default = usersRoutes;
//# sourceMappingURL=index.js.map