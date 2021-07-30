import React from 'react'
import { Link } from "react-router-dom";
export default function Cart(props) {

    function hideCart(){
         let ourCart = document.querySelector(".cart-container");
         ourCart.classList.add("hide");
    }
    return (
        <div className="cart-container hide">
            <div className="cart-container__header">
              <h4 className="cart-container__title">
              Cart
              (<span>3</span>)
              </h4>
              <button className="cart-container__remove-btn">Remove all</button>
            </div>
            <div className="cart-container__items">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos commodi minus labore earum aut rem inventore? Hic, a? Totam doloremque doloribus cum earum debitis dolorum voluptatum amet voluptatem? Nemo, quibusdam.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque ea, odio eaque repudiandae non expedita. Voluptas autem cupiditate, distinctio sint et aliquid necessitatibus quidem deleniti tempora nostrum soluta debitis.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus enim ipsam, maxime excepturi ea iusto est? At mollitia saepe quasi eveniet ab et, placeat dolor repudiandae dolore asperiores dolorum!
            </div>
            <div className="cart-container__total">
                <h4>Total</h4>
                <h5>$5000</h5>
            </div>
            <Link to={{pathname: "/checkout"}}>
             <button onClick={()=>hideCart()} className="cart-container__checkout-btn">Checkout</button>
            </Link>

        </div>
    )
}
