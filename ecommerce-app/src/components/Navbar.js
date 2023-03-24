import React , {useContext} from 'react';
import { UserContext } from '../context/userContext';

function Navbar() {
  
  const { loggedIn} = useContext(UserContext)
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
        <button>{loggedIn ? "logout" :"Login"}</button>
      </div>
    </div>
  );
}

export default Navbar;

