import React , {useState}from "react";
// import Button from "../components/Button";
import SecNavbar from "../components/SecNavbar";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginPage, setLoginPage] = useState(true);

  return (
    <div className="">
      <SecNavbar text="create an account"  data={loginPage}/ >
     
      <h1 className="text-center text-2xl font-bold pt-32">Sign in</h1>
      <div className="flex justify-center items-center h-64">
        <form action="" className="flex flex-col">
          <div className="flex flex-col mb-5">
            <label className="text-sm  text-left" htmlFor="">Email Address</label>
            <input type="text" className=" w-72 bg-gray-100 h-12 p-3 outline-none mt-2" />
          </div>

          <div className="flex flex-col">
          <label htmlFor="" className="text-sm text-left">password</label>
          <input type="password" className=" w-72 bg-gray-100 h-12 p-3 outline-none mt-2" name="password" />

          </div>

          <Link onClick={()=>{ setLoginPage(false)}} href="" className="bg-blue-900 text-white text-center mt-5 py-2 rounded">login</Link>
        </form>
      </div>
    </div>
  );
}
