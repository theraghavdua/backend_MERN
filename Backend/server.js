const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./config/mongodb");
const connectCloudinary = require("./config/cloudinary");
const userRouter = require("./routes/userRoute");
const doctorRouter = require("./routes/doctorRoute");
const adminRouter = require("./routes/adminRoute");
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter); // user Route
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
