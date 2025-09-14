import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainHome = () => {
  //Refs
  const ridePopUpRef = useRef(null);
  const confirmRidePopUpRef = useRef(null);

  //UseStates
  const [ridePopUp, setRidePopUp] = useState(false);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const [ride, setRide] = useState(null);

  //Contexts
  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "captain", userId: captain._id });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-captain", {
            userId: captain._id,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    };

    updateLocation();
    const locationInterval = setInterval(updateLocation, 10000);
    // return () => clearInterval(updateLocation);
  });

  socket.on("new-ride", (data) => {
    setRide(data);
    setRidePopUp(true);
  });

  async function confirmRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/ride/confirm`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setRidePopUp(false);
    // setConfirmRidePopUp(true);
    console.log(response.status);
  }

  useGSAP(() => {
    if (ridePopUp) {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUp]);

  useGSAP(() => {
    if (confirmRidePopUp) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopUp]);

  return (
    <div className="h-screen ">
      <div className="fixed top-0 p-6 w-screen flex items-center justify-between">
        <img className="w-16" src={"./src/assets/uber.png"} alt="Uber Image" />
        <Link
          to={"/home"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full obj-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Map"
        />
      </div>
      <div className="h-2/5 p-6">{<CaptainDetails />}</div>
      <div
        ref={ridePopUpRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-6 pt-12 "
      >
        <RidePopUp
          ride={ride}
          setRidePopUp={setRidePopUp}
          setConfirmRidePopUp={setConfirmRidePopUp}
          confirmRide={confirmRide}
        />
      </div>
      <div
        ref={confirmRidePopUpRef}
        className="fixed z-10 h-screen bottom-0 translate-y-full bg-white w-full px-3 py-6 pt-12 "
      >
        <ConfirmRidePopUp
          setConfirmRidePopUp={setConfirmRidePopUp}
          setRidePopUp={setRidePopUp}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
