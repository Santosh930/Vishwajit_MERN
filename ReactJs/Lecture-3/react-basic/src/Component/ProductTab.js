import React from 'react';
import Product from './Product';
import Msg from './Msg';

const ProductTab = () => {
  let option=[<li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>,<li>5</li>,];
  let arr=[2,4,6,8,10,12];
  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  return (
    <div>
         <Msg username={"Santosh"} textColor={"blue"} />
        <Product title="Apple" arr={[1,2,3]} obj={{name:"Santosh"}} price={100} />
        <Product  val={[<li>Santosh</li>,<li>Saket</li>,<li>Sunil</li>,<li>Anil</li>]} title="Mango" price={80} />
        <Product title="Banana" price={400} />
        <Product title="Grapes" features={arr}  />
        <Product   option={option}  price={100} />
        <h1>List of Names</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductTab