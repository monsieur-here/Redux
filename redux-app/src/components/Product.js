import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
function Product() {

  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getProducts = async () => {
        const res = await axios("https://fakestoreapi.com/products")
        setProducts(res.data)
    }
    getProducts()
  }, [])

  const handleAddToCart = (product) => {
    // Actually dispatch the action of adding to cart to the product as payload
    dispatch(addToCart(product))
  }

  return (
    <div className='productsWrapper'>
      {products.map((product) => (
        <div key={product.id} className='card'>
           <img src={product.image} alt=''/>
           <h6>{product.title}</h6>
           <h4>{product.price}</h4> 
           <button onClick={() => handleAddToCart(product)}className='btn'>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Product
