import React from 'react';
import Price from './Price';
import './Product.css';

const Product = ({title,idx}) => {
    let oldPrice=[100,120,130,140];
    let newPrice=[80,90,100,110];
    let Description=['Description-1','Description-2','Description-3','Description-4']
  return (

    <div className="product">
      <h1>{title}</h1>
      <p>{Description[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />




    </div>
    


    
    
    
    
    
  )
}

export default Product;