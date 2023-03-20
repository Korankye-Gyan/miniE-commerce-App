import React from 'react';

function Navbar() {
  
  /* Navigation Bar starts */
  return (
    <div className='navMenu'>
      <div className='logo'>
        Azubi <span className='brand'>FrontEnd</span>
      </div>
      <div className='menu'>
        <a href='' className='home'>
          Home
        </a>
        <a href=''>Cart</a>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;

