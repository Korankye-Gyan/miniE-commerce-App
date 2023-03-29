import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <ProductList />
    </div>
  );
}
