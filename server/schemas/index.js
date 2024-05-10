const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import type definitions and resolvers for each schema
const brokerTypeDefs = require('./Broker/typeDefs.js');
const brokerResolvers = require('./Broker/resolvers.js');
const referralTypeDefs = require('./Referral/typeDefs');
const referralResolvers = require('./Referral/resolvers');

// Merge typeDefs and resolvers
const mergedResolvers = mergeResolvers([referralResolvers, brokerResolvers])
const mergedTypeDefs = mergeTypeDefs([referralTypeDefs, brokerTypeDefs])

module.exports = { resolvers: mergedResolvers, typeDefs: mergedTypeDefs }