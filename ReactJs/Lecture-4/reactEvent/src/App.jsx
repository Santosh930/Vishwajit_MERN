

// import { useState } from 'react'

// function Car(props){
//   return <li>Hi I am a {props.brand}</li>

// }

// import ProductTab from './Component/ProductTab';
// import LikeButton from "./Component/LikeButton";
import LudoBoard from "./Component/LudoBoard";

function App() {
  // const [count,setCount]=useState(0);

  // const cars=['Ford','BMW','audi','bike'];
  
  
  

  // const Counter=()=>{
    
  //   setCount((c)=>c-1);
    

  // }
  
  return (
    <>
    <LudoBoard />
    {/* <LikeButton /> */}
    
    {/* <ul>{cars.map((car,i)=><Car key={i}  brand={car} />)}</ul> */}
    
      {/* <h1 style={{textAlign:"center"}}>Main Page</h1> */}
      {/* <ProductTab /> */}
      
    </>
  )
}

export default App;
