const data = require("../model/foundChild");

const getfoundChildData = async (req, res) => {
  try {
    const foundChildData = await data.find().populate('reportedBy', {name: 1});
    res.status(200).json(foundChildData);
  } catch (error) {
    res.status(400).error({ message: error.message });
  }
};

module.exports = { getfoundChildData };
