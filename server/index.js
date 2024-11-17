const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const isConnected = await mongoose.connect(
      "mongodb://127.0.0.1:27017/food-deliveryDb"
    );
    if (isConnected) console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
};
dbConnect();

const { Schema } = mongoose;
// email, phoneNumber, password, role, fullName, fatherName, motherName)
const userSchema = new Schema({
  fullName: String,
  email: { type: String, unique: true },
  userName: String,
  password: String,
  confirmPassword: String,
});
const User = mongoose.model("User", userSchema);
app.use(express.json());
app.use(cors());

// app.post("/register", (req, res) => {
//   User.create(req.body);
//   res.send("/register User succeessfylly posted ");
//   console.log(req.body);
// });
app.post("/register", async (req, res) => {
  //1. email exists or not?
  const emailExist = await User.exists({ email: req.body.email });
  if (emailExist) return res.status(409).send({ msg: "Email already exist!" });
  // yes exists:
  //-------> return msg email taken
  // no exists:
  //2. password hash
  req.body.password = await bcrypt.hash(req.body.password, saltRounds);
  //3. save to db
  User.create(req.body);
  res.send({ msg: req.body.role + " created successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //STEP 1: check if email exists
  const user = await User.findOne({ email });

  if (!user) return res.status(401).send({ msg: "Invalid Email!!" });

  //STEP 2: Compare the password
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched)
    return res.status(401).send({ msg: "Invalid Password!!" });

  //STEP 3: Generate unique token for the user to mark that he is logged in
  const token = jwt.sign({ email }, process.env.SECRET_KEY);

  res.send({
    token,
    user,
    isLoggednIn: true,
    msg: "Authorized!!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
