import React from 'react';



const Hello = (props) => {
  return (
    <div style={{backgroundColor:'red',textAlign:'center', margin:'10px',padding:'20px',borderRadius:'20px',color:`${props.color}`}}>Hello {props.user}</div>
  )
}





export default Hello;