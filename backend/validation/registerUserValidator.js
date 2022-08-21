const Joi = require('joi')

const schema = Joi.object().keys({
    email: Joi.string().email({minDomainSegments: 2}).required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(4).max(40).required(),
    acType: Joi.string().required(),
    isAdmin: Joi.boolean(),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required()
})

module.exports = schema;