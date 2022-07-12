const express = require("express");
const { isAdmin, isAuthenticated } = require("../middleware/auth");
const foundChild = require("../model/foundChild");
const nodalOfficer = require("../model/nodalOfficer");
const { sendMail } = require("../controller/mail");
const router = express.Router();

router.post("/report", isAuthenticated, async (req, res) => {
  const body = req?.body;
  const name = body?.name;
  const description = body?.description;
  const img = body?.img;
  console.log(img);
  const address = body?.address;
  const state = body?.state;
  const district = body?.district;
  const lastKnownLocation = [body?.lat, body?.lng];
  const isVerified = false;

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
    const email=user.email; 
     await sendMail(email, newFoundChild._id, "Sending mail to nodal officer");
  }
 
  return res.status(201).send({ newFoundChild });
});

router.get("/", isAdmin, async (req, res) => {
  const children = await recordedChild.find({}).exec();
});

module.exports = router;
