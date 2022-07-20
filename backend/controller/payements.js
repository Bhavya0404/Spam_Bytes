const foundChild = require("../model/foundChild");
const axios = require("axios");

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
  const contact = JSON.stringify({
    name: child?.name,
    type: "customer",
    reference_id: `${child?._id}`,
  });

  var config = {
    method: "post",
    url: "https://api.razorpay.com/v1/contacts",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(RZP_API_KEY + ":" + RZP_API_SECRET).toString("base64"),
    },
    data: contact,
  };

  await axios(config)
    .then(async (resp) => {
      const contactId = resp?.data?.id;
      child.rzp_contactId = contactId;
      await child.save();
      return res
        .status(201)
        .send({ message: "Customer Details Saved Successfully", child });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: err?.response?.data.error });
    });
};

const addBankDetails = async (req, res) => {
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
  // if (!child?.rzp_contactId) {
  //   await createContact(req, res);
  // }
  const bankData = JSON.stringify({
    contact_id: child?.rzp_contactId,
    account_type: "bank_account",
    bank_account: {
      name: child?.name,
      ifsc: req?.body?.ifsc,
      account_number: req?.body?.ac_no,
    },
  });

  var config = {
    method: "post",
    url: "https://api.razorpay.com/v1/fund_accounts",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(RZP_API_KEY + ":" + RZP_API_SECRET).toString("base64"),
    },
    data: bankData,
  };

  await axios(config)
    .then(async (resp) => {
      child.rzp_fundAcId = resp?.data?.id;
      await child.save();
      return res.status(201).json({ message: "A/C Created" });
    })
    .catch((err) => {
      console.error(err?.response?.data.error);
      return res.status(500).json({ error: err?.response?.data.error });
    });
};

const processPayout = async (req, res) => {
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

  const data = JSON.stringify({
    account_number: process.env.BANK_AC,
    fund_account_id: child?.rzp_fundAcId,
    amount: parseInt(req?.body?.amount) * 100,
    currency: "INR",
    mode: "IMPS",
    purpose: "payout",
    queue_if_low_balance: true,
    reference_id: `Payout ID ${child?._id}`,
    narration: `Payout of ${child?._id.toString()?.slice(0, 5)}`,
  });

  var config = {
    method: "post",
    url: "https://api.razorpay.com/v1/payouts",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(RZP_API_KEY + ":" + RZP_API_SECRET).toString("base64"),
    },
    data: data,
  };

  await axios(config)
    .then(async (resp) => {
      if (child?.payouts?.length === 0) {
        child.payouts = [resp?.data?.id];
      } else {
        const arr = child?.payouts;
        arr.push(resp?.data?.id);
        child.payouts = arr;
      }
      await child.save();
      return res
        .status(201)
        .json({ message: `Payout of INR ${req?.body?.amount} sent` });
    })
    .catch((err) => {
      console.error(err?.response?.data.error);
      return res.status(500).json({ error: err?.response?.data.error });
    });
};

const getPayoutStatus = async (req, res) => {
  const id = req?.params?.id;
  var config = {
    method: "get",
    url: `https://api.razorpay.com/v1/payouts/${id}`,
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(RZP_API_KEY + ":" + RZP_API_SECRET).toString("base64"),
    },
  };

  await axios(config)
    .then((resp) => {
      return res
        .status(200)
        .json({
          status: resp?.data?.status,
          utr: resp?.data?.utr,
          amount: resp?.data?.amount / 100,
          created_at: new Date(resp?.data?.created_at).toDateString(),
        });
    })
    .catch((err) => {
      console.error(err?.response?.data.error);
      return res.status(500).json({ error: err?.response?.data.error });
    });
};

module.exports = {
  createContact,
  addBankDetails,
  processPayout,
  getPayoutStatus,
};
