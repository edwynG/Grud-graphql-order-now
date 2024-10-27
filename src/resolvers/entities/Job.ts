import { model, Schema } from "mongoose";

export interface IJob {
  id?: string;
  user: string;
  title: string;
  content: string;
  date: string;
  lastModified?: string;
}
export const jobShema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref:"user"
  },
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  lastModified: {
    type: String,
    require: false,
  },
});
const Job = model("Job", jobShema);

export default Job;
