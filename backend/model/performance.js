const mongoose = require("mongoose");

const parameters = new mongoose.Schema({
    height: Number,
    weight: Number,
    age: Number,
    percentage: Number,
})

const performance =  new mongoose.Schema(
    {
        childid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        details: {
            type: Array,
            default: [parameters]
        },
    }
)