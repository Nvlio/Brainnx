import { PrismaClient } from '@prisma/client';

// aqui se cria a instancia do prisma que vai ser usado em todo o projeto

declare global {
    var prisma: PrismaClient | undefined;
}

export const prisma =
    globalThis.prisma ||
    new PrismaClient({
        log: ['query'], // opcional, bom p/ debug
    });

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;