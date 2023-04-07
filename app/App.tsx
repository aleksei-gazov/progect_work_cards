import * as React from 'react';
import { Profile } from '../features/profile/Profile';
import { Header } from '../header/Header';
import './style.css';

export default function App() {
  return (
    <div className='container'>
     <Header/>
     <Profile/>
    </div>
  );
}
