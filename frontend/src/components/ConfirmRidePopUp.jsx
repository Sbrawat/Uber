import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen">
      <h5
        className="p-1 w-[93%] text-center absolute top-0"
        onClick={() => {
          props.setRidePopUp(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-4">
        Confirm this ride to Start
      </h3>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://www.levelupias.com/wp-content/uploads/2024/05/Harsh-Patel.webp"
            alt="User Image"
          />
          <h2 className="text-lg font-medium">Harsh Patel</h2>
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
                Kankariya, Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="text-lg  ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">53/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankariya, Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg  ri-bank-card-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹192.23</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash, Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-5"
              type="number"
              name="otp"
              placeholder="Enter OTP"
            />
            <Link
              to={"/captain-riding"}
              onClick={() => {}}
              className="w-full mt-5 flex justify-center text-lg bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopUp(false);
                props.setRidePopUp(false);
              }}
              className="w-full mt-2 bg-red-500 text-lg text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
