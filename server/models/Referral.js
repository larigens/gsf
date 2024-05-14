const { Schema, model } = require('mongoose');

const referralSchema = new Schema({
    company: {
        type: String,
        required: [true, 'Company name is required!'],
        unique: true,
        trim: true,
    },
    linkID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    logo: {
        data: Buffer,
        contentType: String
    },
    application: {
        data: Buffer,
        contentType: String
    },
    broker: {
        type: Schema.Types.ObjectId,
        ref: 'Broker',
        required: true,
    }
}, {
    timestamps: true,
});


const Referral = model('Referral', referralSchema);

module.exports = Referral;