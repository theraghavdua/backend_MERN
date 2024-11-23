const express = require('express');  
const { 
  loginDoctor, 
  appointmentsDoctor, 
  appointmentCancel, 
  doctorList, 
  changeAvailablity, 
  appointmentComplete, 
  doctorDashboard, 
  doctorProfile, 
  updateDoctorProfile 
} = require('../controllers/doctorController');  
const authDoctor = require('../middleware/authDoctor'); 

const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);

doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);


module.exports = doctorRouter;  // Export with module.exports