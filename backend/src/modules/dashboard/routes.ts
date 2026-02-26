import { FastifyInstance } from 'fastify';

export async function dashboardRoutes(fastify: FastifyInstance) {
  fastify.get('/executive', { preHandler: fastify.authenticate }, async () => {
    const [projects, contacts, invoices, employees] = await Promise.all([
      fastify.prisma.project.count(),
      fastify.prisma.contact.count(),
      fastify.prisma.invoice.aggregate({ _sum: { totalAmount: true, paidAmount: true } }),
      fastify.prisma.employee.count()
    ]);

    return {
      activeProjects: projects,
      pipelineContacts: contacts,
      revenueTotal: invoices._sum.totalAmount || 0,
      revenueReceived: invoices._sum.paidAmount || 0,
      employees
    };
  });
}
