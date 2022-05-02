import "reflect-metadata";
import fastify from "fastify";
import helmet from "fastify-helmet";
import cors from "fastify-cors";
import multipart from "fastify-multipart";
import autoLoad from "fastify-autoload";
import * as path from "path";

import * as fs from "fs";
if (
  fs.existsSync(path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`))
) {
  require("dotenv").config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
  });
}

export default function createServer() {
  const server = fastify({ logger: false });

  server.register(helmet);
  server.register(cors, {
    credentials: true,
  });
  server.register(multipart);

  server.get("/", (_request, reply) => {
    reply.code(200).send({ dateTime: new Date().getTime });
  });

  server.register(autoLoad, {
    dir: path.join(__dirname, "router"),
    dirNameRoutePrefix: false,
    maxDepth: 2,
  });

  return server;
}
