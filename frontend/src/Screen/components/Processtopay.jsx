import React from 'react'
import KhaltiCheckout from "khalti-checkout-web"
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom';

const Processtopay = () => {
  const navigator=useNavigate();


 //khalticonfig
    let config = {
    // replace this key with yours
    "publicKey":"test_public_key_85590ece1e644b5f93c976ce9e3c0332",
   
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
           
             Cookies.remove("cartItems");


            if(payload.token){
                alert("payment sucess full")
               
            }

             

                

                
            
             
              
            
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

let checkout = new KhaltiCheckout(config);
let btn = document.getElementById("payment-button");

const paymentbykhalti=()=>{
 checkout.show({amount: carttotal*100});
 console.log("click khalti")
}


//reduxsystem


  const cart = useSelector(state => state.cart); 
  const { cartItems } = cart;
  console.log(cartItems)

 let carttotal=cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className="pcartcointainner">
    {  cartItems.length === 0 ? <div>

        {navigator("/cart")} <Link to="/cart">got to cart</Link>
    </div>:<div className="pcointainner  flex ">
     <div className="pcontaintent p-10 flex-1 bg-[#e0e0e0] m-10">

     <div className="pleft">
     
       <div className="ptocont">

        <h1 className='text-4xl text-red-600 py-2'>we only accepts khalti</h1>
       
        <button className='bg-[#530d64]  text-white p-6 rounded-md py-6 my-2' onClick={paymentbykhalti}>       pay by khalti
     </button>
       </div>
     </div>

     </div>

     {/*right*/}
     <div className="pcontaintent bg-[#ff9c07] p-10 m-10 rounded-lg">
        
      
        
     <div className="pright">
     <h2 className='text-[#e8eef1] font-bold text-3xl'>Order summery</h2>
     <div className="pdiv">
      <h3 className='text-[#e8eef1] font-bold text-3xl'>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
     </div>
   
     </div>
    
     </div>
   </div>
    }
   
 </div>
  )
}

export default Processtopay;