import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";
import { credentials } from "../config";

const adapter = new PrismaPg({ connectionString: credentials.database_url });
const prisma = new PrismaClient({ adapter });

export { prisma };
