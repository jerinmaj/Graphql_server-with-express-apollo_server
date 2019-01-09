import 'dotenv/config';
import express from 'express';
import { ApolloServer } from "apollo-server-express";
import uuidv4 from 'uuid/v4';
import cors from 'cors';

import schema from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models';
const app = express();
app.use(cors());




const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
        me: ""
    }

});

server.applyMiddleware({ app, path: '/graphql' });

sequelize.sync().then(async () => {
app.listen({ port: 8000 }, () => {
    console.log('Apollo server running http://localhost:8000/graphql');
});
});   
