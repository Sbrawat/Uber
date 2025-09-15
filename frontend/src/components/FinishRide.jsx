import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const finishRide = (props) => {
  const navigate = useNavigate();

  async function endRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/ride/end-ride`,
      {
        rideId: props.rideData._id,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response);

    if (response.status === 200) {
      navigate("/captain-home");
    }
  }

  return (
    <div>
      <h5
        className="p-1 w-[93%] text-center absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-4">Finish this Ride</h3>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://www.levelupias.com/wp-content/uploads/2024/05/Harsh-Patel.webp"
            alt="User Image"
          />
          <h2 className="text-lg font-medium">
            {props.rideData?.user.fullname.firstname +
              " " +
              props.rideData?.user.fullname.lastname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center ">
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">53/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                {props.rideData?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="text-lg  ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">53/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                {props.rideData?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg  ri-bank-card-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.rideData?.fare}</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash, Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <button
            onClick={endRide}
            className="w-full mt-5 flex justify-center text-lg bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </button>
          <p className="text-red-500 text-xs mt-6">
            Click on finish ride button if you have completed the payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default finishRide;
