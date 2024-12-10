const Registration = require("../model/userModel");
const bcrypt = require("bcryptjs");

async function handleRegistration(req, res) {
  try {
    const users = await Registration.find({});
    return res.status(200).json({ success: true, users });
  } catch (err) {
    console.error("Error fetching users:", err.message);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
}

async function handleCreateRegister(req, res) {
  const { username, email, password } = req.body;

  // Validate required fields
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, msg: "User already exists. Please login." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await Registration.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      msg: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error("Error creating user:", err.message);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
}

module.exports = {
  handleRegistration,
  handleCreateRegister,
};
