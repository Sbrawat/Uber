import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';

const App = () => {
    return (
        <div> 
            <Routes>
                <Route path="/" element={<Start/>} />

                {/*User Routes*/}
                <Route path="/login" element={<UserLogin/>} />
                <Route path="/signup" element={<UserSignup/>} />
                <Route path="/home" element={<UserProtectWrapper> <Home/> </UserProtectWrapper> } />
                <Route path="/riding" element={<UserProtectWrapper><Riding/></UserProtectWrapper>} />
                <Route path="/logout" element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>}/>

                {/*Captain Routes*/}
                <Route path="/captain-login" element={<CaptainLogin/>} />
                <Route path="/captain-signup" element={<CaptainSignup/>} />
                <Route path="/captain-home" element={ <CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper> } />
                <Route path='/captain-riding' element={ <CaptainProtectWrapper><CaptainRiding/></CaptainProtectWrapper> }></Route>
                <Route path='/captain-logout' element={ <CaptainProtectWrapper><CaptainLogout/></CaptainProtectWrapper> }></Route>
            </Routes>
        </div>
    )
}

export default App;