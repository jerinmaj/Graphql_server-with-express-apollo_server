import 'dotenv/config';
import express from 'express';
import { ApolloServer,gql } from "apollo-server-express";
// console.log(process.env.MY_SECRET);


import cors from 'cors';
const app =express();
app.use(cors());

const schema = gql`
type Query {
    users: [User!]!
    me: User
    user(id: ID!):User
}

type User{
    id: ID!
    username:String!
}
`;
let users ={
    1:{id:'1',username:'jerin'},2:{id:'2',username:'majeed'}
}
let me = users[1];

const resolvers ={
    Query:{
        me:(parent, args, {me}) =>{
            return me;
        },
        user:(parent, {id})=>{
            return users[id];
        },
        users:() =>{
            return Object.values(users);
        },
    },
};
const server = new ApolloServer({
    typeDefs:schema,
    resolvers,
    context:{
        me: users[1],
    }

});

server.applyMiddleware({app,path:'/graphql'});

app.listen({port:8000},()=>{
    console.log('Apollo server running http://localhost:8000/graphql');
});
