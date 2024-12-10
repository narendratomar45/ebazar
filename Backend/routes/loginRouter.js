const express = require("express");
const handleLoginUser = require("../controller/loginController");
const router = express.Router();
router.post("/", handleLoginUser);
module.exports = router;
