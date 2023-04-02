import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { UserContextProvider } from "./context/userContext";
import { ShopContextProvider } from "./context/cardContext";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="App">
      
      
   
        <Router>
        <ShopContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/details" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thanks" element={<ThankYou />} />

          </Routes>
          </UserContextProvider>
          </ShopContextProvider>
        </Router>
        
      
    </div>
  );
}

export default App;
