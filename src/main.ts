import Config from "./config/envconfig";
import app, { Server } from "./routers/app";
import connection from "./services/mongodb";
import "colors";

async function main(): Promise<void> {
  try {
    await connection();
    const { aplication, server }: Server = await app();
    aplication?.listen(Config.PORT, () => {
      console.log(
        `Server listen on port http://localhost:${Config.PORT}${server?.graphqlPath}`
          ?.blue.bold,
        "\n\n"
      );
    });

  } catch (error) {
    console.error("Hubo un problema al iniciar el servidor:\n"?.red + error);
  }
}

main();
