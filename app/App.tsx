import * as React from 'react';
import { Header } from '../features/header/Header';
import { Login } from '../features/login/Login';
import { Profile } from '../features/profile/Profile';
import { Registration } from '../features/registration/Registration';
import './style.css';

export default function App() {
  return (
    <div className='container'>
     <Header/>
     {/* <Profile/> */}
     {/* <Login/> */}
     {/* <Registration/> */}
    </div>
  );
}
