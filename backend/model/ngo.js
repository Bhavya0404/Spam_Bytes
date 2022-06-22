const mongoose = require('mongoose');

const ngo = mongoose.Schema
(
    {
        ngoname: String,
        ngoID: Number,
        address: String,
        
        isVerified:
        {
            type : Boolean,
            default: true
        }
    },
    {timestamps: true}
);
module.exports = mongoose.model('NGO', ngo);