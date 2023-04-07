import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Input } from '../../comman/components/Input/Input';
import './Profile.scss';


export const Profile =() => {
const dispatch = useAppDispatch

  const onClickHandler = () => {
// dispatch()
  }

  return (
    <div className='profile'>
      <div className='containerPR'>
      <h3>Personal Information</h3>
<div className='info'>
  <div className='avatar'>
    <p>Avatar</p>
  </div>
  <div className='info_data'>
    <h3>Name</h3>
    <div>
    <p onClick={onClickHandler}>Status</p><img src="" alt=""/>
    <Input/>
    </div>
   <a href="#">email</a>
   <button>Log Out</button>
  </div>
      </div>

</div>

           </div>
  );
}