import { FastifyReply, FastifyRequest } from "fastify";

export class HelloController {
  public hello = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.send("hello");
  };
}
