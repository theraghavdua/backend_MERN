const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { v2: cloudinary } = require("cloudinary");
const appointmentModel = require("../models/appointmentModel");
const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModel");

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentsAdmin = async (req, res) => {
    try {
        const appointments = await appointmentModel.find({});
        res.json({ success: true, appointments });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


module.exports = {
    loginAdmin,
    appointmentsAdmin
};
