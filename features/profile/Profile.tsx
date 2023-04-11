import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Input } from '../../comman/components/Input/Input';
import './Profile.scss';
import {Navigate} from 'react-router-dom';
import { getProfile } from './profile-slice';
import { EditableSpan } from '../../comman/components/editableSpan/EditableSpan';

export const Profile =() => {
const dispatch = useAppDispatch
const isLoginIn = useAppSelector(state=> state.profile.isLoginIn)

  const onClickHandler = () => {
// dispatch()
  }
React.useEffect(()=>{
  // dispatch(getProfile())
},[])

if(isLoginIn) {
  return <Navigate to={'/login'}/>
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
      {/* <EditableSpan/> */}
    {/* <p onClick={onClickHandler}>Status</p><img src="" alt=""/>
    <Input/> */}
    </div>
   <a href="#">email</a>
   <button>Log Out</button>
  </div>
      </div>

</div>

           </div>
  );
}