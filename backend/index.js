require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json({ limit: '64mb' }))
app.use(cors())

// Add additional Routes
const authRoutes = require('./routes/auth')
app.use('/auth', authRoutes)

const pencilRoutes = require('./routes/pencil')
app.use('/pencil', pencilRoutes)

const userRoutes = require('./routes/user')
app.use('/users', userRoutes)

const ngoRoutes = require('./routes/ngo')
app.use('/ngo', ngoRoutes)

const nodalRoutes = require('./routes/nodal')
app.use('/nodal', nodalRoutes)


const foundChildRoutes = require('./routes/foundChild')
app.use('/foundchild', foundChildRoutes)

const PORT = process.env.PORT || 5000
// const MONGO_URL = 'mongodb+srv://MeenalPrakash:meenal2003@cluster0.wwhtx.mongodb.net/ProjectPayRoll?retryWrites=true&w=majority';
const MONGO_URL =
  'mongodb+srv://sihuser:sihuser@cluster0.iytwb.mongodb.net/sih?retryWrites=true&w=majority'
mongoose.set('bufferCommands', false)
mongoose.connect(MONGO_URL, () => {
  console.log('Database Connected')
  app.listen(PORT, () => {
    console.log('server is running at port 5000')
  })
})
