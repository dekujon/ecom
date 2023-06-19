"use client";

import React, { useContext } from "react";
import { ShopContext } from "./context/shop-context";

function Product(props) {
  const { id, title, price, image, description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  

  return (
    <>
      <div key={id} className="max-h-96 w-1/3 p-10 flex flex-col text-center max-[1024px]:p-5 max-[640px]:p-2 max-[1024px]:text-sm max-[640px]:text-xs">
        <div className="p-5 h-3/6 flex justify-center"><img src={image} alt={description} /></div>
        <div className="h-12 max-[640px]:h-16 flex flex-col justify-center">
          <h2 className="font-bold">{title}</h2>
        </div>
        <div className="p-1 text-red-600 font-bold">
          <p>${price}</p>
        </div>
        
        
        <button
          className="btn btn-neutral flex mt-2 btn-sm md:btn-md"
          onClick={() => addToCart(id)}
        >
          Add to cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
    </>
  );
}

export default Product;
