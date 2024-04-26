import React from 'react';
import { useState } from 'react';





const LikeButton = () => {
    const [isLike,setIsLike]=useState(true);
    const red={
        color:'red',
        textAlign:'center',
    }
    const green={
        color:'green',
        textAlign:'center',
        margin:'auto'
    }
    const handleClick=()=>{
        setIsLike((like)=>!like)
    }
  return (
    <div>
       
        <button onClick={handleClick}>{isLike?<i style={red} className="fa-solid fa-heart"></i>:<i style={green} className="fa-regular fa-heart"></i>}</button>
   
    </div>
    
  )
}

export default LikeButton