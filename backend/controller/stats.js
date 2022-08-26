const nodalOfficer = require("../model/nodalOfficer");

const getNodalCount = async (req, res) => {
  const allNodal = await nodalOfficer.find({ state: req?.body?.state }).exec();
  return res.status(200).send({ count: allNodal.length });
};

module.exports = { getNodalCount };
