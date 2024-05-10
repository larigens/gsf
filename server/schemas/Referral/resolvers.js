const { Referral } = require('../../models');

const resolvers = {
    Query: {
        referral: async (_, { referralId }) => {
            try {
                const referral = await Referral.findOne({ _id: referralId })
                    .select('-__v')
                    .populate('broker')
                return referral;
            } catch (err) {
                console.log(err);
                throw new Error(`Error retrieving referral: ${err.message}`);
            }
        },
        referrals: async () => {
            try {
                const referrals = await Referral.find()
                    .populate('broker')
                return referrals;
            } catch (err) {
                console.log(err);
                throw new Error(`Error retrieving referrals: ${err.message}`);
            }
        }
    }
}

module.exports = resolvers;