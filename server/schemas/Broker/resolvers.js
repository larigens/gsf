const { Broker } = require('../../models');

const resolvers = {
    Query: {
        broker: async (_, { brokerId }, context) => {
            if (context !== brokerId) {
                console.error(error);
                throw new Error(`${err.message}`);
            }
            else {
                try {
                    const broker = await Broker.findOne({ _id: brokerId })
                        .select('-__v')
                        .populate('referral')
                    return broker;
                } catch (error) {
                    console.error(error);
                    throw new Error(`Error retrieving broker: ${err.message}`);
                }
            }
        },
        brokers: async () => {
            try {
                const brokers = await Broker.find()
                    .populate('referral')
                return brokers;
            } catch (error) {
                console.error(error);
                throw new Error(`Error retrieving brokers: ${error.message}`);
            }
        },
    }
};

module.exports = resolvers;
