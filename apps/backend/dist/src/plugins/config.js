"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const env_1 = __importDefault(require("@fastify/env"));
const shared_types_1 = require("@gym-mate/shared-types");
exports.default = (0, fastify_plugin_1.default)(async (server, opts) => {
    server.register(env_1.default, { schema: shared_types_1.ConfigSchema });
});
//# sourceMappingURL=config.js.map