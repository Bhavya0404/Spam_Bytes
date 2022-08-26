const nodalOfficer = require("../model/nodalOfficer");
const foundChild = require("../model/foundChild");

const getNodalCount = async (req, res) => {
  let allNodal = null;
  let allChildrenReported = null;
  let allChildrenResolved = null;
  if (!req?.body?.state) {
    allNodal = await nodalOfficer.find().exec();
    allChildrenReported = await foundChild.find().exec();
    allChildrenResolved = await foundChild
      .find({ isVerified: true, inSchool: true })
      .exec();
  } else {
    allNodal = await nodalOfficer.find({ state: req?.body?.state }).exec();
    allChildrenReported = await foundChild
      .find({ state: req?.body?.state })
      .exec();
    allChildrenResolved = await foundChild
      .find({ state: req?.body?.state, isVerified: true, inSchool: true })
      .exec();
  }

  return res.status(200).send({
    nodalCount: allNodal.length,
    childrenReported: allChildrenReported.length,
    childrenResolved: allChildrenResolved.length,
  });
};

module.exports = { getNodalCount };
