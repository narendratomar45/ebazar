const jwt = require("jsonwebtoken");
require("dotenv").config();

const protectRoute = (req, res, next) => {
  const authHeader = req.header("Authorization"); // Get Authorization header

  // Check if the Authorization header is present
  if (!authHeader) {
    return res
      .status(401)
      .json({ success: false, msg: "No token, authorization denied" });
  }

  // Extract token from 'Bearer <token>'
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, msg: "Token missing in Authorization header" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user ID to the request
    req.user = decoded.userId;

    // Proceed to the next middleware or route
    next();
  } catch (error) {
    console.error("Authorization error:", error);

    // Handle specific errors based on error type
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({
          success: false,
          msg: "Token has expired. Please log in again.",
        });
    } else if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ success: false, msg: "Invalid token. Authorization denied." });
    } else {
      return res
        .status(500)
        .json({
          success: false,
          msg: "Authorization error. Please try again later.",
        });
    }
  }
};

module.exports = protectRoute;















