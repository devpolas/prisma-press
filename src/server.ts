import app from "./app";
import { credentials } from "./config";
import { prisma } from "./lib/db";

async function main() {
  try {
    await prisma
      .$connect()
      .then(() => console.log("Database Connect Successfully"));

    app.listen(credentials.port, () => {
      console.log(`Server running on PORT ${credentials.port}`);
    });
  } catch (error) {
    console.error("Something went wrong");
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
