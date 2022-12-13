const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please add a first name"],
    },
    lastname: {
        type: String,
        required: [true, "Please add a last name"],
    },
    email: {
        type: String,
        required: [true, "Please add a email"],
        unique: true
    },
    gender: {
        type: String,
        required: [true, "Please add a gender"],
    },
    phone_number: {
        type: String,
        required: [true, "Please add a phone number"],
        unique: true
    },
    date_of_birth: {
        type: String,
        required: [true, "Please add a data of birth"],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
    },
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)