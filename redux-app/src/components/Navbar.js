import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
function Navbar() {

  //Fetch the items from the store
  const items = useSelector((state) => state.cart)
  console.log({ items })

  return (
    <div style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between"
    }
    }>
      <span className="logo">Redux Store</span>
      <div>
        <Link to="/" className="navLink" >Home</Link>
        <Link to="/cart" className="navLink">Cart</Link>
        <span className="cartCount">Cart Items: {items.length}</span>
      </div>
      
    </div>
  )
}

export default Navbar
