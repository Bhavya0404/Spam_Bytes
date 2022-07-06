const data = require('../model/foundChild')
const foundChildData = require('./foundChildData.json')

const getfoundChildData = async (req, res) => {
    try {
        // const foundChildData = await data.find()
        res.status(200).json(foundChildData)
    } catch (error) {
        res.status(400).error({message: error.message})
    }
}

module.exports = {getfoundChildData}