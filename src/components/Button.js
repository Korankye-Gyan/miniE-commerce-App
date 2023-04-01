import React, { useContext } from "react";
import { ShopContext } from "../context/cardContext";
import { UserContext } from "../context/userContext";
import { useLocation } from "react-router-dom";
// import Product from '../pages/Product'

const Button = ({ data, name, home, style, login }) => {
  const { handlePlaceOrder, placeOrder } = useContext(ShopContext);
  const { loggedIn, logOut, place } = useContext(UserContext);

  const location = useLocation();
  console.log(loggedIn);
  console.log(placeOrder);

  function details(e) {
    let detail = e.target.value;
    // handlePlaceOrder(e, detail);
    handlePlaceOrder(detail);
    console.log(detail);
  }

  return (
    <div>
      <button
        className={style}
        value={JSON.stringify(data)}
        onClick={
          // !place  ? handlePlaceOrder : loggedIn ? logOut : login

          // loggedIn && handlePlaceOrder

          name === "Place Order" && loggedIn
            ? details
            : name === "log out"
            ? logOut
            : name === "Login" ? login  : home
        }
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
