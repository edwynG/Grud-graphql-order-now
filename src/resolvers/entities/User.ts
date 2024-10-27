import { model, Schema } from "mongoose";
import { IJob, jobShema } from "./Job";

export interface IUser {
  id?: string;
  password: string;
  name: string;
  jobs?: IJob[];
}

export const userSchema: Schema = new Schema({
  name: {
    type: String,
    require: true,
    unique:true

  },
  password: {
    type: String,
    require: true
  },
  jobs: {
    type: [jobShema],
    require: false,
  },
});

const User = model("User", userSchema);

export default User;
