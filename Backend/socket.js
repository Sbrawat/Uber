const socketIO = require("socket.io");
const userModel = require("./models/user.model");
const captainModel = require("./models/captain.model");

let io;

function initializeSocket(server) {
  //Initialize the socket connections
  io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("join", async (data) => {
      try {
        const { userId, userType } = data;

        if (userType === "user") {
          console.log(`User connected: ${socket.id} ${userId}`);
          const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { socketId: socket.id },
            { new: true } // This returns the updated document
          );
          if (!updatedUser) {
            console.log(
              `Failed to update user ${userId} with socket ${socket.id}`
            );
            return;
          }
          console.log("Updated user:", updatedUser);
        } else if (userType === "captain") {
          console.log(`Captain connected: ${socket.id}`);
          const u1 = await captainModel.findByIdAndUpdate(userId, {
            socketId: socket.id,
          });
          console.log(u1);
          console.log(u1["socketId"]);
        }
      } catch (error) {
        console.error("Error in join event:", error);
      }
    });

    socket.on("update-location-captain", async (data) => {
      try {
        const { userId, lat, lng } = data;

        if (!lat || !lng || !userId) {
          return socket.emit("error", { message: "Invalid location data" });
        }

        await captainModel.findByIdAndUpdate(userId, {
          location: {
            lat: lat,
            lng: lng,
          },
        });
      } catch (error) {
        console.log(error);
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}

function sendMessageToSocketId(socketId, message) {
  //Send message to a specific socket ID

  if (io) {
    io.to(socketId).emit(message.event, message.data);
  } else {
    console.log("Socket.io is initialized.");
  }
}

module.exports = { initializeSocket, sendMessageToSocketId };
