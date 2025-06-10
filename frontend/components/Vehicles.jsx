import React from "react";

const Vehicles = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclePanelOpen(false)}
        className="p-1 w-[93%] text-center absolute top-0"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmVehicleOpen(true);
        }}
        className="flex items-center justify-between w-full p-3 mb-2 border-gray-200 active:border-black border-2 bg-gray-200 rounded-xl"
      >
        <img
          className="h-13"
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_b9f71da328ee1c4cd30b16fb08daf5a5.webp"
          alt="Car image"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>
            4
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg">₹919.23</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmVehicleOpen(true);
        }}
        className="flex items-center justify-between w-full p-3 mb-2 border-gray-200 active:border-black border-2 bg-gray-200 rounded-xl"
      >
        <img
          className="h-13"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png"
          alt="Bike image"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>
            1
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg">₹164.00</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmVehicleOpen(true);
        }}
        className="flex items-center justify-between w-full p-3 mb-2 border-gray-200 active:border-black border-2 bg-gray-200  rounded-xl"
      >
        <img
          className="h-13"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="Bike image"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>
            3
          </h4>
          <h5 className="font-medium text-sm">10 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="text-lg">₹118.33</h2>
      </div>
    </div>
  );
};

export default Vehicles;
