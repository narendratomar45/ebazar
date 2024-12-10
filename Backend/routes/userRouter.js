const express = require("express");
const {
  handleRegistration,
  handleCreateRegister,
} = require("../controller/userController");
const router = express.Router();
router.get("/", handleRegistration);
router.post("/", handleCreateRegister);
module.exports = router;
