const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://127.0.0.1:27017/food-deliveryDb");

const { Schema } = mongoose;
// email, phoneNumber, password, role, fullName, fatherName, motherName)
const userSchema = new Schema({
  fullName: String,
  email: String,
  userName: String,
  password: String,
  confirmPassword: String,
});
const User = mongoose.model("User", userSchema);
app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  User.create(req.body);
  res.send("/register User succeessfylly posted ");
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
