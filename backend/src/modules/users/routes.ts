import { FastifyInstance } from 'fastify';
import { z } from 'zod';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/', { preHandler: fastify.authenticate }, async () => {
    return fastify.prisma.user.findMany({ include: { role: true } });
  });

  fastify.post('/roles', { preHandler: fastify.authenticate }, async (request) => {
    const schema = z.object({ name: z.string(), description: z.string().optional() });
    const payload = schema.parse(request.body);
    return fastify.prisma.role.create({ data: payload });
  });
}
