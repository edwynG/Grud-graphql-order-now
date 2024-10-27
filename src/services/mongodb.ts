import mongoose, { ConnectOptions } from "mongoose";
import Config from "../config/envconfig";
import "colors";
const options: ConnectOptions = {
  bufferCommands: true,
};

async function connection(): Promise<void> {
  try {
    await mongoose.connect(Config.TOKEN_DATABASE as string, options);
    console.log("Conexión a la base de datos exitosa!!"?.green);
  } catch (error) {
    throw error;
  }
}

export default connection;
