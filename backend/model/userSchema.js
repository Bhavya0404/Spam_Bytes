const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    name: String,
    phoneNumber: String,
    acType: {
        type: String,
        enum: ['ADMIN','IN', 'NGO'],
        default: 'IN'
    },
    
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);