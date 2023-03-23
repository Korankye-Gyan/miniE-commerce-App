import React from 'react'
import Product from '../pages/Product'
const ProductList = () => {
    const products = [
        //products array starts here
    {
        id:1,
        image:'/img/menshirt.png',
        name:'Men Shirt',
        desc:'Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel',
        price:29
    },
    {
        id:2,
        image:'/img/nikesneaker.png',
        name:'Sneaker Nike',
        desc:'Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel',
        price:39
    },
    {
        id:3,
        image:'/img/pumasneaker.png',
        name:'Puma Sneaker',
        desc:'Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel',
        price:30
    },
    {
        id:4,
        image:'/img/alonzidress.png',
        name:'Alonzi Dress',
        desc:'Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel',
        price:19
    },
    {
        id:5,
        name:'Men Watch',
        image:'/img/watch.png',
        desc:'Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel',
        price:16
    },
    {
        id:6,
        image:'/img/cap.png',
        name:'Men Cap',
        desc:'Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel',
        price:10
    },
    {
        id:7,
        image:'/img/jeans.png',
        name:'Ladies Jeans',
        desc:'Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel',
        price:40
    },
    {
        id:8,
        image:'/img/longsleeves.png',
        name:'Long Sleeves',
        desc:'Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel',
        price:35
    },
    //...other products
]
    //Product List component logic starts here
    const productList = products.map(product => <Product key={product.id} product = {product} />) 
    //Product List component logic ends here
  return <div className='container'>{productList}</div> 

}

export default ProductList
