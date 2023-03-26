import React , {useContext} from 'react';
import { UserContext } from '../context/userContext';

function Navbar() {
  
  const { loggedIn} = useContext(UserContext)
  /* Navigation Bar starts */
  return (
    <nav className='navMenu shadow-md'>
      <div className='logo'>
      <img className='w-full h-5/6' src='/img/Logo.svg'/>
      </div>
      <div className='menu'>
        <a href='' className='home'>
          Home
        </a>
        <a href=''>Cart</a>
      </div>
      <div>
        <button>{loggedIn ? "logout" :"Login"}</button>
      </div>
    </nav>
  );
}

export default Navbar;

