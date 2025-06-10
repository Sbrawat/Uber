import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [ isLoading, setIsLoading ] = useState(true);
    const navigate = useNavigate();

    useEffect( () => {
        if(!token)
            { 
                console.log(token);
                navigate('/captain-login');
            }
        }, [ token ]);
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200)
        {
            // console.log('successful');
            const data = response.data;
            // setCaptain(data.captain);
            setIsLoading(false);
        }
    }).catch( err => {
        console.log(err);
        localStorage.removeItem('token');
        navigate('/captain-login');
    })

    if (isLoading) {
        return (
            <div>Loading....</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper;