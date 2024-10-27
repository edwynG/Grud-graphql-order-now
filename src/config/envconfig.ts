import Env, { DotenvConfigOutput, DotenvParseOutput } from "dotenv";

const env: DotenvConfigOutput = Env.config();
if (env?.error) {
  console.error("El archivo .env no encontrado.");
}

class Config {
  public static get PORT(): string | undefined | number {
    return process.env.PORT;
  }

  public static get TOKEN_DATABASE(): string | undefined {
    return process.env.TOKE_DATABASE;
  }

  public static get toString(): DotenvParseOutput | undefined {
    return env?.error ? undefined : env.parsed;
  }

  public static get SECRET_PASSWORD():string | undefined{
    return process.env.SECRET_PASSWORD
  }
}

export default Config;
