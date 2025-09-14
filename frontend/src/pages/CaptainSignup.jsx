import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: color,
        plate: plate,
        capacity: capacity,
        type: type,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData
    );

    if (response.status === 201) {
      console.log("Captain Registered");
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setColor("");
    setPlate("");
    setCapacity("");
    setColor("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-6"
          src={"./src/assets/uber.png"}
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className="flex gap-4 mb-2">
            <input
              required
              type="text"
              placeholder="First Name"
              className="bg-[#eee] rounded px-4 py-2 border 
                        w-1/2 text-lg placeholder:text-base"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Last Name"
              className="bg-[#eee] rounded px-4 py-2 border 
                        w-1/2 text-lg placeholder:text-base"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            required
            type="email"
            placeholder="Email@example.com"
            className="bg-[#eee] mb-2 rounded px-4 py-2 border 
                        w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            placeholder="Password"
            className="bg-[#eee] mb-2 rounded px-4 py-2 border 
                        w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>

          <div className="flex gap-4 mb-2">
            <input
              required
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="bg-[#eee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            />
            <input
              required
              type="text"
              placeholder="Plate"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              className="bg-[#eee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            />
          </div>

          <div className="flex gap-4 mb-2">
            <input
              required
              type="number"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="bg-[#eee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            />

            <select
              required
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
            >
              <option value="" disabled>
                Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcyle">Moto</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2 border w-full text-lg placeholder:text-base">
            Register
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-blue-600" to="/captain-login">
              {" "}
              Login here{" "}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-xs leading-tight">
          By proceeding, you consent to get emails, including by automated
          means, from Uber and its affiliates to the email address provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
