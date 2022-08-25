const { default: mongoose } = require('mongoose')
const foundChild = require('../model/foundChild')
const data = require('../model/foundChild')

const getfoundChildData = async (req, res) => {
  try {
    const foundChildData = await data.find().populate('reportedBy', { password: 0 })
    res.status(200).json(foundChildData)
  } catch (error) {
    res.status(400).error({ message: error.message })
  }
}

const updateFoundChild = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No child found with id ${id}`)

  const updatedPost = req.body
  try {
    const child = await foundChild.findByIdAndUpdate(id, {
      $set: req.body,
    })
    res.json(child)
  } catch (err) {
    res.status(500).json(err)
  }
}
module.exports = { getfoundChildData, updateFoundChild }
