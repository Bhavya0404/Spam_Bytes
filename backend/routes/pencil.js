const express = require('express');
const { isAdmin } = require('../middleware/auth');
const recordedChild = require('../model/recordedChild');
const foundChild = require('../model/foundChild');
const router = express.Router();

router.post('/', async (req, res) => {
    const body = req?.body;
    const name = body?.name;
    const description = body?.description;
    const img = req?.files?.img;
    const address = body?.address;
    const state = body?.state;
    const district = body?.district;
    const lastKnownLocation = [body?.lat, body?.lng];

    const data = {name, description, img, address, state, district, lastKnownLocation};
    const newFoundChild = new foundChild(data);
    await newFoundChild.save();
    return res.status(201).send({newFoundChild});
})

router.get('/', isAdmin, async (req, res) => {
    const children = await recordedChild.find({}).exec()
})

module.exports = router;