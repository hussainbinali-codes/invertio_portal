import { FastifyInstance } from 'fastify';

export async function hrRoutes(fastify: FastifyInstance) {
  fastify.get('/candidates', { preHandler: fastify.authenticate }, async () => fastify.prisma.candidate.findMany());
  fastify.get('/leaves', { preHandler: fastify.authenticate }, async () => fastify.prisma.leaveRequest.findMany());
}
