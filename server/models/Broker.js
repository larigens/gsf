const { Schema, model } = require('mongoose');
const { emailRegex, phoneNumberRegex } = require('../utils/validators');

const brokerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    referralID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        lowercase: true,
        trim: true,
        match: [emailRegex, 'Must match an email address!'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required!'],
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
                return phoneNumberRegex.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
},
    {
        timestamps: true,
    }
);

const Broker = model('Broker', brokerSchema);


module.exports = Broker;