"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const sensible_1 = __importDefault(require("@fastify/sensible"));
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    fastify.register(sensible_1.default);
});
//# sourceMappingURL=sensible.js.map