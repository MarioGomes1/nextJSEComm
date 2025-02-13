// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "@prisma/client/extension";

// const test = require(PrismaClient)

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany(); // Fetch all users
  console.log(users);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
