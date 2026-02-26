import fp from 'fastify-plugin';
import jwt from '@fastify/jwt';
import { env } from '../config/env.js';

export default fp(async (fastify) => {
  await fastify.register(jwt, {
    secret: env.jwtAccessSecret,
    sign: { expiresIn: '15m' }
  });

  fastify.decorate('authenticate', async (request: any, reply: any) => {
    try {
      await request.jwtVerify();
    } catch {
      reply.code(401).send({ message: 'Unauthorized' });
    }
  });
});
