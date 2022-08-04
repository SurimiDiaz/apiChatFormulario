import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID
    userName: String
    lastname: String
    motherLastName: String
    birth: String
    email: String
    phone: Int
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }

  type UserInput {
    userName: String
    lastname: String
    motherLastName: String
    birth: String
    email: String
    phone: Int
  }

  type Mutation {
    createUser(
      userName: String
      lastname: String
      motherLastName: String
      birth: String
      email: String
      phone: Int
    ): User
  }
`;
