import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  typeClient{
    id: ID!
      name: String!
  }
`
