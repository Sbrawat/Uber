const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

// Register a new captain
module.exports.registerCaptain = async (req, res, next) => {

    // Validate the request body
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Destructure the request body
    const { fullname, email, password, vehicle } = req.body;


    const existingCaptain = await captainModel.findOne({ email });
    if(existingCaptain) {
        return res.status(400).json({ message: "Captain already exists" });
    }

    const hashPassword = await captainModel.hashPassword(password);

    //create a captain
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname, 
        lastname: fullname.lastname, 
        email, 
        password: hashPassword,
        color: vehicle.color, 
        plate: vehicle.plate, 
        capacity: vehicle.capacity, 
        type: vehicle.type
    });

    const token = await captain.generateAuthToken();

    res.status(201).json({ token, captain });
}

// Login a captain
module.exports.loginCaptain = async (req, res, next) => {
    // Validate the request body
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Destructure the request body
    const { email, password } = req.body;

    // Check if the captain exists
    const captain = await captainModel.findOne({ email }).select('+password');
    if(!captain) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const isMatch = await captain.comparePassword(password);
    if((!isMatch)) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    //Generate a token
    const token = await captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, captain });
}

// Get captain profile
module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
}

// Logout a captain
module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

    await blacklistTokenModel.create({ token }); 

    res.clearCookie('token');

    res.status(200).json({ message: "Logged out successfully" });
}