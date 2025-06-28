// This is the main entry point of the application
// It sets up the server, connects to the database, and defines routes

// Importing required modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./db/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const { body } = require("express-validator");
const mapsRoutes = require("./routes/maps.routes");

// Connected to the database
connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

//Routes
app.use("/user", userRoutes);
app.use("/captain", captainRoutes);
app.use("/maps", mapsRoutes);

module.exports = app;
