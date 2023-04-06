import * as React from 'react';
import { Header } from './header/Header';
import { Profile } from './profile/Profile';
import './style.css';

export default function App() {
  return (
    <div className='container'>
     <Header/>
     <Profile/>
    </div>
  );
}
