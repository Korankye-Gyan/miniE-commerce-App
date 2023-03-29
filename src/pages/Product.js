import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Product = ({ product }) => {
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
        <Link to="/login">
        <Button name="Place Order" />
        </Link>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
