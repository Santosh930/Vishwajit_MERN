import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    let {userId}=useParams();
  return (
    <div className='bg-gray-600 text-white text-center p-4 text-3xl'>User:{userId}</div>
  )
}

export default User;