require("dotenv").config({ path: "./.env" });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//middlewares
const connectToDb = async () => {
  try {
    mongoose.connect(process.env.MONGODBURI, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log("error: ", error);
    console.log("Couldn't connect to DB");
  }
};
connectToDb();
app.use(cors());
app.use(express.json());

//import routes
const userRoutes = require("./routes/user/user.routes");

//
app.use(userRoutes);

const port = process.env.PORT || 4000;

let server = app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = server;
