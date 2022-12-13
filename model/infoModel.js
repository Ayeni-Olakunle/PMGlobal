const mongoose = require('mongoose');
const infoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    linkName: {
        type: String,
        required: [true, "Please enter a text"],
    },
    link: {
        type: String,
        required: [true, "Please enter a text"],
    },
    description: {
        type: String,
        required: [true, "Please enter a text"],
    }
}, { timestamps: true })

module.exports = mongoose.model("informations", infoSchema)