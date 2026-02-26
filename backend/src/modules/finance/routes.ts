import { FastifyInstance } from 'fastify';
import { z } from 'zod';

export async function financeRoutes(fastify: FastifyInstance) {
  fastify.get('/invoices', { preHandler: fastify.authenticate }, async () => fastify.prisma.invoice.findMany());

  fastify.post('/invoices', { preHandler: fastify.authenticate }, async (request) => {
    const schema = z.object({
      type: z.enum(['INBOUND', 'OUTBOUND']),
      clientName: z.string(),
      invoiceDate: z.string(),
      dueDate: z.string(),
      totalAmount: z.number()
    });
    const body = schema.parse(request.body);
    return fastify.prisma.invoice.create({
      data: {
        ...body,
        invoiceNo: `INV-${Date.now()}`,
        invoiceDate: new Date(body.invoiceDate),
        dueDate: new Date(body.dueDate)
      }
    });
  });
}
