import react, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearch from "../../components/LocationSearch";
import Vehicles from "../../components/Vehicles";
import ConfirmVehicle from "../../components/ConfirmVehicle";
import LookingForDriver from "../../components/LookingForDriver";
import WaitingForDriver from "../../components/WaitingForDriver";

const Home = () => {
  //Refs
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmVehicleRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  //UseStates
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState("");
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmVehicleOpen, setConfirmVehicleOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault;
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen, panelCloseRef]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmVehicleOpen) {
      gsap.to(confirmVehicleRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmVehicleRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmVehicleOpen]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src={"./src/assets/uber.png"}
        alt="Uber Image"
      />
      <div className="h-screen w-screen">
        <img
          className="h-screen w-screen obj-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Map"
        />
      </div>
      <div className="w-full h-screen flex flex-col justify-end absolute top-0">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 right-6 text-xl opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-15 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
            />
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white p-5">
          <LocationSearch
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        onClick={() => setVehiclePanelOpen(false)}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-10 pt-12 translate-y-full"
      >
        <Vehicles
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmVehicleOpen={setConfirmVehicleOpen}
        />
      </div>
      <div
        ref={confirmVehicleRef}
        onClick={() => setVehiclePanelOpen(false)}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12 translate-y-full"
      >
        <ConfirmVehicle setVehicleFound={setVehicleFound} setConfirmVehicleOpen={setConfirmVehicleOpen} />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12 translate-y-full"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12 translate-y-full"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
