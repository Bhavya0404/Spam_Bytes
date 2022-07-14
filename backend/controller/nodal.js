const nodalData = require("../model/nodalOfficer");
const ngo = require("../model/ngo");
const foundChild = require("../model/foundChild");
const { sendMailChild } = require("./mail");

// Helper function to get Emails
const getEmails = async (ngoList) => {
    let emailList = [];
    ngoList.forEach(ngo => emailList.push(ngo?.user?.email))
    return emailList;
}

const getNodal = async (req, res) => {
  try {
    const nodal = await nodalData.find();
    res.status(200).json(nodal);
  } catch (error) {
    console.log(nodal);
    res.status(400).json({ message: error.message });
  }
};

const verifyChild = async (req, res) => {
  const id = req?.params?.id;
  const exists = await foundChild.findById(id).exec();
  if (!exists) {
    return res.status(400).json({ message: "Child not found" });
  }
  exists.isVerified = true;
  await exists.save();
  const ngoEmails = await ngo.find({ district: exists.district }).populate('user').exec();
  if (ngoEmails) {
    let emailList = await getEmails(ngoEmails);  
    emailList?.forEach(email => {
        sendMailChild(email, id, `Help for a Needy Child required`)
        console.log(`Sending mail to ${email}`);
    }) 
  }
  return res.status(200).json({ message: `Verified Child with id ${id}` });
};

module.exports = { getNodal, verifyChild };
