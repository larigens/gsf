const Broker = require('../../models/Broker.js');

const resolvers = {
    Query: {
        broker: async (_, { referralID }, context) => {
            if (context !== referralID) {
                console.error(error);
                throw new Error(`${err.message}`);
            }
            else {
                try {
                    const broker = await Broker.findOne({ referralID: context });
                    return broker;
                } catch (error) {
                    console.error(error);
                    throw new Error(`Error retrieving broker: ${err.message}`);
                }
            }
        },
        brokers: async () => {
            try {
                const brokers = await Broker.find();
                console.log(brokers)
                return brokers;
            } catch (error) {
                console.error(error);
                throw new Error(`Error retrieving brokers: ${error.message}`);
            }
        },
    }
};

module.exports = resolvers;
