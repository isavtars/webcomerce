import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate,} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"

import {detailsProduct} from "../redux/Actions/productsActions"

import products from "../data.js"

const ProductScreen = (props) => {
 
    const navagator=useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)
    // const product = products.find(x => x._id === id);


    const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();


    useEffect(() => {

     dispatch(detailsProduct(id))
    }, [])
    
   
 
    const handleAddToCart = () => {
      // props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
      // navagator("/cart/"+id+"?qty=" +qty)
      navagator(`/cart/${id}?qty=${qty}`)
      console.log("click sucess")
    }
  
    return  <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product" ></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  {product.rating} Stars ({product.numReviews} Reviews)
          </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
            <div>
                    {product.description}
                  </div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>
                  Price: {product.price}
                </li>
                <li>
                  Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                </li>
                <li>
                  Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && <button onClick={handleAddToCart} className="button primary" >Add to Cart</button>
                  }
                </li>
              </ul>
            </div>
          </div>
        )
    }


  </div>
}

export default ProductScreen;
