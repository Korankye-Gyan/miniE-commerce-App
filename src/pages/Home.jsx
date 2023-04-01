import React , { useContext, useState} from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import ProductList from "../components/ProductList";
import { ShopContext } from "../context/cardContext";
import Details from "./Details";


export default function Home() {
  const { placeOrder} = useContext(ShopContext)
  return (
    <div>
      <Navbar />
       <Searchbar />
     <ProductList />
    </div>
  );
}
