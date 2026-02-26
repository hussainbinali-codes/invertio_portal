import { FastifyInstance } from 'fastify';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/login', async (request, reply) => {
    const schema = z.object({ email: z.string().email(), password: z.string().min(8) });
    const { email, password } = schema.parse(request.body);

    const user = await fastify.prisma.user.findUnique({ where: { email }, include: { role: true } });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return reply.code(401).send({ message: 'Invalid credentials' });
    }

    const accessToken = fastify.jwt.sign({ sub: user.id, role: user.role?.name });
    return { accessToken, user: { id: user.id, name: user.name, email: user.email, role: user.role?.name } };
  });
}
