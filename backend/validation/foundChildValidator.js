const Joi = require("joi");
const schema = Joi.object().keys({
  name: Joi.string().min(4).max(40).allow("", null),
  description: Joi.string().allow("", null),
  img: Joi.string(),
  address: Joi.string().allow("", null),
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
  phoneNumber: Joi.string().allow("", null),
  rzp_contactId: Joi.string(),
  rzp_fundAcId: Joi.string(),
  payouts: Joi.array(),
});

module.exports = schema;
