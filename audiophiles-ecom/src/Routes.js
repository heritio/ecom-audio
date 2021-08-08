import React, {useState,useReducer, useEffect} from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import "./styles/App.css";
import Header from "./components/header";
import Home from "./components/home";
import Info from "./components/info";
import Footer from "./components/footer";
import Headphones from "./components/headphones";
import Earphones from "./components/earphones";
import Speakers from "./components/speakers";
import data from "./data.json";
import Productdetail from "./components/productdetail";
import Checkout from "./components/checkout";
const ACTIONS = {
  ADDITEM: "add-item",
  INCREMENTITEM: "increment-item",
  INCREMENTCARTITEM: "increment-cart-item",
  DELETEITEM:"delete-item",
  DECREMENTITEM: "decrement-item",
  DECREMENTCARTITEM: "decrement-cart-item",
  CLEARCART: "clear-cart",
 
}
function cartReducer(cart,action){
  switch(action.type){
    case ACTIONS.ADDITEM:
         return [...cart, newCartItem(action.payload.product,action.payload.amount)]
    case ACTIONS.INCREMENTITEM: 
        return cart.map(item =>{
          if(item.id === action.payload.product.id){
            return {...item, amount: item.amount + action.payload.amount}
          }
          return item
        })
    case ACTIONS.INCREMENTCARTITEM:
      return cart.map(item =>{
        if(item.id === action.payload.product.id && item.amount >= 1){
          return {...item, amount: item.amount + 1}
        }
        return item
      })
      case ACTIONS.DECREMENTCARTITEM:
        return cart.map(item =>{
          if(item.id === action.payload.product.id && item.amount >= 1){
            return {...item, amount: item.amount - 1}
          }
          return item
        })
      case ACTIONS.DELETEITEM:
        return cart.filter(item => item.id !== action.payload.product.id)
      case ACTIONS.CLEARCART:
        return [];
     default: 
          return cart
    }

}

function newCartItem(product,amount){
   return{ product: product, amount: amount, id: product.id , price: product.price}
}



export default function Routes() {
  let [cart, dispatch]= useReducer(cartReducer, []);
  let [product, setProduct] = useState();
  let [amount, setAmount] = useState(1)
  let [totalPrice, setTotalPrice] = useState()
  
 
  
  function addCartItem(product){
    setProduct(product);
    if(cart.some( item => item['id'] === product.id )){
      dispatch({type: ACTIONS.INCREMENTITEM, payload: {product: product, amount:amount, id: product.id}});
    }else{
      dispatch({type: ACTIONS.ADDITEM, payload: {product: product, amount:amount ,id: product.id}});
    }  
    setProduct();
    setAmount(1)
  }

  function incrementProduct(product){
    dispatch({type: ACTIONS.INCREMENTCARTITEM, payload: {product: product, id: product.id}});
  }
  function deleteProduct(product){
    if(cart.some( item => item['id'] === product.id && item["amount"] > 1)){
      dispatch({type: ACTIONS.DECREMENTCARTITEM, payload: {product: product, id: product.id}});
    }else{
      dispatch({type: ACTIONS.DELETEITEM, payload: {product: product, id: product.id}})
    }
    
  }
  function clearCart(){
    dispatch({type: ACTIONS.CLEARCART});
  }

  let ourPrices = cart.map(item => ({ourTotal : item.amount * item.price}));
  let ourTotalPrice = ourPrices.reduce((a,b) => a + (b.ourTotal),0);
  
  
  let ourData = data;
  
  return (
    <BrowserRouter>
      <Header cart={cart}  incrementProduct={incrementProduct} deleteProduct={deleteProduct} clearCart={clearCart} ourTotalPrice={ourTotalPrice}/>
      <Switch>
        <Route exact path="/"  >
          <Home  data={ourData} />
        </Route>
        <Route exact path="/checkout"  >
          <Checkout clearCart={clearCart} />
        </Route>
        <Route
          exact
          path="/headphones"
        >
        <Headphones data={ourData}/>
        </Route>
        <Route
         
          path="/headphones/:id"
        >
        <Productdetail data={ourData} addCartItem={addCartItem} product={product} setProduct={setProduct}  setAmount={setAmount} amount={amount}/>
        </Route>
        <Route
          exact
          path="/speakers"
        >
           <Speakers data={ourData}/>
        </Route>
        <Route
          
          path="/speakers/:id"
        >
        <Productdetail data={ourData} addCartItem={addCartItem} product={product} setProduct={setProduct}  setAmount={setAmount} amount={amount} />
        </Route>
        <Route
          exact
          path="/earphones"
          
         >
        <Earphones  data={ourData}/>
        </Route>
        <Route
        
          path="/earphones/:id"
        >
          <Productdetail data={ourData} addCartItem={addCartItem}  product={product} setProduct={setProduct}  setAmount={setAmount} amount={amount}/>
        </Route>
      </Switch>
      <Info />
      <Footer />
    </BrowserRouter>
  );
}
