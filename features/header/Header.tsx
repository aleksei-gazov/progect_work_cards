import * as React from 'react';
import './Header.scss';
import { useAppDispatch, useAppSelector } from '../../app/store';
import Button from '@mui/material/Button';

export const Header =() => {
  const user = useAppSelector(state=> state.profile.user)
  const isLoginIn = useAppSelector(state=> state.profile.isLoginIn)

if(isLoginIn) {

}

  return (
    <div className='header'>
     <div className ="logo">
LOGO
     </div>
     {isLoginIn ? 
     <div className='info'>
     <div className='info_data'>
       <h5>{user.name}</h5>
       <p >{user.status}</p>
     </div>
     <div className='avatar'>
     {user.avatar}
     </div>
   </div>
     :
     <div className ="singIn">
     <Button type={'submit'} variant={'contained'} color={'primary'}
                           style={{
                            borderRadius: "10px",
                            marginTop: "5px",
                            width: "100%",
                            padding: "10px 0",
                            fontSize:"10px",
                            fontWeight:"500"
                        }}
                        >
                            Sing In
                        </Button>
          </div>
     }
     
    </div>
  );
}