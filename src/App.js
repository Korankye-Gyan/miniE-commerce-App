import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Registration from "./pages/Registration";
import Login from "./pages/Login"
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <Router>
      <Routes>
      < Route path="/" element={<Home/>}/>
      < Route path="/login" element={<Login />}/>
      < Route path="/register" element={<Registration/>}/>
      </Routes>
     </Router>
      </UserContextProvider>

    </div>
  );
}

export default App;
