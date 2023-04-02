import React, {useContext, useState} from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { ShopContext } from "../context/cardContext";
import { products } from "../components/ProductList";

export default function Cart() {
    const { cartItems} = useContext(ShopContext)
console.log(products);
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-10">
       
        <div className="bg-gray-200 w-3/6 p-5 h-42">
          <h1 className="font-bold text-xl">Cart</h1>
          <div >
            <div className="grid grid-cols-4 place-items-center">
            <span className="mb-10 border border-b-black ">Product</span>
            <span className="pb-10">Price</span>

            <span className="pb-10">Quantity</span>

            <span className="pb-10">Total</span>
            </div>
           

            <div>
                {
                        products.map((item) => {
                        if (cartItems[item.id]!== 0){
                            return (
                                <div className="grid grid-cols-4 place-items-center py-3">
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item.id]}</p>
                                    <p>${cartItems[item.id] * item.price}</p>
                                </div>
                            )
                        }
                        })
                }
            </div>
          </div>
        </div>
        <p>Total Price :</p>
          <Button name="checkout" />
        <div>
        
        </div>
      </div>
    </div>
  );
}
