import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Santosh");
        // alert(`The name you entered was: ${name}`)
      }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input id='demo'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default Form;