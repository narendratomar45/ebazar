const express = require("express");
const routerRegister = require("./routes/userRouter");
const loginRouter = require("./routes/loginRouter");
const protectedRoute = require("./routes/protectedRoute");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/register", routerRegister);
app.use("/login", loginRouter);
app.use("/profile", protectedRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error", err));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
