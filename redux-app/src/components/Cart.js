import { useDispatch, useSelector } from "react-redux"
import { removeCart } from "../store/cartSlice"

function Cart() {

  const items = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const removeFromCart = (product) => {
    dispatch(removeCart(product))
  }

  return (
    <div>
      <div className="cartWrapper">
        {items.map((item) => (
            <div key={item.id} className="cartCard">
                <img src={item.image} alt=''/>
                <h6>{item.title}</h6>
                <h4>{item.price}</h4>
                <button onClick={() => removeFromCart(item)} className="remove-btn">Remove From Cart</button>
            </div>
        ))}
      </div>  
    </div>
  )
}

export default Cart
