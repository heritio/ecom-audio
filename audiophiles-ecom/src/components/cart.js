import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import Cartitem from './cartitem';
export default function Cart(props) {
   
    function hideCart(){
         let ourCart = document.querySelector(".cart-container");
         ourCart.classList.add("hide");
    }
   
    
    
    
    return (
        <div className="cart-container hide ">
            <div className="cart-container__header">
              <h4 className="cart-container__title">
              Cart
              (<span>{props.cart.length}</span>)
              </h4>
              <button onClick={()=>props.clearCart()} className="cart-container__remove-btn">Remove all</button>
            </div>
            <div className="cart-container__items">
                  {props.cart.map( item => {
                     return <Cartitem item={item} incrementProduct={props.incrementProduct} deleteProduct={props.deleteProduct}/>
                  })}
                  
            </div>
            <div className="cart-container__total">
                <h4>Total</h4>
                <h5>$ {props.ourTotalPrice !== undefined ? props.ourTotalPrice : 0}</h5>
            </div>
            <Link to={{pathname: "/checkout", 
              state: {
                ourCart: props.cart,
                ourTotal: props.ourTotalPrice
              },}}>
             <button onClick={()=>hideCart()} className="cart-container__checkout-btn">Checkout</button>
            </Link>

        </div>
    )
}
