const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    phoneNumber: Number,
    email: String,
    address: String
})

module.exports = mongoose.model('User', userSchema)