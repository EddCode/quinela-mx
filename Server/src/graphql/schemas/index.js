import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesDir = path.join(__dirname, "./", "types");
const typesDef = loadFilesSync(typesDir, { recursive: true });

export default mergeTypeDefs(typesDef, { all: true });
