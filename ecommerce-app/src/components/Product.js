import React from 'react'
import Button from './Button'

const Product = ({product}) => {
  return (
    <div className='items'>
        <img src={product.image} alt={product.name} style={{maxWidth:'100%'}}/>
        <h4>{product.name}</h4>
        <p>{product.desc}</p>
        <div className='order'>
            <Button name = 'Place Order' /><p>${product.price.toFixed(2)}</p>
        </div>   
               
    </div>
  )
}

export default Product
