"use client";
import React from "react";

const Products = async () => {
  const data = await fetch(" https://api.escuelajs.co/api/v1/products");
  let products = await data.json();
  return (
    <div className="flex gap-4">
      {products.map((item) => {
        return (
          <div className="">
            <img src={item.images} width={100} height={100} />
            {item.title}
            {item.id}
            {item.price}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
