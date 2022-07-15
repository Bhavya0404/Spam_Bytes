const foundChild = require("../model/foundChild");
const RZP_API_KEY = process.env.RZP_API_KEY;
const RZP_API_SECRET = process.env.RZP_API_SECRET;

const createContact = async (req, res) => {
  const childId = req.body?.id;
  const child = await foundChild.findById(childId).exec();
  if (!child) {
    return res.status(404).send({ error: "Invalid Child" });
  }
  if (!child?.isVerified) {
    return res
      .status(400)
      .send({ error: "Child is not verified by the nodal officer" });
  }
  const contact = {
    name: child?.name,
    type: "customer",
    reference_id: `A/c for child w/ id ${child?._id}`,
  };

  const headers = new Headers();
  headers.append(
    "Authorization",
    "Basic " +
      Buffer.from(RZP_API_KEY + ":" + RZP_API_SECRET).toString("base64")
  );

  const response = await fetch("https://api.razorpay.com/v1/contacts", {
    method: "POST",
    headers,
    body: contact,
  });
  const json = await response.json();
  const contactId = json?.id;
  child.rzp_contactId = contactId;
  await child.save();
  return res
    .status(201)
    .send({ message: "Customer Details Saved Successfully", child });
};


const addBankDetails = async (req, res) => {}

module.exports = {createContact, addBankDetails}
