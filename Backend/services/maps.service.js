const axios = require("axios");
const captainModel = require("../models/captain.model");

module.exports.getAddressCoordinate = async (address) => {
  if (!address) {
    throw new Error("Address is required.");
  }
  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("origin and destination are required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0] === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }
      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.getSuggestions = async (input) => {
  if (!input) {
    throw new Error("query is required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.getCaptainsInTheRadius = (lat, lng, radius) => {
  if (!lat || !lng || !radius) {
    throw new Error("Latitude, longitude and radius are required");
  }

  if (isNaN(lat) || isNaN(lng) || isNaN(radius)) {
    throw new Error("Invalid coordinates or radius");
  }

  // Convert lat/lng to numbers to ensure correct type
  const latitude = parseFloat(lat);
  const longitude = parseFloat(lng);
  const radiusInKm = parseFloat(radius);

  const captains = captainModel.find({
    location: {
      $geoWithin: {
        $centerSphere: [[latitude, longitude], radiusInKm / 6378.1], // Earth's radius in KM
      },
    },
    // status: "active", // Only find active captains
  });

  return captains;
};
