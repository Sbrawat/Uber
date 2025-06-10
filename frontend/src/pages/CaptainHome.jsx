import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";

const CaptainHome = () => {
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
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
    </div>
  );
};

export default CaptainHome;
