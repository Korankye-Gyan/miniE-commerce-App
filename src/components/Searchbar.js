import React from 'react'
import {AiOutlineSearch }from 'react-icons/ai'
const Searchbar = () => {
  return (
   
    <div className='flex item-center justify-center'>
      <div className='flex  my-10  bg-stone-100 sm:w-[600px] text-center items-center p-4 rounded-lg'>
      <AiOutlineSearch size={30}/>
      <input type="text" placeholder= "Search products" className='bg-transparent focus:outline-none w-full ml-4 placeholder:text-black'/>
    </div>
      </div>
   
  )
}

export default Searchbar
