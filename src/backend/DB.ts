import { PrismaClient } from "@prisma/client";

export default await (async () => {
  let d = new PrismaClient();
  await d.$connect();
  return d;
})();
