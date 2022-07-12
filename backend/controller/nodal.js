const nodalData = require('../model/nodalOfficer')


const getNodal = async (req, res) => {
    try {
        const nodal = await nodalData.find();
        res.status(200).json(nodal);
    } catch (error){
        console.log(nodal);
        res.status(400).json({message: error.message})
    }
}


module.exports = {getNodal}