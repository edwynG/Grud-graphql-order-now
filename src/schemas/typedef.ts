import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

const location: string[] = [__dirname,"../", "schemas/schemagql/**/*.gql"];
const typeDef = loadFilesSync(path.join(...location));
export default typeDef;
