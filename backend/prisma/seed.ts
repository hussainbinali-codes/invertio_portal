import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Admin@123', 12);

  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: {
      name: 'Admin',
      description: 'Full system access',
      permissions: {
        create: [
          { module: 'all', action: 'crud', level: 'FULL_ACCESS' }
        ]
      }
    }
  });

  await prisma.user.upsert({
    where: { email: 'admin@invertio.in' },
    update: {},
    create: {
      name: 'Invertio Admin',
      email: 'admin@invertio.in',
      passwordHash,
      roleId: adminRole.id
    }
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
