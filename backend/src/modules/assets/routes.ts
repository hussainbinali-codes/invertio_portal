import { FastifyInstance } from 'fastify';

export async function assetRoutes(fastify: FastifyInstance) {
  fastify.get('/', { preHandler: fastify.authenticate }, async () => fastify.prisma.asset.findMany());
  fastify.get('/credentials', { preHandler: fastify.authenticate }, async () => fastify.prisma.credential.findMany());
}
