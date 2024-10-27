import { mergeResolvers } from "@graphql-tools/merge";
import jobs from "./resolversgql/jobs";
import users from "./resolversgql/users";

const resolver = mergeResolvers([users,jobs]);

export default resolver;
