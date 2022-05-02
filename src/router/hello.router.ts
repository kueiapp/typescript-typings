import { HelloController } from "../application/test";
import { FastifyPluginAsync } from "fastify";

const router: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  const controller = new HelloController();
  fastify.get("/hello", controller.hello);
};

export default router;
