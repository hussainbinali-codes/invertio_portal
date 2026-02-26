import { FastifyInstance } from 'fastify';
import { z } from 'zod';

export async function crmRoutes(fastify: FastifyInstance) {
  fastify.get('/contacts', { preHandler: fastify.authenticate }, async () => {
    return fastify.prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
  });

  fastify.post('/contacts', { preHandler: fastify.authenticate }, async (request) => {
    const schema = z.object({
      name: z.string(),
      company: z.string().optional(),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      source: z.string().optional(),
      notes: z.string().optional()
    });
    return fastify.prisma.contact.create({ data: schema.parse(request.body) });
  });
}
