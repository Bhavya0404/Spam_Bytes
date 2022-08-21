const Joi = require('joi')

const schema = Joi.object().keys({
    email: Joi.string().email({minDomainSegments: 2}).required(),
    password: Joi.string().min(2).required(), // TODO Change back to 8
})

module.exports = schema;