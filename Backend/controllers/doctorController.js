const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt");
const doctorModel = require("../models/doctorModel");
const appointmentModel = require("../models/appointmentModel");

const doctorList = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select(['-password', '-email']);
        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};





module.exports = {
    doctorList,
    changeAvailablity
};