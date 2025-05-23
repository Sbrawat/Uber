import React from 'react';

const UserLogin = () => {
    return (
        <div className='p-7'>
        <img className='w-16 ml-8' src ={"./src/assets/uber.png"} alt="Uber Logo"/>
            <form>
                <h3 className='text-xl mb-2'>What's your email?</h3>
                <input 
                required 
                type="email" 
                placeholder='email@example.com'
                className='bg-[#eee] mb-7 rounded px-4 py-2 border 
                    w-full text-lg placeholder:text-base'
                />

                <h3>Enter Password</h3>
                <input 
                required 
                type="password" 
                placeholder="password"
                className='bg-[#eee] mb-7 rounded px-4 py-2 border 
                    w-full text-lg placeholder:text-base'
                />

            <button
                className='bg-[#111] text-white font-semibold px-4 py-2 border 
                    w-full text-lg placeholder:text-base'
            >Login</button>
            </form>
        </div>
    )
}

export default UserLogin;