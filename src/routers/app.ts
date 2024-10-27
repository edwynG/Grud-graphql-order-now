import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import typeDef from "../schemas/typedef";
import resolver from "../resolvers/resolver";
import request from "../middleware/request";

export interface Server {
  aplication: Express | null;
  server: ApolloServer | null;
}

async function app(): Promise<Server> {
  try {
    const aplication: Express = express();
    const server: ApolloServer = new ApolloServer({
      typeDefs: typeDef,
      resolvers: resolver,
      context: ({ req }) => request({ req }),
    });
    await server.start();
    server.applyMiddleware({ app: aplication as any, path: "/" });
    return { aplication, server };
  } catch (error) {
    throw error;
  }
}

export default app;
