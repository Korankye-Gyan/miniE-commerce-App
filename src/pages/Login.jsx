import React, { useState, useContext } from "react";
// import Button from "../components/Button";
import SecNavbar from "../components/SecNavbar";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Home from "./Home";

export default function Login() {
  const [loginPage, setLoginPage] = useState(true);
  const { formikLogin, loggedIn } = useContext(UserContext);

  console.log(loggedIn);
  return (
    <div>
{ loggedIn ? <Home/> :   <div className="">
      <SecNavbar data={loginPage} datafunc={setLoginPage} />

      <h1 className="text-center text-2xl font-bold pt-32">Sign in</h1>
      <div className="flex justify-center items-center h-64">
        <form
          action=""
          className="flex flex-col"
          onSubmit={formikLogin.handleSubmit}
        >
          <div className="flex flex-col mb-5">
            <label className="text-sm  text-left" htmlFor="">
              Email Address
            </label>
            <input
              type="text"
              className=" w-72 bg-gray-100 h-12 p-3 outline-none mt-2"
              value={formikLogin.values.email}
              onChange={formikLogin.handleChange}
              name="email"
            />
            {formikLogin.errors.email ? (
              <p className="text-red-500">{formikLogin.errors.email}</p>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-left">
              password
            </label>
            <input
              type="password"
              className=" w-72 bg-gray-100 h-12 p-3 outline-none mt-2"
              name="password"
              value={formikLogin.values.password}
              onChange={formikLogin.handleChange}
            />
            {formikLogin.errors.password ? (
              <p className="text-red-500">{formikLogin.errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white text-center mt-5 py-2 rounded"
          >
            login
          </button>
        </form>
      </div>
    </div>}
    </div>

  );
}
