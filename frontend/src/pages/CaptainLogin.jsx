import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CaptainLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
            email: email,
            password: password,
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captainData);

        if (response.status === 200)
        {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setEmail('');
        setPassword('');
    }

    return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' 
        src ={"./src/assets/uber.png"} 
        alt="Uber Logo"/>
        <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
            <input 
            required 
            type="email" 
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder='email@example.com'
            className='bg-[#eee] mb-7 rounded px-4 py-2 border 
                w-full text-lg placeholder:text-base'
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
            required 
            type="password" 
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            placeholder="password"
            className='bg-[#eee] mb-7 rounded px-4 py-2 border 
                w-full text-lg placeholder:text-base'
            />

        <button
            className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 border 
                w-full text-lg placeholder:text-base'
        >Login</button>
        <p className='text-center'>Join a fleet? <Link className='text-blue-600' to="/captain-signup"> Register as a Captain</Link></p>
        </form>
        </div>
        <div>
        <Link to="/login" className='bg-[#d5622d] flex item-center justify-center text-white font-semibold px-4 py-2 border w-full text-lg placeholder:text-base'> Sign in as User</Link>
        </div>
    </div>
    )
}

export default CaptainLogin;