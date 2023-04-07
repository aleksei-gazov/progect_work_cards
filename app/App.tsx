import * as React from 'react';
import { Header } from '../features/header/Header';
import { Profile } from '../features/profile/Profile';
import './style.css';

export default function App() {
  return (
    <div className='container'>
     <Header/>
     <Profile/>
    </div>
  );
}
