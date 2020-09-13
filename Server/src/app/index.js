import express from "express";
import cors from "cors";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { default as expressPlayground } from "graphql-playground-middleware-express";
import typeDefs from "../graphql/schemas";
import resolvers from "../graphql/resolvers";

const app = express();

app.set("port", 5000);

app.use(cors());
app.use(morgan("dev", { immediate: true }));
app.use(express.json());

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/api",
  graphqlHTTP({
    schema,
  })
);

if (process.env.NODE_ENV === "develop") {
  app.get("/playground", expressPlayground({ endpoint: "/api" }));
}

export default app;
