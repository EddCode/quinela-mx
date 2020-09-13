import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

const resolverDir = path.join(__dirname, "typesResolvers");
const resovlers = loadFilesSync(resolverDir, { recursive: true });

export default mergeResolvers(resovlers);
