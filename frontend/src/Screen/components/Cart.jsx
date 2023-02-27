import React, { useEffect } from 'react'

import {addToCart, removeFromCart } from "../../redux/Actions/cartActions"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Cart = () => {
  
  const cart = useSelector(state => state.cart); 
  const { cartItems } = cart;

  console.log(cart)
  const navigator=useNavigate();

  const location = useLocation();
    const productid = location.pathname.split("/")[2];
    // console.log(productid)

    // const qty = location.pathname? Number(location.pathname.split("=")[1]) : 1;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
 
    console.log(qty)

  const dispatch = useDispatch();
  const removeFromCartHandler = ( productid) => {
    dispatch(removeFromCart(productid));
  }
  useEffect(() => {
    if (productid) {
      dispatch(addToCart(productid,qty));
    }
  }, [productid,qty,dispatch]);

  const checkoutHandler=()=>{
    navigator("/processtopy");
  }
  return (
    
 
    <div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <div>
            Price
          </div>
        </li>
        {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>

                  </div>
                  <div>
                    Qty:
                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  {item.price}
                </div>
              </li>
            )
        }
      </ul>

    </div>
    <div className="cart-action">
      <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
        Proceed to Checkout rsdsdsdf
      </button>

    </div>

  </div>
  )
}

export default Cart


               
            