import fp from "fastify-plugin";
import cors from "@fastify/cors";

export default fp(async (server) => {
  server.register(cors, {
    origin: (origin, cb) => {
      const hostname = new URL(origin ?? "").hostname;
      if (hostname === "localhost") {
        //  Request from localhost will pass
        cb(null, true);
        return;
      }
      cb(new Error("Not allowed"), false);
    },
  });
});
