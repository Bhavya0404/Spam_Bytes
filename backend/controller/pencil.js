const foundChild = require("../model/foundChild");
const nodalOfficer = require("../model/nodalOfficer");
const { sendMail } = require("../controller/mail");

const reportChild = async (req, res) => {
  const body = req?.body;
  const name = body?.name;
  const description = body?.description;
  const img = body?.img;
 
  const address = body?.address;
  const state = body?.state;
  const district = body?.district;
  const lastKnownLocation = [body?.lat, body?.lng];

  const data = {
    name,
    description,
    img,
    address,
    state,
    district,
    lastKnownLocation,
    reportedBy: req?.user?._id,
  };
  const newFoundChild = new foundChild(data);
  await newFoundChild.save();
  const user = await nodalOfficer.findOne({ district }).exec();
  if(user){
  const email = user.email;
  if(email){
  await sendMail(email, newFoundChild._id, "Sending mail to nodal officer");
  }
}
  return res.status(201).send({ newFoundChild });
};

module.exports = {reportChild}
