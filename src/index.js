import app from "./app.js";
import { sequelize } from "./database/database.js";

const port = 4000;

async function main() {
  await sequelize.sync({force: false});
  app.listen(port);
  console.log("Server on port", port);
}

main();
