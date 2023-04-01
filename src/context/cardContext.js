import { createContext, useState, useContext } from "react";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext("");

export function ShopContextProvider(props) {
  const Navigate = useNavigate();
  const [placeOrder, setPlaceOrder] = useState(false);
  const [details, setDetails] = useState({});

  function handlePlaceOrder(dets) {
    
    console.log(dets);
    let data = JSON.parse(dets)
    setPlaceOrder(true);

    setDetails(data);
    Navigate("/details");
    // alert('hi')
  }

  return (
    <ShopContext.Provider value={{ handlePlaceOrder, placeOrder, details }}>
      {props.children}
    </ShopContext.Provider>
  );
}
