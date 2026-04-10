import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const directUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;
  return new PrismaClient(
    directUrl
      ? {
          datasources: {
            db: { url: directUrl },
          },
        }
      : undefined
  );
}

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
