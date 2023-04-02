import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import Button from "./Button";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/cardContext";

function Navbar() {
  const location = useLocation();
  const Navigate = useNavigate();
  const { loggedIn,  } = useContext(UserContext);
  const { cartItems , details } = useContext(ShopContext)
 

  let cartItemAmount = Object.values(cartItems).reduce((a, b) => a + b, 0)
  console.log(loggedIn);
  function handleLogin() {
    Navigate("/login");
  }

  return (
    <div className="navMenu  px-10  shadow-md">
      <div>
        <Link to="/">
          <img src="img/logo.svg" alt="logo" style={{ width: "80%" }} />
        </Link>
      </div>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <div className="menu">
          <NavLink to="/" className="mt-2">
            <span className="font-bold hover:text-blue-800">Home</span>
          </NavLink>
          <NavLink to="/Cart" className="mt-2">
            <span className="font-bold hover:text-blue-800">Cart {cartItemAmount > 0 && <span className="bg-blue-900 text-white px-2 py-1 ml-2">{cartItemAmount}</span>} </span>
          </NavLink>
        </div>
      )}

      {location.pathname === "/login" ? (
        <div className="">
          <Link to="/register" className="flex items-center">
            <p className="mr-5">New to Azubi shop?</p>
            <Button name="Register" loggedin={loggedIn} login={handleLogin} />
          </Link>
        </div>
      ) : location.pathname === "/register" ? (
        <Link to="/login" className="flex items-center">
          <p className="mr-5">Already have an account ?</p>
          <Button name="Log in" />
        </Link>
      ) : (
        <Button
          name={loggedIn ? "log out" : "Login"}
          loggedin={loggedIn}
          login={handleLogin}
        />
      )}
    </div>
  );
}

export default Navbar;
