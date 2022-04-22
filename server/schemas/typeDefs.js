const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook([author], description: String!, bookId: Int!, image: String!, link: String!): User
    removeBook(bookId: string): User;
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
      bookId: String,
      authors: [author],
      description: String,
      title: String,
      image: String,
      link: String,
  }

  type Auth {
      token: ID!
      user: User
  }

  `;

module.exports = typeDefs;