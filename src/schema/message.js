import { gql } from 'apollo-server-express';

export default gql`
type Message {
  id: ID!
  text: String!
  authorId: ID!
  user: User!
}
  extend type Query {
    messages: [Message]
    message(id: ID!): Message!
  }

  extend type Mutation {
    createMessage(text: String!,authorId: ID!): Message!
    updateMessage(id:ID!,text: String!,): [Int!]!
    deleteMessage(id: ID!): Int!
  }
`;