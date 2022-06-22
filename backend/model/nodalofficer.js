const mongoose = require('mongoose');

const nodalofficer = mongoose.Schema({
    id: Number,
    name: String,
    phoneNumber: String,
    
}, {timestamps: true});

module.exports = mongoose.model('nodal', nodalofficer);