import Job, { IJob } from "../entities/Job";

const getJobs = async (root: any, data: any, { user }: any) => {
  if (!user) {
    throw "Usuario no autenticado.";
  }
  return await Job.find({ user: user._id });
};

const removeJob = async (_: any, { id }: { id: string }, { user }: any) => {
  if (!user) {
    throw "Usuario no autenticado.";
  }
  return await Job.findByIdAndDelete(id);
};

const createJob = async (_: any, { job }: { job: IJob }, { user }: any) => {
  if (!user) {
    throw "Usuario no autenticado.";
  }

  return await Job.create({ ...job, user: user._id });
};

const removeAllJobsUser = async (_: any, date: any, { user }: any) => {
  if (!user) {
    throw "Usuario no autenticado.";
  }
  let { deletedCount } = await Job.deleteMany({ user: user._id });
  return { status: 200, result: deletedCount };
};

const setJob = async (
  _: any,
  data: { id: string; job: IJob },
  { user }: any
) => {
  if (!user) {
    throw "Usuario no autenticado.";
  }
  return await Job.findByIdAndUpdate(data.id, data.job, { new: true });
};

const getJobsUser = async (root: any, data: any, { user }: any) => {
  if (!user) {
    throw "Usuario no autenticado.";
  }
  if(user._id != root.id){
    throw "El usuario no es propietario."
  }
  return await Job.find({ user: root.id });
};

const jobs = {
  Query: {
    jobs: getJobs,
  },
  User: {
    jobs: getJobsUser,
  },
  Mutation: {
    removeJob,
    createJob,
    removeAllJobsUser,
    setJob,
  },
};

export default jobs;
