const Razorpay = require("razorpay");
const foundChild = require("../model/foundChild");
var instance = new Razorpay({
  key_id: process.env.RAZORPAY_TEST_KEYID,
  key_secret: process.env.RAZORPAY_TEST_SECRET,
});

const addDetails = async (req, res) => {
  const childId = req.body?._id;
  const child = await foundChild.findById(childId).exec();
  if (!child) {
    return res.status(404).send({ error: "Invalid Child" });
  }
  if (!child?.isVerified) {
    return res
      .status(400)
      .send({ error: "Child is not verified by the nodal officer" });
  }
  const customer = instance.customers.create({
    name: child?.name,
  });
  child.rzp_customerId = customer?.id
  await child.save();
  instance.virtualAccounts.create({
    recievers: {
        types: ["bank-account"]
    },
    description: `Virtual Account for PENCIL Child ${child?.name}`,
    customer_id: customer?.id
  })
  return res.status(201).send({message: "Customer Details Saved Successfully", child})
};
