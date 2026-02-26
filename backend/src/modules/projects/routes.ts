import { FastifyInstance } from 'fastify';
import { z } from 'zod';

export async function projectRoutes(fastify: FastifyInstance) {
  fastify.get('/', { preHandler: fastify.authenticate }, async () => {
    return fastify.prisma.project.findMany({ include: { milestones: true, tasks: true, client: true } });
  });

  fastify.post('/', { preHandler: fastify.authenticate }, async (request) => {
    const schema = z.object({
      name: z.string().min(2),
      description: z.string().optional(),
      clientId: z.string().optional(),
      projectValue: z.number().optional(),
      paymentTerms: z.string().optional()
    });
    return fastify.prisma.project.create({ data: schema.parse(request.body) });
  });
}
