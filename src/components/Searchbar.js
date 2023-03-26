import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Searchbar = () => {
  return (

      <div> 
      <FontAwesomeIcon icon={faMagnifyingGlass} className='searchGlass' />
      <input type="text" placeholder= "Search products" className='search'/>
      </div>
    
  )
}

export default Searchbar
