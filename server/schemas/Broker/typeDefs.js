const { gql } = require('graphql-tag');

const typeDefs = gql`
  input BrokerInput {
    name: String!
    brokerID: String!
    email: String!
    phoneNumber: String!
  }

  type Broker {
    _id: ID!
    name: String!
    brokerID: String!
    email: String!
    phoneNumber: String!
    referral: [Referral]
  }

  type Query {
    broker(brokerId: ID!): Broker
    brokers: [Broker]
  }
`;

module.exports = typeDefs;
