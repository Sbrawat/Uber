const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  try {
    const coordinates = await mapsService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(404).json({ error: "Coordinates Not Found" });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { origin, destination } = req.query;

  try {
    const distanceTime = mapsService.getDistanceTime(origin, destination);
    res.status(200).json({ distanceTime });
  } catch (error) {
    res.status(404).json({ error: "Distance and Time Not Found" });
  }
};
