const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

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