import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Searchbar from './components/Searchbar';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <ProductList />
    </div>
  );
}

export default App;
