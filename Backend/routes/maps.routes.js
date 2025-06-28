const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const mapsController = require("../controllers/maps.controller");
const { query } = require("express-validator");

router.get(
  "/get-coordinates",
  query("address")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Address is required"),
  authMiddleware.authUser,
  mapsController.getCoordinates
);

router.get(
  "get-distance-time",
  query("origin")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Origin Address is required."),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Origin Address is required."),
  authMiddleware.authUser,
  mapsController.getDistanceTime
);

module.exports = router;
