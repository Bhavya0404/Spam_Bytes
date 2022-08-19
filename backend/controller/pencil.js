const foundChild = require("../model/foundChild");
const nodalOfficer = require("../model/nodalOfficer");
const { sendMail } = require("../controller/mail");
const userSchema = require("../model/userSchema");

const reportChild = async (req, res) => {
  const body = req?.body;
  const name = body?.name;
  const description = body?.description;
  const img = body?.img;
  const userEmail = body?.email;
  const anonymous = body?.isAnon;

  console.log(anonymous)

  const address = body?.address;
  const state = body?.state;
  const district = body?.district;
  const lastKnownLocation = [body?.lng, body?.lat];

  const anonUser = await userSchema.findById(process.env.ANON_USER_ID).exec();

  let data = {
    name,
    description,
    img,
    address,
    state,
    district,
    lastKnownLocation,
  };

  if (anonymous) {
    data = { ...data, reportedBy: anonUser, email: userEmail };
  } else {
    data = { ...data, reportedBy: req?.user?._id };
  }
  const newFoundChild = new foundChild(data);
  await newFoundChild.save();
  const user = await nodalOfficer.findOne({ district }).exec();
  if (user) {
    const email = user.email;
    if (email) {
      await sendMail(email, newFoundChild._id, "Sending mail to nodal officer");
      if (anonymous) {
        await sendMail(userEmail, newFoundChild._id, "Complaint Registered");
      }
    }
  }
  return res.status(201).send({ newFoundChild });
};

module.exports = { reportChild };
