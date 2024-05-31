"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root = async (fastify) => {
    fastify.get('/', async function () {
        return { root: 'health check' };
    });
};
exports.default = root;
//# sourceMappingURL=root.js.map