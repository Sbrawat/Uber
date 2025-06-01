import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(UserDataContext);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const loginDetails = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, loginDetails)

        if(response.status === 200) {
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
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
            <p className='text-center'>New here? <Link className='text-blue-600' to="/signup"> Create new Account</Link></p>
            </form>
            </div>
            <div>
            <Link to="/captain-login" className='bg-[#10b461] flex item-center justify-center text-white font-semibold px-4 py-2 border w-full text-lg placeholder:text-base'> Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin;