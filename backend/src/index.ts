import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import prismaPlugin from './plugins/prisma.js';
import authPlugin from './plugins/auth.js';
import { env } from './config/env.js';
import { authRoutes } from './modules/auth/routes.js';
import { userRoutes } from './modules/users/routes.js';
import { crmRoutes } from './modules/crm/routes.js';
import { projectRoutes } from './modules/projects/routes.js';
import { financeRoutes } from './modules/finance/routes.js';
import { hrRoutes } from './modules/hr/routes.js';
import { assetRoutes } from './modules/assets/routes.js';
import { dashboardRoutes } from './modules/dashboard/routes.js';

const app = Fastify({ logger: true });

await app.register(cors, { origin: env.frontendUrl, credentials: true });
await app.register(helmet);
await app.register(rateLimit, { max: 200, timeWindow: '1 minute' });
await app.register(swagger, {
  openapi: { info: { title: 'Invertio CRM API', version: '1.0.0' } }
});
await app.register(swaggerUi, { routePrefix: '/docs' });

await app.register(prismaPlugin);
await app.register(authPlugin);

app.get('/health', async () => ({ status: 'ok' }));

await app.register(authRoutes, { prefix: '/api/v1/auth' });
await app.register(userRoutes, { prefix: '/api/v1/users' });
await app.register(crmRoutes, { prefix: '/api/v1/crm' });
await app.register(projectRoutes, { prefix: '/api/v1/projects' });
await app.register(financeRoutes, { prefix: '/api/v1/finance' });
await app.register(hrRoutes, { prefix: '/api/v1/hr' });
await app.register(assetRoutes, { prefix: '/api/v1/assets' });
await app.register(dashboardRoutes, { prefix: '/api/v1/dashboard' });

app.setErrorHandler((error, _request, reply) => {
  app.log.error(error);
  reply.code(400).send({ message: error.message });
});

app.listen({ port: env.port, host: '0.0.0.0' });
