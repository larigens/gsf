const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Referral {
    _id: ID!
    company: String!
    logo: String
    application: String
    broker: Broker!
  }

  type Query {
    referral(referralId: ID!): Referral
    referrals: [Referral]
  }

  `;

module.exports = typeDefs;