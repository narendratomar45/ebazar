const express = require("express");
const protectRoute = require("../middleware/protectMiddleware");
const router = express.Router();
router.get("/", protectRoute, (req, res) => {
  // If the user is authenticated, the `req.user` contains the user ID
  res.status(200).json({ msg: "Profile data", userId: req.user });
});
module.exports = router;
