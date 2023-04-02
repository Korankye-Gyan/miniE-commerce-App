import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../components/ProductList";

export const ShopContext = createContext("");

export function ShopContextProvider(props) {
  const Navigate = useNavigate();
  const [placeOrder, setPlaceOrder] = useState(false);
  const [details, setDetails] = useState({});
  const [cartStorage, setCartStorage] = useState([{
        name : null,
        price: null,
        quantity:null,
        total: null}])

  const [cartItems, setCartItems] = useState(getFirstCart());


  function getFirstCart() {
    let cart = {};
    for (let i = 1; i < 9; i++) {
      cart[i] = 0;
    }
    return cart;
  }

  function addToCart(prodId) {
    setCartItems((prev) => ({ ...prev, [prodId]: prev[prodId] + 1 }))
//     products.map((item)=>{
//         if(cartItems[item.id]  !== 0){
//            console.log(cartItems);
//            console.log(item.id);
// console.log(cartItems[item.id]);
//             setCartStorage((prev)=> ([...prev,{
//                 name : item.name,
//                 price: item.price,
//                 prev.quantity:cartItems[item.id],
//                 total: (cartItems[item.id] * item.price)
//             }]))

            
        
    // })
    
  }

  console.log(cartStorage);

  function removeFromCart(prodId) {
    setCartItems((prev) => ({ ...prev, [prodId]: prev[prodId] - 1 }));
  }

  function deleteFromCart(prodId) {
    setCartItems((prev) => ({ ...prev, [prodId]: 0 }));
  }

  function checkOut(prodId) {
    setCartItems((prev) => ({ ...prev, [prodId]: 0 }));
    Navigate("/thanks");
  }

  function totalCartPrice() {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        console.log(itemInfo);
        totalPrice += cartItems[item] * itemInfo.price;
      }
    }
    return totalPrice;
  }

  function handlePlaceOrder(dets) {
    let data = JSON.parse(dets);
    setPlaceOrder(true);

    setDetails(data);
    Navigate("/details");
    // alert('hi')
  }

  return (
    <ShopContext.Provider
      value={{
        handlePlaceOrder,
        placeOrder,
        details,
        addToCart,
        cartItems,
        setCartItems,
        getFirstCart,
        removeFromCart,
        deleteFromCart,
        checkOut,
        totalCartPrice,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}
