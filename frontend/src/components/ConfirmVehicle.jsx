import React from "react";

const ConfirmVehicle = (props) => {
  return (
    <div>
      <h5 className="p-1 w-[93%] text-center absolute top-0">
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Confirm your Vehicle</h3>

      <div className="flex gap-2 flex-col justify-between items-center ">
        <img
          className="h-25"
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_b9f71da328ee1c4cd30b16fb08daf5a5.webp"
          alt="Car image"
        />
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">53/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">{props.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="text-lg  ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">53/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">{props.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg  ri-bank-card-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                ₹{props.fare[props.vehicleType]}
              </h3>
              <p className="text-sm text-gray-600 -mt-1">Cash, Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmVehicleOpen(false);
            props.createRide();
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmVehicle;
