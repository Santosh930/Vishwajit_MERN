import React from "react";
import Product from "./Product";
import "./Product.css";

const ProductTab = () => {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item">
          <Product title="Apple" idx={0} />
        </div>
        <div className="flex-item">
          <Product title="Banana" idx={1} />
        </div>
        <div className="flex-item">
          <Product title="Orange"  idx={2}/>
        </div>
        <div className="flex-item">
          <Product title="Mango" idx={3} />
        </div>
      </div>
    </>
  );
};

export default ProductTab;
