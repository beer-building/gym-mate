"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const bcryptjs_1 = require("bcryptjs");
const repositories_1 = require("../repositories");
const constants_1 = require("../constants");
class UsersService {
    server;
    usersRepository;
    constructor(server) {
        this.server = server;
        this.usersRepository = new repositories_1.UsersRepository(server);
    }
    async checkRegisteredUser(email) {
        const existUser = await this.usersRepository.findUser(email);
        if (existUser)
            throw this.server.httpErrors.badRequest(constants_1.usersErrors.ALREADY_REGISTERED_ERROR);
        return existUser;
    }
    async createUser(user) {
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const passwordHash = await (0, bcryptjs_1.hash)(user.password, salt);
        Reflect.deleteProperty(user, 'password');
        const formattedUser = { ...user, passwordHash };
        const newUser = await this.usersRepository.createUser(formattedUser);
        return newUser;
    }
    async registerUser({ user }) {
        const existUser = await this.usersRepository.findUser(user.email);
        if (existUser)
            throw this.server.httpErrors.badRequest(constants_1.usersErrors.ALREADY_REGISTERED_ERROR);
        const createdUser = await this.createUser(user);
        return createdUser;
    }
    async loginUser(email, password) {
        const existUser = await this.usersRepository.findUser(email);
        if (!existUser)
            throw this.server.httpErrors.unauthorized(constants_1.usersErrors.USER_NOT_FOUND_ERROR);
        const isCorrectPass = await (0, bcryptjs_1.compare)(password, existUser.passwordHash);
        if (!isCorrectPass)
            throw this.server.httpErrors.unauthorized(constants_1.usersErrors.WRONG_PASS_ERROR);
        return existUser;
    }
    buildUserResponse(user) {
        const userResponse = {
            id: user.id,
            email: user.email,
            username: user.username,
            image: user.image || '',
            token: this.server.jwt.sign(user)
        };
        return { user: userResponse };
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map