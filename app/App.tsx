import * as React from 'react';
import { Header } from '../features/header/Header';
import { Login } from '../features/login/Login';
import { Profile } from '../features/profile/Profile';
import { Registration } from '../features/registration/Registration';
import { Routes, Route } from 'react-router-dom'
import './style.css';
import {  TableMU } from '../comman/components/table/Table';

export default function App() {
  return (
    <div className='container'>
     <Header/>
     {/* <Profile/> */}
     {/* <Login/> */}
     {/* <Registration/> */}

     {/* <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} /> */}
        {/* <Route path="/password_recovery" element={<PasswordRecovery />} />
        <Route path="/entering_new_password" element={<NewPassword />} />
        <Route path="/*" element={<ErrorComponent />} /> */}
      {/* </Routes> */}

      {/* < TableMU/> */}
    </div>
  );
}
