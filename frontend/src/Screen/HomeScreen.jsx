import React,{useEffect,} from 'react'
// import products from "../data.js"
import { Link } from 'react-router-dom'



import { useDispatch,useSelector } from 'react-redux';
import {listProducts} from "../redux/Actions/productsActions"



const HomeScreen = (props) => {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;

  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(listProducts());
   
  }, [dispatch])
  
  
return loading?<div>loding....</div>:error?<div>error</div>:
<ul className="products">
  {

    products.map((product,index)=>{
    
        return <li key={index}>
        <div className="product">
          <Link to={'/product/' + product._id}>
            <img className="product-image" src={product.image} alt="product" />

          </Link>
          <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">{product.rating} Stars ({product.numReiews} Reviews)</div>
        </div>
      </li>}
      )
    }

     


  </ul>
}

export default HomeScreen
