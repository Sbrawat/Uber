const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post{'/register', [
    body('fullname.firstname').notEmpty().withMessage('First name is required'),
    body('fullname.lastname').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('vehicle.color').notEmpty().withMessage('Color is required'),
    body('vehicle.plate').notEmpty().withMessage('Plate is required'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.type').notEmpty().withMessage('Type is required'),
],
    captainController.registerCaptain
}

module.exports = router;