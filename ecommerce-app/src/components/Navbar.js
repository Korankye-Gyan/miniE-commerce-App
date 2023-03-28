import React from 'react';
import Button from './Button';
import { Link, NavLink, useLocation} from 'react-router-dom';

function Navbar() {
           const location = useLocation()
  return (
    <div className='navMenu shadow-sm'>
      <div>
        <Link to= '/'>
        <img src='img/logo.svg' alt='logo' style={{width:'80%'}}/>
        </Link> 
      </div>
      {
        location.pathname === '/login'?(
          <div className="flex items-center gap-4">
            <span >New to Azubi Shop?</span>
            <Link to= '/register'>
             <Button name='Register'/>
            </Link>
          </div>
        ):(
          location.pathname === '/register'?(
            <div className="flex items-center gap-4">
            <span>Already have an account</span>
            <Link to= 'login'>
             <Button name='Login'/>
            </Link>
          </div>
          ):(
          <div className='menu'>
            <NavLink to='/'>
             <span>Home</span>
           </NavLink>
           <NavLink to ='/Cart'>
           <span>Cart</span>
          </NavLink>
          <Link to= '/login'>
             <Button name='Login'/>
          </Link>
       </div>
          )
        )
      }
      
    </div>
  );
}
