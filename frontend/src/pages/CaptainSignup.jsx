import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
    const [captainData, setCaptainData] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        setCaptainData({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        });

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
            <div className='p-7 h-screen flex flex-col justify-between'>
                <div>
                <img className='w-16 mb-10' 
                src ={"./src/assets/uber.png"} 
                alt="Uber Logo"/>
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
                    <div className='flex gap-4 mb-6'>
                    <input 
                    required 
                    type="text" 
                    placeholder='First Name'
                    className='bg-[#eee] rounded px-4 py-2 border 
                        w-1/2 text-lg placeholder:text-base'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                    required 
                    type="text" 
                    placeholder='Last Name'
                    className='bg-[#eee] rounded px-4 py-2 border 
                        w-1/2 text-lg placeholder:text-base'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    </div>
        
                    <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
                    <input 
                    required 
                    type="email" 
                    placeholder='Email@example.com'
                    className='bg-[#eee] mb-6 rounded px-4 py-2 border 
                        w-full text-lg placeholder:text-base'
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    />
        
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input 
                    required 
                    type="password" 
                    placeholder="Password"
                    className='bg-[#eee] mb-6 rounded px-4 py-2 border 
                        w-full text-lg placeholder:text-base'
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    />
        
                <button
                    className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 border 
                        w-full text-lg placeholder:text-base'
                >Login</button>
                <p className='text-center'>Already have an account? <Link className='text-blue-600' to="/captain-login"> Login here </Link></p>
                </form>
                </div>
                <div>
                <p className='text-xs leading-tight'>
                    By proceeding, you consent to get emails, including by automated means, from Uber and its affiliates to the email address provided.
                </p>
                </div>
            </div>
    )
}

export default CaptainSignup;