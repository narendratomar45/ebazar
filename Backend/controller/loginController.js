// const User = require("../model/userModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// require("dotenv").config(); // Load environment variables

// async function handleLoginUser(req, res) {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ msg: "Email and Password are required" });
//   }

//   try {
//     // Fetch user from the database
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: "Invalid Credentials" });
//     }

//     // Compare password with hashed password stored
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Invalid Credentials" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { userId: user._id }, // Payload
//       process.env.JWT_SECRET, // Secret key
//       { expiresIn: "5d" } // Token expiration
//     );

//     // Send token and success response
//     return res.status(200).json({ msg: "Login successful", token: token });
//   } catch (error) {
//     console.error("Login Error: ", error);
//     return res.status(500).json({ msg: "Internal Server Error" });
//   }
// }

// module.exports = handleLoginUser;
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

async function handleLoginUser(req, res) {
  const { email, password } = req.body;

  // Check for missing fields
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "Email and Password are required" });
  }

  try {
    // Fetch user from the database
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "Invalid Credentials" });
    }

    // Compare password with hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, msg: "Invalid Credentials" });
    }

    // Generate JWT token with a configurable expiration time
    const token = jwt.sign(
      { userId: user._id }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: process.env.JWT_EXPIRATION || "5d" } // Token expiration from environment variable
    );

    // Send the token in the response
    return res
      .status(200)
      .json({ success: true, msg: "Login successful", token });
  } catch (error) {
    console.error("Login Error: ", error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
}

module.exports = handleLoginUser;
