import React,{useContext} from "react";
import {  useNavigate} from "react-router-dom";
import Button from "../components/Button";
import {ShopContext} from "../context/cardContext"


const Product = ({ product }) => {
  const { handlePlaceOrder } = useContext(ShopContext)
const Navigate = useNavigate()
  function handleLogin() {
    Navigate('/login')
  
  }
 
  return (
    <div className="w-72 border p-3 rounded-lg shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        style={{ maxWidth: "100%" }}
      />
      <h4 className="font-bold py-2">{product.name}</h4>
      <p className="text-gray-500 pb-4">{product.desc}</p>
      <div className="flex items-center ">
        {/* <Link to={placeOrder ? "/details" : "/login"}> */}
        <Button data={product} id={product.id} home={handleLogin} name="Place Order" placeorder={handlePlaceOrder}  />
        {/* </Link> */}
        <p className="ml-3">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
