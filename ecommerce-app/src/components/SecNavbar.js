import React from "react";
import { Link } from "react-router-dom";

export default function SecNavbar(props) {


  return (
    <div>
      <nav className="shadow-lg px-3 py-4 flex justify-between items-center">
        <div>
          <h1>AzubiShop</h1>
        </div>

        <div className="flex items-center ">
          <p className="px-10 hidden sm:block">New to AzubiShop ?</p>

          <Link
            to="/register"
            className="px-10 bg-gray-200 font-semibold py-3 rounded-xl"
          >
            {props.data ? " Create an account" : "Login"}
          </Link>
        </div>
      </nav>
    </div>
  );
}
