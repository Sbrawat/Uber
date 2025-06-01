import React from 'react';
import { Link } from 'react-router-dom';
// import uber from '../assets/uber.png';
const Start = () => {
    return (
        <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5 flex justify-between flex-col w-full bg-red-400">
            <img className='w-16 ml-8' src ={"./src/assets/uber.png"} alt="Uber Logo"/>
            <div className="bg-white pb-7 py-4 px-4">
                <h2 className="text-3xl font-bold">Get started with Uber</h2>
                <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
            </div>
        </div>
    )
}

export default Start;