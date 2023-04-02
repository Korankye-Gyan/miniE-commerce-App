import React, { useContext, useState } from "react";
import { ShopContext } from "../context/cardContext";
import { UserContext } from "../context/userContext";
// import Product from '../pages/Product'

const Button = ({ data, name, home, login, addtocart, checkedout }) => {
  const { handlePlaceOrder } = useContext(ShopContext);
  const { loggedIn, logOut } = useContext(UserContext);

  function details(e) {
    let detail = e.target.value;
    // handlePlaceOrder(e, detail);
    handlePlaceOrder(detail);
  }

  return (
    <div>
      <button
        className="btn"
        value={JSON.stringify(data)}
        onClick={
          // !place  ? handlePlaceOrder : loggedIn ? logOut : login

          // loggedIn && handlePlaceOrder

          name === "Place Order" && loggedIn
            ? details
            : name === "log out"
            ? logOut
            : name === "Login"
            ? login
            : name === "Add to Cart"
            ? addtocart
            : name === "checkout"
            ? checkedout
            : home
        }
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
