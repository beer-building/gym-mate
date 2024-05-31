"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
class UsersRepository {
    server;
    constructor(server) {
        this.server = server;
    }
    async findUser(email) {
        return this.server.prisma.user.findUnique({ where: { email } });
    }
    async createUser(user) {
        return this.server.prisma.user.create({ data: user });
    }
    async updateUser({ id }, { user }) {
        return this.server.prisma.user.update({
            where: {
                id
            },
            data: user
        });
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map