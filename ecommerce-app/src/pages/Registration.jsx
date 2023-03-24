import React, { useContext, useState } from "react";
import SecNavbar from "../components/SecNavbar";
import { UserContext } from "../context/userContext";

export default function Registration(props) {
  const { formik } = useContext(UserContext);

  return (
    <div>
      <SecNavbar />

      <h1 className="text-center text-2xl font-bold pt-32">
        Create an account
      </h1>
      <div className="flex justify-center items-center h-72 mt-10">
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="flex flex-col"
        >
          <div className="flex flex-col mb-5">
            <label className="text-sm text-left" htmlFor="">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className=" w-72 bg-gray-100 h-12 p-3 outline-none mt-2"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <p className="text-red-500">{formik.errors.email}</p>
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
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <p className="text-red-500">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-sm mt-3 text-left">
              Confirm password
            </label>
            <input
              type="password"
              className=" w-72 bg-gray-100 h-12 p-3 outline-none mt-2"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword ? (
              <p className="text-red-500">{formik.errors.confirmPassword}</p>
            ) : null}
          </div>

          <button
            type="submit"
            href=""
            className="bg-blue-900 text-white text-center mt-5 py-2 rounded"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}
