const express = require('express');  
const {
  doctorList, 
  changeAvailablity
} = require('../controllers/doctorController');  
const authDoctor = require('../middleware/authDoctor'); 

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/change-availability", authDoctor, changeAvailablity);

module.exports = doctorRouter;