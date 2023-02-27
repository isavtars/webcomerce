

import { combineReducers, applyMiddleware, compose } from 'redux';
import Cookie from 'js-cookie';
import {legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer,productSaveReducer, productDeleteReducer} from '../redux/Reducers/productsReducer';
import {cartReducer} from "../redux/Reducers/cartReducer";




const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };

console.log(cartItems);

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;