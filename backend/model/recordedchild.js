const mongoose = require('mongoose');

const recordedchild = mongoose.Schema
(
    {
        name: String,
        age: Number,
        recordDate: 
        {
            type: Date, 
            default: Date.now
        },
        hasHousing:
        {
            type : Boolean,
            default: true
        }
    }

    {timestamps: true}
);
module.exports = mongoose.model('child', recordedchild);

