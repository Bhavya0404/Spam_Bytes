const ngoData = require('../model/ngo')
// const ngoData = require('./ngoData.json');
const getNgo = async (req, res) => {
  try {
    const ngoInfo = await ngoData.find()

    res.status(200).json(ngoInfo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { getNgo }
