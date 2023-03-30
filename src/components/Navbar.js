import React from 'react';
import Button from './Button';
import { Link, NavLink, useLocation} from 'react-router-dom';

function Navbar() {
  const location = useLocation()
  return (
    <div className='navMenu mx-8 mt-1 shadow-md'>
      <div>
        <Link to= '/'>
        <img src='img/logo.svg' alt='logo' style={{width:'80%'}}/>
        </Link> 
      </div>
      {/* Home and Cart div */}
     { <div>
        {
          location.pathname === "/" &&
          <div className='menu'>
            <NavLink to='/' className="mt-2">
             <span className='font-bold hover:text-blue-800'>Home</span>
           </NavLink>
           <NavLink to ='/Cart' className="mt-2">
           <span className='font-bold hover:text-blue-800'>Cart</span>
          </NavLink>
             
       </div>
          }
          
          
      </div>
      }
      {/* login div */}
      {<div>
        {location.pathname === "/" &&
          <div className=''>
            <Link to= '/login'>
              <Button name='Login'/>
            </Link>
          </div> }
      </div>
         
      }
      
      {/* Register and login Div */}
      {
        <div>
          {location.pathname === '/login' &&
            
          <div className="flex items-center gap-4">
            <span >New to Azubi Shop?</span>
            <Link to='/register'>
              <button className='focus:outline-none  text-black font-bold bg-stone-100' >Create an Account</button>
            </Link>
          </div>
        }
          {location.pathname === '/register'&&
            <div className="flex items-center gap-4 focus:outline-none">
            <span>Already have an account ?</span>
            <Link to= '/login'>
            <Button name='Login'/>
            </Link>
          </div>
          }
      </div>
      }
        
      
      
    </div>
  );
}

export default Navbar;
