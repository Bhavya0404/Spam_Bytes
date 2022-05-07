const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Add additional Routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
// const MONGO_URL = 'mongodb+srv://MeenalPrakash:meenal2003@cluster0.wwhtx.mongodb.net/ProjectPayRoll?retryWrites=true&w=majority';
const MONGO_URL =
  "mongodb+srv://sihuser:sihuser@cluster0.iytwb.mongodb.net/sih?retryWrites=true&w=majority";
mongoose.connect(
  MONGO_URL,
  () => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log("server is running at port 3000");
    });
  }
);
