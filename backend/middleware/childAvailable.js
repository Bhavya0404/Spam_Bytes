const foundChild = require('../model/foundChild')

const isAvailable = async (req, res, next) => {
  // will check if child is available for change or not
  const { id } = req.params

  try {
    const data = await foundChild.findById(id)
    if (data.isAccepted == false) {
      next()
    } else {
      return res
        .status(403)
        .send({ error: 'user is already accepted', code: 403 })
    }
  } catch (err) {
    return res.send(err)
  }
}

module.exports = {
  isAvailable,
}
