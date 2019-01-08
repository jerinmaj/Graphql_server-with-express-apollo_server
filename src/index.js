import 'dotenv/config';
import express from 'express';
import { ApolloServer,gql } from "apollo-server-express";
// console.log(process.env.MY_SECRET);

import cors from 'cors';
const app =express();
app.use(cors());

const schema = gql`
type Query {
    me: User
    user(id: ID!):User
}

type User{
    id: ID!
    username:String!
}
`;

const resolvers ={
    Query:{
        me:() =>{
            return{
            username:'jerin'
            };
        },
        user:()=>{
            return{
                username:'jerin2'
            };
        },
    },
};
const server = new ApolloServer({
    typeDefs:schema,
    resolvers,
});

server.applyMiddleware({app,path:'/graphql'});

app.listen({port:8000},()=>{
    console.log('Apollo server running http://localhost:8000/graphql');
});
