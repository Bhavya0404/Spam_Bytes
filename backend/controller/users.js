const UserInfo = require('../model/userSchema')

exports.getUsers = async (req, res) => {
  try {
    const userInfo = await UserInfo.find()
    res.status(200).json(userInfo)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

