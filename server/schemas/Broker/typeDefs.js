const { gql } = require('graphql-tag');

const typeDefs = gql`
  input BrokerInput {
    name: String!
    referralID: String!
    email: String!
    phoneNumber: String!
  }

  type Broker {
    _id: ID!
    name: String!
    referralID: String!
    email: String!
    phoneNumber: String!
  }

  type Query {
    broker(referralID: String!): Broker
    brokers: [Broker]
  }
`;

module.exports = typeDefs;
