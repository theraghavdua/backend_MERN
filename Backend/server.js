const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./config/mongodb.js");
const connectCloudinary = require("./config/cloudinary.js");
const userRouter = require("./routes/userRoute.js");
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
app.use(express.json());
app.use(cors());



app.use("/api/user", userRouter);//user Route

app.get("/", (req, res) => {
  res.send("API Working");
});






app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
