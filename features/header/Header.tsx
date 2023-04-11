import * as React from 'react';
import './Header.scss';
import { useAppDispatch, useAppSelector } from '../../app/store';

export const Header =() => {
  const user = useAppSelector(state=> state.profile.user)


  return (
    <div className='header'>
     <div className ="logo">
LOGO
     </div>
     <div className='info'>
       <div className='info_data'>
         <h5>{user.name}</h5>
         <p >{user.status}</p>
       </div>
       <div className='avatar'>
       {user.avatar}
       </div>
     </div>
    </div>
  );
}