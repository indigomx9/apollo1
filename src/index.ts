import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { createConnection } from "typeorm";

const main = async () => {
    // Setup Express and connect to TypeORM database.
    await createConnection();
    const app: express.Application = await express();

    // Setup Apollo Server 
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server is runnin on port ${port}`);
        console.log(`Press Ctrl + C to exit.`);
    })
};

main();

