const Joi = require("joi");
const schema = Joi.object().keys({
  name: Joi.string().min(4).max(40),
  description: Joi.string().min(10).max(400).required(),
  img: Joi.string().required(),
  address: Joi.string().min(6).max(300).required(),
  state: Joi.string().required(),
  district: Joi.string().required(),
  lastKnownLocation: Joi.array().items(Joi.number(), Joi.number()),
  isVerified: Joi.boolean(),
  isAccepted: Joi.boolean(),
  hasHousing: Joi.boolean(),
  inSchool: Joi.boolean(),
  compCompleted: Joi.boolean(),
  reportedBy: Joi.any(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  phoneNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/),
  rzp_contactId: Joi.string(),
  rzp_fundAcId: Joi.string(),
  payouts: Joi.array(),
});

module.exports = schema;
