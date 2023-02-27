import React from 'react'

import "./index.css"
import { BrowserRouter as Router ,Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import Cart from './Screen/components/Cart';
import { useSelector } from 'react-redux';
import Fotter from './Screen/Fotter.jsx';
import Productfun from './Screen/components/Productfun';
import Processtopay from './Screen/components/Processtopay';



const App = () => {

  
  const cart = useSelector(state => state.cart); 
  const { cartItems } = cart;

  const openMenu = () => {
    document.querySelector(".sidebar").classNameList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classNameList.remove("open")
  }
  return (
    <Router>

    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
            </button>
          <a href="/" >amazona</a>
        </div>
        <div className="header-links">
        {/*   <Link to="cart">
          cart
          {cartItems.length>0&&(
            <span> {cartItems.length}</span>
          )}
          </Link>

          
          */}
          <Link to="/cart">
          <button type="button" className="relative inline-flex items-center p-5 text-sm font-medium text-center ">
           <h1 className='text-3xl'>cart  </h1> 
           {cartItems.length>0&&(
            <div className="absolute inline-flex items-center justify-center w-10 h-10 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-0 right-0 dark:border-gray-900">
            <h1 className='text-3xl'>{cartItems.length}</h1>
  </div>
          )}
 
  
</button>
</Link>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>

          <li>
            <a href="index.html">Shirts</a>
          </li>

        </ul>
      </aside>
      <main className="main">
 
         <div className="content">
             
            <Routes>
            <Route path="/"  element={<HomeScreen/>} />  
            <Route path="/product/:id"  element={<ProductScreen/>}/>
            <Route path="/cart/:id?" element={<Cart/>} />
            <Route path="/products" element={<Productfun/>} />
            <Route path='/processtopy' element={<Processtopay/>}/>


            </Routes>
           


          </div>
   

      </main>
      <Fotter/>
      
    </div>
    </Router>
  );
}

export default App
