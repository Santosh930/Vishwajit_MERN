import React from 'react'

const Product = ({title='fruits',price=10,arr=[],val,option,features,obj}) => {
    // console.log(arr);
    // const mystyle={
    //     borderRadius:"40px",
    //     backgroundColor:"green",
    //     textAlign:"center",
    //     margin:"50px",
    //     padding:"10px"
    // }
    let styles={backgroundColor:price>=100?"red":'green'}

    

    // let bg={
    //   backgroundColor:price>100?"Yellow":""
    // }

    
  return (
    <>
    <div style={styles}>
      {price>=100?<h1>It's Costly</h1>:<h1>Good</h1>}
      {/* {price>=100 && <h1>It's Costly</h1> } */}

    <h1 style={{color:"white"}}>Title:{title}</h1>
    <p>Price:{price} </p>
    <p>{arr}</p>
    <p>{val}</p>
    <p>{option}</p>
    {/* <p>
      {features.map((el,i)=>
      (<li key={i}>{el}</li>)
      )}
     </p> */}
    <p>{features}</p>
    
    </div>
    
    
    
    </>
  )
}

export default Product;