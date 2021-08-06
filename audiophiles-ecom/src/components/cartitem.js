import React from 'react'

export default function Cartitem({item, incrementProduct, deleteProduct}) {
    
    return (
        <div className="cartitems">
            <div className="cartitems__product">
                <img className="cartitems__product-img" src={ "." +item.product.image.mobile} alt={"product:" + item.product.name} />
                <div className="cartitems__product-info">
                    <h5 className="cartitems__product-name">{item.product.name}</h5>
                    <p className="cartitems__product-price">$ {item.product.price * item.amount}</p>
                </div>
            </div>
            <div className="cartitems__add-to-cart-amount">
                            <button onClick={()=>deleteProduct(item.product)}  className="cartitems__add-to-cart-amount-sign">-</button>
                            <h4  className="cartitems__add-to-cart-amount-number">{item.amount}</h4>
                            <button onClick={()=>incrementProduct(item.product)}  className="cartitems__add-to-cart-amount-sign">+</button>
            </div>
        </div>
    )
}
