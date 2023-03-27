import React , {useContext} from 'react';
import { UserContext } from '../context/userContext';

function Navbar() {
  
  const { loggedIn} = useContext(UserContext)
  /* Navigation Bar starts */
  return (
    <div className='navMenu'>
      <div>
        <img src='img/logo.svg' alt='logo'/>
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
    </div>
  );
}

export default Navbar;

