const foundChild = require("../model/foundChild");
const nodalOfficer = require("../model/nodalOfficer");
const { sendMail } = require("../controller/mail");
const userSchema = require("../model/userSchema");
const complaintSchema = require("../model/complaint");
const logger = require("../logger");
const mongoose = require("mongoose");

// Validators
const foundChildValidator = require("../validation/foundChildValidator");

const reportChild = async (req, res) => {
  const body = req?.body;
  const name = body?.name;
  const description = body?.description;
  const img = body?.img;
  const userEmail = body?.email;
  const pNo = body?.phoneNumber;
  const anonymous = body?.isAnon;

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
    data = {
      ...data,
      reportedBy: anonUser,
      email: userEmail,
      phoneNumber: pNo,
    };
  } else {
    data = { ...data, reportedBy: req?.user?._id };
  }

  try {
    await foundChildValidator.validateAsync(data);
  } catch (err) {
    logger.error(err);
    return res.status(400).send(err);
  }

  const newFoundChild = new foundChild(data);
  await newFoundChild.save();
  logger.info("New Child Reported");
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

const createComplaint = async (req, res) => {
  const body = req?.body;
  const aadhar_no = body?.aadhar_no;
  const desc = body?.description;

  try {
    let newComplaint;
    if (desc) {
      newComplaint = new complaintSchema({ aadhar_no, description: desc });
    } else {
      newComplaint = new complaintSchema({ aadhar_no });
    }

    await newComplaint.save();
    return res.status(201).send({ newComplaint });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const getAllComplaints = async (req, res) => {
  const allComplaints = await complaintSchema.find().exec();
  const data = [];

  for (const complaint in allComplaints) {
    const compl = allComplaints[complaint];
    const childData = await foundChild
      .findOne({ aadhar_no: compl?.aadhar_no })
      .populate("acceptedBy")
      .exec();
    if (!childData) continue;
    data.push({
      _id: compl?._id,
      resolved: compl?.resolved,
      description: compl?.description,
      child: {
        _id: childData?._id,
        name: childData?.name,
        img: childData?.img,
      },
      ngo: {
        _id: childData?.acceptedBy?._id,
        name: childData?.acceptedBy?.name,
      },
      timestamp: compl?.createdAt,
    });
  }

  return res.status(200).send(data);
};

const getComplaintById = async (req, res) => {
  const { id } = req?.params;
  const complaint = await complaintSchema.findById(id).exec();
  const childData = await foundChild
    .findOne({ aadhar_no: complaint?.aadhar_no })
    .populate("acceptedBy")
    .exec();
  return res.status(200).send({
    _id: complaint?._id,
    resolved: complaint?.resolved,
    description: complaint?.description,
    child: {
      _id: childData?._id,
      name: childData?.name,
      img: childData?.img,
    },
    ngo: {
      _id: childData?.acceptedBy?._id,
      name: childData?.acceptedBy?.name,
    },
    timestamp: complaint?.createdAt,
  });
};

const updateComplaint = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No complaint found with id ${id}`);

  try {
    const complaint = await complaintSchema.findByIdAndUpdate(id, {
      $set: req.body,
    });
    return res.json(complaint);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  reportChild,
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
};
