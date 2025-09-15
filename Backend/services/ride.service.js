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
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        (distanceTime.distance.value / 1000) * perKmRate.moto +
        (distanceTime.duration.value / 60) * perMinuteRate.moto
    ),
  };

  return fare;
}

module.exports.getFare = getFare;

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

module.exports.confirmRide = async (rideId, captainId) => {
  if (!rideId || !captainId) {
    throw new Error("RideId is required");
  }

  await rideModel.findOneAndUpdate(
    {
      _id: rideId,
    },
    {
      status: "accepted",
      captain: captainId,
    }
  );

  const ride = await rideModel
    .findById(rideId)
    .populate("user")
    .populate("captain")
    .select("+otp");

  if (!ride) {
    throw new Error("Ride not found");
  }

  return ride;
};

module.exports.startRide = async (rideId, otp) => {
  if (!rideId || !otp) {
    throw new Error("Ride ID, otp and captain are required");
  }

  const ride = await rideModel
    .findById(rideId)
    .populate("user")
    .populate("captain")
    .select("+otp");

  if (!ride) {
    throw new Error("Ride not found");
  }

  if (ride.status != "accepted") {
    throw new Error("Ride not accepted");
  }

  if (ride.otp != otp) {
    throw new Error("Invalid OTP");
  }

  await rideModel.findByIdAndUpdate(rideId, {
    status: "ongoing",
  });

  return ride;
};

module.exports.endRide = async (rideId, captain) => {
  if (!rideId) {
    throw new Error("RideId is required");
  }

  const ride = await rideModel
    .findOne({
      _id: rideId,
      captain: captain._id,
    })
    .populate("user")
    .populate("captain")

  if (!ride) {
    throw new Error("Ride not found");
  }

  if (ride.status !== "ongoing") {
    throw new Error("Ride is not ongoing");
  }

  await rideModel.findByIdAndUpdate(rideId, {
    status: "completed",
  });

  return ride;
};
