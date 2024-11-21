const express = require('express');
const { loginUser, registerUser, getProfile, updateProfile } = require('../controllers/userController');
const upload = require('../middleware/multer');
const authUser = require('../middleware/authUser');

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get("/get-profile", authUser, getProfile);
userRouter.post("/update-profile", upload.single('image'), authUser, updateProfile);

module.exports = userRouter;