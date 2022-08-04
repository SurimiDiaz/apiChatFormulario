import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import resolvers from "./resolver.js";
import pool from "./databse/mysql.js";

export const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the api");
});

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use("*", (req, res) => {
    res.status(404).send("not found");
  });
  app.listen(3000, () => {
    console.log("server on port", 3000);
  });
}

start();
