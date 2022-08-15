const ngoData = require('../model/ngo')

const getNgo = async (req, res) => {
  try {
    const ngoInfo = await ngoData.find()

    res.status(200).json(ngoInfo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getNgoProfile = async (req, res) => {
  const user = req?.user
  const ngo = await ngoData.findOne({ user: user?._id }).populate('user').exec()
  return res.status(200).json(ngo)
}

module.exports = { getNgoProfile, getNgo }
