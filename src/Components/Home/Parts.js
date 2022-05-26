import React from "react";
import useParts from "./../Hooks/useParts";
import Products from "./Products";

const Parts = () => {
  const [part] = useParts({});

  return (
    <div>
      <header className="section-header">
        <h2>Parts</h2>
        <p>Top selling Parts</p>
      </header>
      <div className="product-container">
        {part.slice(-6).map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default Parts;
