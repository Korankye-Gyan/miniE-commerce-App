import React,{useContext} from "react";
import { Link , useNavigate} from "react-router-dom";
import Button from "../components/Button";
import {ShopContext} from "../context/cardContext"


const Product = ({ product }) => {
  const { handlePlaceOrder , placeOrder} = useContext(ShopContext)
const Navigate = useNavigate()
  function handleLogin() {
    Navigate('/login')
  
  }
 
  return (
    <div className="items">
      <img
        src={product.image}
        alt={product.name}
        style={{ maxWidth: "100%" }}
      />
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <div className="order">
        {/* <Link to={placeOrder ? "/details" : "/login"}> */}
        <Button data={product} id={product.id} home={handleLogin} name="Place Order" placeorder={handlePlaceOrder}  />
        {/* </Link> */}
        <p>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
