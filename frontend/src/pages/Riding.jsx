import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="ri-home-5-line text-lg font-medium"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full obj-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Map"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-19"
            src="https://file.aiquickdraw.com/imgcompressed/img/compressed_b9f71da328ee1c4cd30b16fb08daf5a5.webp"
            alt="Car image"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Sarthak</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Swift</p>
          </div>
        </div>
        <div className="flex gap-2 flex-col justify-between items-center ">
          <div className="w-full mt-5 ">
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
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
