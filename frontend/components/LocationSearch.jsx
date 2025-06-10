import React from "react";

const LocationSearch = (props) => {
  const location = [
    "24B, Near Kappor's Cafe, Sheryians Coding School, Bhopal",
    "14B, Near Kappor's Cafe, Sheryians Coding School, Bhopal",
    "21B, Near Kappor's Cafe, Sheryians Coding School, Bhopal",
    "17B, Near Kappor's Cafe, Sheryians Coding School, Bhopal",
  ];

  location;

  return (
    <div>
      {location.map((address, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              props.setPanelOpen(false);
              props.setVehiclePanelOpen(true);
            }}
            className="flex gap-4 border-2 p-3 rounded-xl border-gray-100 active:border-black items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{address}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearch;
