const rideModel = require("../models/ride.model");
const mapsService = require("../services/maps.service");

const getFare = async (pickup, destination) => {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapsService.getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 10,
    car: 15,
    motorcycle: 8,
  };
};

module.exports.createRide = async (user, pickup, destination) => {};
