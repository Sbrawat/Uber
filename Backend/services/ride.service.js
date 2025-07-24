const rideModel = require("../models/ride.model");
const mapsService = require("../services/maps.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("pickup and destination are required");
  }

  const distanceTime = await mapsService.getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {
    auto:
      baseFare.auto +
      (distanceTime.distance.value / 1000) * perKmRate.auto +
      (distanceTime.duration.value / 60) * perMinuteRate.auto,
    car:
      baseFare.car +
      (distanceTime.distance.value / 1000) * perKmRate.car +
      (distanceTime.duration.value / 60) * perMinuteRate.car,
    moto:
      baseFare.moto +
      (distanceTime.distance.value / 1000) * perKmRate.moto +
      (distanceTime.duration.value / 60) * perMinuteRate.moto,
  };

  return fare;
}

function getOTP(num) {
  function generateOTP(num) {
    const OTP = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();

    return OTP;
  }

  return generateOTP(num);
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);

  const ride = rideModel.create({
    user,
    pickup,
    destination,
    otp: getOTP(6),
    fare: fare[vehicleType],
  });

  return ride;
};
