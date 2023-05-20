import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/cardContext";
import Button from "../components/Button";

export default function Details() {
  const { details ,addToCart} = useContext(ShopContext); 
  

  function handleAddToCart() {
    let prodId = details.id
    addToCart(prodId)
  }

  return (
    <div>
      <Navbar />
     {details ? <div className="flex justify-center items-center h-96 mt-20">
        <div className="grid sm:grid-cols-2 items-center place-items-center">
          <img
            src={details.image}
            alt=""
            className=" rounded-lg "
          />

          <div className="text-center sm:text-left">
            <h1 className="font-bold text-2xl my-1">{details.name}</h1>
            <p className="my-2">{details.desc}</p>
            <p className="font-semibold mb-5">${details.price}.00</p>
            <Button style="w-64" name="Add to Cart" addtocart={handleAddToCart}/>
          </div>
        </div>
      </div> : null}
    </div>
  );
}
