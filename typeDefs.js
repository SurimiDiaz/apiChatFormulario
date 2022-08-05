import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID
    userName: String
    middleName: String
    lastname: String
    motherLastName: String
    birth: String
    email: String
    phone: String
  }

  type Message {
    message: String
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }

  type UserInput {
    userName: String
    middleName: String
    lastname: String
    motherLastName: String
    birth: String
    email: String
    phone: String
  }

  type Mutation {
    createUser(
      userName: String
      middleName: String
      lastname: String
      motherLastName: String
      birth: String
      email: String
      phone: String
    ): Message
  }
`;
