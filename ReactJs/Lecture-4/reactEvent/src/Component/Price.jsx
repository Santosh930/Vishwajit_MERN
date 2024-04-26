import React from 'react';
import './Product.css';

const Price = ({oldPrice,newPrice}) => {
    // text-decoration: line-through;
    let oldStyle={
        textDecoration:'line-through',

    }
    let newStyle={
        fontWeight:'bold',
    }
    let styles={
        backgroundColor:'yellow',
        borderRadius:'20px'
    }
  return (
    <div style={styles}>
        <span style={oldStyle}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newStyle}>{newPrice}</span>
    </div>
    
  )
}

export default Price;