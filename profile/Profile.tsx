import * as React from 'react';
import './Profile.scss';

export const Profile =() => {
  return (
    <div className='header'>
     <div className ="logo">
LOGO
     </div>
     <div className='info'>
       <div className='info_data'>
         <h5>Name</h5>
         <p>Status</p>
       </div>
       <div className='avatar'>
         Avatar
       </div>
     </div>
    </div>
  );
}