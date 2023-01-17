import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import * as Query from "./resolvers/Query.js";
import * as Mutation from "./resolvers/Mutation.js";
import * as Match from "./resolvers/Match.js";
import * as Ball from "./resolvers/Ball.js";

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
  Match,
  Ball,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./src/schema.graphql", "utf-8"),
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: ({ req, res }) => ({
    ...req,
    prisma,
  }),
});

console.log(`🚀  Server ready at: ${url}`);
