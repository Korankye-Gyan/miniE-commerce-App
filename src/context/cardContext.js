import { createContext, useState, useContext } from "react";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext("");

export function ShopContextProvider(props) {
  const Navigate = useNavigate();
  const [placeOrder, setPlaceOrder] = useState(false);
  const [details, setDetails] = useState({});

    const [cartItems, setCartItems] = useState(getFirstCart())
  function getFirstCart() {
    let cart = {}
    for (let i = 1; i < 9; i++){
        cart[i] = 0;
    }
    return cart
  }


  function addToCart (prodId) {
    setCartItems((prev) => ({...prev, [prodId]: prev[prodId] + 1}))
  }

  console.log(cartItems);

  function handlePlaceOrder(dets) {
    
    console.log(dets);
    let data = JSON.parse(dets)
    setPlaceOrder(true);

    setDetails(data);
    Navigate("/details");
    // alert('hi')
  }

  return (
    <ShopContext.Provider value={{ handlePlaceOrder, placeOrder, details,addToCart ,cartItems }}>
      {props.children}
    </ShopContext.Provider>
  );
}
