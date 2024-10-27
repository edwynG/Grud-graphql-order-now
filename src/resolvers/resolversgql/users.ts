import { sign } from "jsonwebtoken";
import User, { IUser } from "../entities/User";
import { compare, genSalt, hash } from "bcrypt";
import Config from "../../config/envconfig";

const getUsers = async () => await User.find();

const getUser = async (root: any, date: any, { user }: any) => {
  if (!user) {
    throw "Usuario no auntenticado.";
  }
  return await User.findById(user._id);
};

const createUser = async (_: any, { user }: { user: IUser }) => {
  try {
    const { password } = user;
    const salt = await genSalt(10);
    const paswordHash = await hash(password, salt);
    const newUser = await new User({ ...user, password: paswordHash }).save();
    const doc = Object(newUser._doc);
    const token = sign({ ...doc }, Config.SECRET_PASSWORD as string);
    return Object({ ...doc, id: doc._id, token });
  } catch (error) {
    throw "Error al registrar usuario.";
  }
};

const logginUser = async (
  _: any,
  { credentials }: { credentials: { name: string; password: string } }
) => {
  const { name, password } = credentials;
  const user = await User.findOne({ name });
  const doc = Object(user?._doc);
  const result = await compare(password, doc.password);
  if (!result) {
    throw new Error("Usuario no registrado");
  }

  const token = sign({ ...doc }, Config.SECRET_PASSWORD as string);
  return Object({ ...doc, id: doc._id, token });
};

const users = {
  Query: {
    users: getUsers,
    user: getUser,
    logginUser,
  },
  Mutation: {
    createUser,
  },
};

export default users;
