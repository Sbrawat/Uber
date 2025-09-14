import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-12 w-12 object-cover -mb-0.5 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <div>
            {/* <h4 className="text-lg font-medium">Harsh Patel</h4> */}
            <h4 className="text-xl font-semibold capitalize">
              {captain?.fullname.firstname + " " + captain?.fullname.lastname}
            </h4>
            <p className="text-sm text-gray-600">Basic Level</p>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-semibold">₹345.81</h4>
          <p className="text-sm text-gray-600 ">Earned</p>
        </div>
      </div>
      <div className="flex items-start justify-center gap-5 p-3 mt-8 bg-gray-100 rounded-xl">
        <div className="text-center">
          <i className="ri-timer-2-line text-3xl mb-2  font-thin "></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line text-3xl mb-2  font-thin "></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line text-3xl mb-2  font-thin "></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
