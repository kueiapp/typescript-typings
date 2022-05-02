import server from "./server";

const init = async () => {
  const fastify = await server();

  fastify.listen(Number(process.env.PORT || 3000), "0.0.0.0", (err) => {
    if (err) throw err;
  });

  return fastify;
};

init();
