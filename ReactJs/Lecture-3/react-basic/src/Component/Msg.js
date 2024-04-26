import React from 'react'

const Msg = ({username,textColor}) => {
    const mystyle={
        borderRadius:"40px",
        backgroundColor:textColor,
        textAlign:"center",
        margin:"50px",
        padding:"10px"
    }
  return (
    <div style={mystyle}>


        Hello {username} Your color is {textColor}



    </div>
  )
}

export default Msg;