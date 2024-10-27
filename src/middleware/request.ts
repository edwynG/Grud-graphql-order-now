import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import Config from "../config/envconfig";


const getUserFromToken = (token: string): JwtPayload | string | null => {
  if (token) {
    try {
      return jwt.verify(token, Config.SECRET_PASSWORD as string);
    } catch (err) {
      throw new Error("Token inválido");
    }
  }
  return null;
};

interface context {
  req: any;
}

function request({ req }: context) {
  const token = req.headers.authorization || "";

  const user: JwtPayload | string | null = getUserFromToken(
    token.replace("Bearer ", "")
  );
  return { user };
}

export default request;
