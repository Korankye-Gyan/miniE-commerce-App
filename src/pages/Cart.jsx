import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { ShopContext } from "../context/cardContext";
import { products } from "../components/ProductList";


export default function Cart() {
  const { cartItems, addToCart, removeFromCart,deleteFromCart , checkOut, totalCartPrice} = useContext(ShopContext);
const total = totalCartPrice()

let checkoutId

  return (
    <div>
      <Navbar />

      <div className="  mt-10 grid grid-cols-1 place-items-center p-5 sm:p-0  sm:w-9/12 mx-auto">
        <div className="bg-gray-200 w-full p-5 h-42">
          <h1 className="font-bold text-xl">Cart</h1>
          <table className="table-auto   w-full">
            <thead className="border border-b-gray-300 ">
              <tr className="text-gray-500 ">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            {products.map((item) => {
              if (cartItems[item.id] !== 0) {
                let id = item.id;
                checkoutId = id
             
                return (
                  <tbody className="">
                    <tr className="text-center    h-20">
                      <td className="">
                        <div className="flex items-center  b w-40 mx-auto">
                          <img
                            className=" mx-auto"
                            width={40}
                            src={item.image}
                            alt=""
                          />

                          <span className=" mx-auto">{item.name}</span>
                        </div>
                      </td>

                      <td>${parseFloat(item.price).toFixed(2)}</td>
                      <td>
                        <div className="flex justify-center relative">
                          <button
                            className="relative left-5"
                            onClick={() => removeFromCart(id)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="w-16 bg-white text-center outline-none "
                            value={cartItems[item.id]}
                          />
                          <button
                            className="relative  right-5"
                            onClick={() => addToCart(id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        $
                        {parseFloat(cartItems[item.id] * item.price).toFixed(2)}
                      </td>
                      <td>
                        <button
                          className="bg-orange-600 text-white px-2"
                          onClick={() => {
                            deleteFromCart(id)
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </table>
        </div>

        <div className="justify-self-end mt-10">
          <p className="mb-3">Total Price : ${parseFloat(total).toFixed(2)}</p>
          <Button name="checkout" checkedout={()=> checkOut(checkoutId)}/>
        </div>
      </div>
    </div>
  );
}
