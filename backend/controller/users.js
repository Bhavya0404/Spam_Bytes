const UserInfo = require('../model/userSchema')

exports.getUsers = async (req, res) => {
  try {
    const userInfo = await UserInfo.find()
    const { password, ...others } = userInfo
    res.status(200).json(others)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
